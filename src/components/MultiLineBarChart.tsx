import React, { useEffect, useState } from 'react';

interface DataSeries {
  name: string;
  color: string;
  data: number[];
  isBold?: boolean;
}

interface MultiLineBarChartProps {
  data: DataSeries[];
  labels: string[];
  title: string;
  yAxisLabel: string;
  xAxisLabel: string;
  animate?: boolean;
}

const MultiLineBarChart: React.FC<MultiLineBarChartProps> = ({
  data,
  labels,
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

    const chartElement = document.getElementById(`multi-bar-chart-${title.replace(/\s+/g, '-')}`);
    if (chartElement) {
      observer.observe(chartElement);
    }

    return () => observer.disconnect();
  }, [animate, title, isVisible]);

  const maxValue = Math.max(...data.flatMap(series => series.data));
  const chartHeight = 320;
  const chartWidth = 550;
  const padding = 60;
  const barGroupWidth = (chartWidth - 2 * padding) / labels.length;
  const barWidth = Math.max(barGroupWidth / (data.length + 1), 20);

  const getX = (labelIndex: number, seriesIndex: number) =>
    padding + labelIndex * barGroupWidth + seriesIndex * barWidth + barWidth / 2;

  const getBarHeight = (value: number) =>
    (value / maxValue) * (chartHeight - 2 * padding);

  return (
    <div 
      id={`multi-bar-chart-${title.replace(/\s+/g, '-')}`}
      className="bg-white rounded-lg shadow-md p-6 mb-6 transform transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      
      {/* Animated Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {data.map((series, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
            style={{
              opacity: animationProgress,
              transform: animationProgress > 0 ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease-out ${index * 0.1}s`
            }}
          >
            <div
              className="w-4 h-4 rounded transition-all duration-300"
              style={{ 
                backgroundColor: series.color,
                transform: animationProgress > 0.5 ? 'scale(1)' : 'scale(0)',
                transition: `transform 0.3s ease-out ${index * 0.1 + 0.5}s`
              }}
            />
            <span className={`text-sm ${series.isBold ? 'font-bold' : 'font-medium'} text-gray-700`}>
              {series.name}
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        <svg width={chartWidth} height={chartHeight} className="border rounded overflow-hidden">
          <defs>
            {/* Grid pattern */}
            <pattern id={`barGrid-${title.replace(/\s+/g, '-')}`} width="50\" height="50\" patternUnits="userSpaceOnUse">
              <path 
                d="M 50 0 L 0 0 0 50" 
                fill="none" 
                stroke="#f3f4f6" 
                strokeWidth="1"
                style={{
                  opacity: animationProgress * 0.5,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            </pattern>
            
            {/* Gradients for each series */}
            {data.map((series, index) => (
              <linearGradient key={index} id={`barGradient-${index}-${title.replace(/\s+/g, '-')}`} x1="0%\" y1="0%\" x2="0%\" y2="100%">
                <stop offset="0%" stopColor={series.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={series.color} stopOpacity="0.7" />
              </linearGradient>
            ))}
            
            {/* Glow effect for bold series */}
            <filter id={`barGlow-${title.replace(/\s+/g, '-')}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <rect width="100%" height="100%" fill={`url(#barGrid-${title.replace(/\s+/g, '-')})`} />

          {/* Animated axes */}
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={chartHeight - padding}
            stroke="#374151"
            strokeWidth="2"
            style={{
              strokeDasharray: chartHeight - 2 * padding,
              strokeDashoffset: (chartHeight - 2 * padding) * (1 - animationProgress),
              transition: 'stroke-dashoffset 1s ease-out'
            }}
          />

          <line
            x1={padding}
            y1={chartHeight - padding}
            x2={chartWidth - padding}
            y2={chartHeight - padding}
            stroke="#374151"
            strokeWidth="2"
            style={{
              strokeDasharray: chartWidth - 2 * padding,
              strokeDashoffset: (chartWidth - 2 * padding) * (1 - animationProgress),
              transition: 'stroke-dashoffset 1s ease-out 0.2s'
            }}
          />

          {/* Animated bars */}
          {data.map((series, seriesIndex) =>
            series.data.map((value, labelIndex) => {
              const x = getX(labelIndex, seriesIndex);
              const maxBarHeight = getBarHeight(value);
              const animatedHeight = maxBarHeight * animationProgress;
              const y = chartHeight - padding - animatedHeight;
              const delay = (seriesIndex * labels.length + labelIndex) * 0.05;

              return (
                <g key={`${seriesIndex}-${labelIndex}`}>
                  {/* Bar shadow */}
                  <rect
                    x={x - barWidth / 2 + 2}
                    y={y + 2}
                    width={barWidth}
                    height={animatedHeight}
                    fill="rgba(0,0,0,0.1)"
                    rx="2"
                    style={{
                      transition: `all 0.8s ease-out ${delay}s`
                    }}
                  />
                  
                  {/* Main bar */}
                  <rect
                    x={x - barWidth / 2}
                    y={y}
                    width={barWidth}
                    height={animatedHeight}
                    fill={`url(#barGradient-${seriesIndex}-${title.replace(/\s+/g, '-')})`}
                    stroke={series.isBold ? "#1f2937" : "none"}
                    strokeWidth={series.isBold ? "2" : "0"}
                    rx="3"
                    filter={series.isBold ? `url(#barGlow-${title.replace(/\s+/g, '-')})` : 'none'}
                    style={{
                      transition: `all 0.8s ease-out ${delay}s`,
                      transform: animationProgress > 0.5 ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'bottom'
                    }}
                  />
                  
                  {/* Animated value labels */}
                  <text
                    x={x}
                    y={y - 8}
                    textAnchor="middle"
                    className={`text-xs ${series.isBold ? 'font-bold' : 'font-medium'} fill-gray-700`}
                    style={{
                      opacity: animationProgress * 0.9,
                      transition: `all 0.5s ease-out ${delay + 0.5}s`,
                      transform: animationProgress > 0.7 ? 'translateY(0)' : 'translateY(10px)'
                    }}
                  >
                    {value}
                  </text>
                </g>
              );
            })
          )}

          {/* Animated X-axis labels */}
          {labels.map((label, index) => {
            const x = padding + index * barGroupWidth + barGroupWidth / 2;
            const delay = index * 0.1;
            
            return (
              <text
                key={index}
                x={x}
                y={chartHeight - padding + 25}
                textAnchor="middle"
                className="text-sm font-medium fill-gray-600"
                style={{
                  opacity: animationProgress,
                  transition: `all 0.5s ease-out ${delay + 1}s`,
                  transform: animationProgress > 0.8 ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                {label}
              </text>
            );
          })}

          {/* Animated Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const value = Math.round(maxValue * ratio);
            const y = chartHeight - padding - ratio * (chartHeight - 2 * padding);
            const delay = index * 0.1;
            
            return (
              <g key={ratio}>
                <line
                  x1={padding - 5}
                  y1={y}
                  x2={padding}
                  y2={y}
                  stroke="#374151"
                  strokeWidth="1"
                  style={{
                    opacity: animationProgress,
                    transition: `opacity 0.3s ease-out ${delay + 1.2}s`
                  }}
                />
                <text
                  x={padding - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-sm font-medium fill-gray-600"
                  style={{
                    opacity: animationProgress,
                    transition: `opacity 0.3s ease-out ${delay + 1.2}s`
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
          className="flex justify-center mt-2"
          style={{
            opacity: animationProgress,
            transition: 'opacity 0.5s ease-out 1.8s'
          }}
        >
          <span className="text-sm text-gray-600 font-semibold">{xAxisLabel}</span>
        </div>
        <div 
          className="absolute left-2 top-1/2 transform -rotate-90 -translate-y-1/2"
          style={{
            opacity: animationProgress,
            transition: 'opacity 0.5s ease-out 1.8s'
          }}
        >
          <span className="text-sm text-gray-600 font-semibold">{yAxisLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default MultiLineBarChart;