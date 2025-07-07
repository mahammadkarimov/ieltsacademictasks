import React, { useEffect, useState } from 'react';

interface PieDataPoint {
  label: string;
  value: number;
  color: string;
  isBold?: boolean;
}

interface PieChartProps {
  data: PieDataPoint[];
  title: string;
  animate?: boolean;
  showPercentages?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  animate = true,
  showPercentages = true
}) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (animate) {
            const timer = setTimeout(() => {
              setAnimationProgress(1);
            }, 300);
            return () => clearTimeout(timer);
          } else {
            setAnimationProgress(1);
          }
        }
      },
      { threshold: 0.3 }
    );

    const chartElement = document.getElementById(`pie-chart-${title.replace(/\s+/g, '-')}`);
    if (chartElement) {
      observer.observe(chartElement);
    }

    return () => observer.disconnect();
  }, [animate, title, isVisible]);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const chartSize = 350;
  const radius = 110;
  const centerX = chartSize / 2;
  const centerY = chartSize / 2;

  let currentAngle = -90; // Start from top

  const createArcPath = (startAngle: number, endAngle: number, outerRadius: number, innerRadius = 0) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + outerRadius * Math.cos(startAngleRad);
    const y1 = centerY + outerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(endAngleRad);
    const y2 = centerY + outerRadius * Math.sin(endAngleRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    if (innerRadius === 0) {
      return `M ${centerX} ${centerY} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    } else {
      const x3 = centerX + innerRadius * Math.cos(endAngleRad);
      const y3 = centerY + innerRadius * Math.sin(endAngleRad);
      const x4 = centerX + innerRadius * Math.cos(startAngleRad);
      const y4 = centerY + innerRadius * Math.sin(startAngleRad);
      
      return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
    }
  };

  const getLabelPosition = (startAngle: number, endAngle: number, labelRadius: number) => {
    const midAngle = (startAngle + endAngle) / 2;
    const midAngleRad = (midAngle * Math.PI) / 180;
    return {
      x: centerX + labelRadius * Math.cos(midAngleRad),
      y: centerY + labelRadius * Math.sin(midAngleRad)
    };
  };

  return (
    <div 
      id={`pie-chart-${title.replace(/\s+/g, '-')}`}
      className="bg-white rounded-lg shadow-md p-6 mb-6 transform transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Animated Pie Chart */}
        <div className="relative">
          <svg width={chartSize} height={chartSize} className="drop-shadow-lg overflow-hidden">
            <defs>
              {/* Gradients for each slice */}
              {data.map((item, index) => (
                <radialGradient key={index} id={`pieGradient-${index}-${title.replace(/\s+/g, '-')}`} cx="30%\" cy="30%">
                  <stop offset="0%" stopColor={item.color} stopOpacity="1" />
                  <stop offset="100%" stopColor={item.color} stopOpacity="0.8" />
                </radialGradient>
              ))}
              
              {/* Glow effect for bold slices */}
              <filter id={`pieGlow-${title.replace(/\s+/g, '-')}`}>
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Drop shadow */}
              <filter id={`pieShadow-${title.replace(/\s+/g, '-')}`}>
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
            </defs>
            
            {/* Background circle for animation effect */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius + 5}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * (radius + 5)}`}
              strokeDashoffset={`${2 * Math.PI * (radius + 5) * (1 - animationProgress)}`}
              style={{
                transition: 'stroke-dashoffset 1.5s ease-out',
                transform: 'rotate(-90deg)',
                transformOrigin: `${centerX}px ${centerY}px`
              }}
            />

            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const fullAngle = (percentage / 100) * 360;
              const animatedAngle = fullAngle * animationProgress;
              const startAngle = currentAngle;
              const endAngle = currentAngle + animatedAngle;
              
              const outerRadius = item.isBold ? radius + 15 : radius;
              const arcPath = createArcPath(startAngle, endAngle, outerRadius);
              const labelPos = getLabelPosition(startAngle, startAngle + fullAngle, radius + 35);
              
              currentAngle += fullAngle;
              const delay = index * 0.2;

              return (
                <g key={index}>
                  {/* Slice shadow */}
                  <path
                    d={createArcPath(startAngle, endAngle, outerRadius)}
                    fill="rgba(0,0,0,0.1)"
                    transform="translate(2, 4)"
                    style={{
                      opacity: animationProgress * 0.3,
                      transition: `all 0.8s ease-out ${delay}s`
                    }}
                  />
                  
                  {/* Main slice */}
                  <path
                    d={arcPath}
                    fill={`url(#pieGradient-${index}-${title.replace(/\s+/g, '-')})`}
                    stroke={item.isBold ? "#1f2937" : "#ffffff"}
                    strokeWidth={item.isBold ? "3" : "2"}
                    filter={item.isBold ? `url(#pieGlow-${title.replace(/\s+/g, '-')})` : `url(#pieShadow-${title.replace(/\s+/g, '-')})`}
                    className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                    style={{
                      opacity: animationProgress,
                      transition: `all 0.8s ease-out ${delay}s`,
                      transform: item.isBold && animationProgress > 0.8 ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: `${centerX}px ${centerY}px`
                    }}
                  />
                  
                  {/* Percentage labels with animation */}
                  {showPercentages && percentage > 5 && (
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-sm ${item.isBold ? 'font-bold' : 'font-medium'} fill-gray-800`}
                      style={{
                        opacity: animationProgress * 0.9,
                        transition: `all 0.5s ease-out ${delay + 0.5}s`,
                        transform: animationProgress > 0.7 ? 'scale(1)' : 'scale(0)',
                        transformOrigin: `${labelPos.x}px ${labelPos.y}px`
                      }}
                    >
                      {percentage.toFixed(1)}%
                    </text>
                  )}
                </g>
              );
            })}
            
            {/* Center circle for donut effect (optional) */}
            <circle
              cx={centerX}
              cy={centerY}
              r="20"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
              style={{
                opacity: animationProgress,
                transition: 'opacity 0.5s ease-out 1s',
                transform: animationProgress > 0.8 ? 'scale(1)' : 'scale(0)',
                transformOrigin: `${centerX}px ${centerY}px`
              }}
            />
          </svg>
        </div>

        {/* Animated Legend */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const delay = index * 0.1;
            
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 group cursor-pointer"
                style={{
                  opacity: animationProgress,
                  transform: animationProgress > 0 ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.5s ease-out ${delay + 1}s`
                }}
              >
                <div
                  className={`w-5 h-5 rounded transition-all duration-300 group-hover:scale-110 ${item.isBold ? 'ring-2 ring-gray-400 ring-offset-1' : ''}`}
                  style={{ 
                    backgroundColor: item.color,
                    transform: animationProgress > 0.5 ? 'scale(1)' : 'scale(0)',
                    transition: `transform 0.3s ease-out ${delay + 1.2}s`
                  }}
                />
                <div className="flex flex-col">
                  <span className={`text-sm ${item.isBold ? 'font-bold' : 'font-medium'} text-gray-700 group-hover:text-gray-900 transition-colors`}>
                    {item.label}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.value} ({percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PieChart;