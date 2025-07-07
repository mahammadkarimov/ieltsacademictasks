import React, { useEffect, useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
  isBold?: boolean;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  yAxisLabel: string;
  xAxisLabel: string;
  animate?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  title, 
  yAxisLabel, 
  xAxisLabel, 
  animate = true 
}) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (animate) {
            // Start animation after a brief delay
            const timer = setTimeout(() => {
              setAnimationProgress(1);
            }, 200);
            return () => clearTimeout(timer);
          } else {
            setAnimationProgress(1);
          }
        }
      },
      { threshold: 0.3 }
    );

    const chartElement = document.getElementById(`line-chart-${title.replace(/\s+/g, '-')}`);
    if (chartElement) {
      observer.observe(chartElement);
    }

    return () => observer.disconnect();
  }, [animate, title, isVisible]);

  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 300;
  const chartWidth = 600;
  const paddingLeft = 80;
  const paddingRight = 40;
  const paddingTop = 40;
  const paddingBottom = 80;

  const getX = (index: number) => 
    (index / (data.length - 1)) * (chartWidth - paddingLeft - paddingRight) + paddingLeft;
  
  const getY = (value: number) => 
    chartHeight - paddingBottom - (value / maxValue) * (chartHeight - paddingTop - paddingBottom);

  // Create animated path segments that draw sequentially
  const createAnimatedSegments = () => {
    const segments = [];
    const totalSegments = data.length - 1;
    
    for (let i = 0; i < totalSegments; i++) {
      const currentPoint = data[i];
      const nextPoint = data[i + 1];
      
      // Calculate animation progress for this specific segment
      const segmentStart = i / totalSegments;
      const segmentEnd = (i + 1) / totalSegments;
      const segmentProgress = Math.min(1, Math.max(0, 
        (animationProgress - segmentStart) / (segmentEnd - segmentStart)
      ));
      
      const x1 = getX(i);
      const x2 = getX(i + 1);
      const y1 = getY(currentPoint.value);
      const y2 = getY(nextPoint.value);
      
      // Animate from bottom to actual position
      const baseY = chartHeight - paddingBottom;
      const animatedY1 = baseY + (y1 - baseY) * Math.min(1, animationProgress * 2);
      const animatedY2 = baseY + (y2 - baseY) * Math.min(1, animationProgress * 2);
      
      // For line drawing, interpolate the end point
      const animatedX2 = x1 + (x2 - x1) * segmentProgress;
      const finalY2 = animatedY1 + (animatedY2 - animatedY1) * segmentProgress;
      
      const shouldBeBold = currentPoint.isBold || nextPoint.isBold;
      
      segments.push({
        x1,
        y1: animatedY1,
        x2: animatedX2,
        y2: finalY2,
        isBold: shouldBeBold,
        opacity: segmentProgress,
        segmentIndex: i
      });
    }
    return segments;
  };

  const animatedSegments = createAnimatedSegments();

  return (
    <div 
      id={`line-chart-${title.replace(/\s+/g, '-')}`}
      className="bg-white rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-500 border border-gray-100"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      <h3 
        className="text-xl font-bold text-gray-800 mb-6 text-center"
        style={{
          opacity: animationProgress,
          transform: animationProgress > 0 ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.6s ease-out 0.2s'
        }}
      >
        {title}
      </h3>
      
      <div className="relative flex justify-center">
        <svg width={chartWidth} height={chartHeight} className="rounded-lg overflow-hidden">
          <defs>
            {/* Animated background grid */}
            <pattern id={`grid-${title.replace(/\s+/g, '-')}`} width="40\" height="40\" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="#f8fafc" 
                strokeWidth="1"
                style={{
                  opacity: animationProgress * 0.6,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            </pattern>
            
            {/* Gradient for line */}
            <linearGradient id={`lineGradient-${title.replace(/\s+/g, '-')}`} x1="0%\" y1="0%\" x2="100%\" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
            </linearGradient>
            
            {/* Area gradient */}
            <linearGradient id={`areaGradient-${title.replace(/\s+/g, '-')}`} x1="0%\" y1="0%\" x2="0%\" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
            
            {/* Glow effect */}
            <filter id={`glow-${title.replace(/\s+/g, '-')}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Drop shadow */}
            <filter id={`shadow-${title.replace(/\s+/g, '-')}`}>
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
            </filter>
          </defs>
          
          <rect width="100%" height="100%" fill={`url(#grid-${title.replace(/\s+/g, '-')})`} />
          
          {/* Animated axes */}
          <line 
            x1={paddingLeft} 
            y1={paddingTop} 
            x2={paddingLeft} 
            y2={chartHeight - paddingBottom} 
            stroke="#374151" 
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: chartHeight - paddingTop - paddingBottom,
              strokeDashoffset: (chartHeight - paddingTop - paddingBottom) * (1 - animationProgress),
              transition: 'stroke-dashoffset 1.2s ease-out 0.3s'
            }}
          />
          
          <line 
            x1={paddingLeft} 
            y1={chartHeight - paddingBottom} 
            x2={chartWidth - paddingRight} 
            y2={chartHeight - paddingBottom} 
            stroke="#374151" 
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: chartWidth - paddingLeft - paddingRight,
              strokeDashoffset: (chartWidth - paddingLeft - paddingRight) * (1 - animationProgress),
              transition: 'stroke-dashoffset 1.2s ease-out 0.5s'
            }}
          />
          
          {/* Animated area under the curve */}
          {animatedSegments.length > 0 && (
            <path
              d={`M ${paddingLeft} ${chartHeight - paddingBottom} ${animatedSegments.map(segment => 
                `L ${segment.x1} ${segment.y1} L ${segment.x2} ${segment.y2}`
              ).join(' ')} L ${animatedSegments[animatedSegments.length - 1]?.x2 || paddingLeft} ${chartHeight - paddingBottom} Z`}
              fill={`url(#areaGradient-${title.replace(/\s+/g, '-')})`}
              style={{
                transition: 'all 0.8s ease-out'
              }}
            />
          )}
          
          {/* Sequential animated line segments */}
          {animatedSegments.map((segment, index) => (
            <g key={index}>
              {/* Glow effect for bold segments */}
              {segment.isBold && (
                <line
                  x1={segment.x1}
                  y1={segment.y1}
                  x2={segment.x2}
                  y2={segment.y2}
                  stroke="#3b82f6"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.2"
                  style={{
                    opacity: segment.opacity * 0.2,
                    transition: `all 0.4s ease-out ${index * 0.3 + 0.8}s`
                  }}
                />
              )}
              
              {/* Main line segment */}
              <line
                x1={segment.x1}
                y1={segment.y1}
                x2={segment.x2}
                y2={segment.y2}
                stroke={`url(#lineGradient-${title.replace(/\s+/g, '-')})`}
                strokeWidth={segment.isBold ? "6" : "4"}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={`url(#shadow-${title.replace(/\s+/g, '-')})`}
                style={{
                  opacity: segment.opacity,
                  transition: `all 0.4s ease-out ${index * 0.3 + 0.8}s`
                }}
              />
            </g>
          ))}
          
          {/* Animated data points */}
          {data.map((point, index) => {
            const x = getX(index);
            const baseY = chartHeight - paddingBottom;
            const targetY = getY(point.value);
            const pointProgress = Math.min(1, Math.max(0, animationProgress * 1.5 - index * 0.2));
            const animatedY = baseY + (targetY - baseY) * pointProgress;
            const delay = index * 0.2 + 1.5;
            
            return (
              <g key={index}>
                {/* Pulse effect for bold points */}
                {point.isBold && pointProgress > 0.8 && (
                  <circle
                    cx={x}
                    cy={animatedY}
                    r="20"
                    fill="#3b82f6"
                    fillOpacity="0.1"
                    style={{
                      animation: 'pulse 2s infinite',
                      opacity: pointProgress
                    }}
                  />
                )}
                
                {/* Point shadow */}
                <circle
                  cx={x + 1}
                  cy={animatedY + 2}
                  r={point.isBold ? "10" : "7"}
                  fill="rgba(0,0,0,0.1)"
                  style={{
                    opacity: pointProgress * 0.3,
                    transition: `all 0.5s ease-out ${delay}s`,
                    transform: pointProgress > 0.5 ? 'scale(1)' : 'scale(0)',
                    transformOrigin: `${x + 1}px ${animatedY + 2}px`
                  }}
                />
                
                {/* Main data point */}
                <circle
                  cx={x}
                  cy={animatedY}
                  r={point.isBold ? "10" : "7"}
                  fill="#ffffff"
                  stroke={point.isBold ? "#1d4ed8" : "#3b82f6"}
                  strokeWidth={point.isBold ? "5" : "4"}
                  filter={`url(#shadow-${title.replace(/\s+/g, '-')})`}
                  style={{
                    opacity: pointProgress,
                    transition: `all 0.5s ease-out ${delay}s`,
                    transform: pointProgress > 0.5 ? 'scale(1)' : 'scale(0)',
                    transformOrigin: `${x}px ${animatedY}px`
                  }}
                />
                
                {/* Animated value labels */}
                <text
                  x={x}
                  y={animatedY - (point.isBold ? 25 : 20)}
                  textAnchor="middle"
                  className={`text-sm font-bold fill-gray-700 ${point.isBold ? 'text-base' : ''}`}
                  style={{
                    opacity: pointProgress * 0.9,
                    transition: `all 0.5s ease-out ${delay + 0.2}s`,
                    transform: pointProgress > 0.7 ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  {point.value}
                </text>
                
                {/* X-axis labels */}
                <text
                  x={x}
                  y={chartHeight - paddingBottom + 25}
                  textAnchor="middle"
                  className={`text-sm font-semibold fill-gray-600 ${point.isBold ? 'font-bold' : ''}`}
                  style={{
                    opacity: animationProgress,
                    transition: `opacity 0.5s ease-out ${delay + 0.5}s`
                  }}
                >
                  {point.label}
                </text>
              </g>
            );
          })}
          
          {/* Animated Y-axis labels and grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const value = Math.round(maxValue * ratio);
            const y = chartHeight - paddingBottom - ratio * (chartHeight - paddingTop - paddingBottom);
            const delay = index * 0.1 + 1.2;
            
            return (
              <g key={ratio}>
                {/* Horizontal grid lines */}
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  style={{
                    opacity: animationProgress * 0.5,
                    transition: `opacity 0.3s ease-out ${delay}s`
                  }}
                />
                
                {/* Y-axis tick marks */}
                <line
                  x1={paddingLeft - 8}
                  y1={y}
                  x2={paddingLeft}
                  y2={y}
                  stroke="#374151"
                  strokeWidth="2"
                  style={{
                    opacity: animationProgress,
                    transition: `opacity 0.3s ease-out ${delay}s`
                  }}
                />
                
                {/* Y-axis labels */}
                <text
                  x={paddingLeft - 15}
                  y={y + 5}
                  textAnchor="end"
                  className="text-sm font-semibold fill-gray-600"
                  style={{
                    opacity: animationProgress,
                    transition: `opacity 0.3s ease-out ${delay}s`
                  }}
                >
                  {value}
                </text>
              </g>
            );
          })}
        </svg>
        
        {/* Animated axis labels */}
        <div 
          className="flex justify-center mt-4"
          style={{
            opacity: animationProgress,
            transition: 'opacity 0.6s ease-out 2s'
          }}
        >
          <span className="text-base text-gray-700 font-bold bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
            {xAxisLabel}
          </span>
        </div>
        
        <div 
          className="absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2"
          style={{
            opacity: animationProgress,
            transition: 'opacity 0.6s ease-out 2s'
          }}
        >
          <span className="text-base text-gray-700 font-bold bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
            {yAxisLabel}
          </span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.1; 
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.2; 
          }
        }
      `}</style>
    </div>
  );
};

export default LineChart;