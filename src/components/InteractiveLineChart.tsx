import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, Eye, EyeOff, CheckCircle } from 'lucide-react';

interface DataPoint {
  label: string;
  value: number;
  isBold?: boolean;
}

interface InteractiveLineChartProps {
  data: DataPoint[];
  title: string;
  yAxisLabel: string;
  xAxisLabel: string;
  description: string;
  maxValue?: number;
}

const InteractiveLineChart: React.FC<InteractiveLineChartProps> = ({
  data,
  title,
  yAxisLabel,
  xAxisLabel,
  description,
  maxValue: propMaxValue
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [userPath, setUserPath] = useState<{ x: number; y: number }[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const chartHeight = 300;
  const chartWidth = 600;
  const paddingLeft = 80;
  const paddingRight = 40;
  const paddingTop = 40;
  const paddingBottom = 80;

  const maxValue = propMaxValue || Math.max(...data.map(d => d.value));

  const getX = (index: number) => 
    (index / (data.length - 1)) * (chartWidth - paddingLeft - paddingRight) + paddingLeft;
  
  const getY = (value: number) => 
    chartHeight - paddingBottom - (value / maxValue) * (chartHeight - paddingTop - paddingBottom);

  const getValueFromY = (y: number) => 
    ((chartHeight - paddingBottom - y) / (chartHeight - paddingTop - paddingBottom)) * maxValue;

  useEffect(() => {
    drawChart();
  }, [showAnswer, userPath]);

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, chartWidth, chartHeight);

    // Draw grid
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = paddingTop + (i / 4) * (chartHeight - paddingTop - paddingBottom);
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(chartWidth - paddingRight, y);
      ctx.stroke();
    }

    // Vertical grid lines
    for (let i = 0; i < data.length; i++) {
      const x = getX(i);
      ctx.beginPath();
      ctx.moveTo(x, paddingTop);
      ctx.lineTo(x, chartHeight - paddingBottom);
      ctx.stroke();
    }

    ctx.setLineDash([]);

    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, chartHeight - paddingBottom);
    ctx.stroke();

    // X-axis
    ctx.beginPath();
    ctx.moveTo(paddingLeft, chartHeight - paddingBottom);
    ctx.lineTo(chartWidth - paddingRight, chartHeight - paddingBottom);
    ctx.stroke();

    // Draw user's path
    if (userPath.length > 1) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      ctx.beginPath();
      ctx.moveTo(userPath[0].x, userPath[0].y);
      for (let i = 1; i < userPath.length; i++) {
        ctx.lineTo(userPath[i].x, userPath[i].y);
      }
      ctx.stroke();

      // Draw user points
      ctx.fillStyle = '#ef4444';
      userPath.forEach((point, index) => {
        if (index % 10 === 0) { // Show points every 10th position to avoid clutter
          ctx.beginPath();
          ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
    }

    // Draw correct answer if shown
    if (showAnswer) {
      // Draw correct line
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash([]);

      ctx.beginPath();
      data.forEach((point, index) => {
        const x = getX(index);
        const y = getY(point.value);
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      // Draw correct points
      data.forEach((point, index) => {
        const x = getX(index);
        const y = getY(point.value);
        
        // Point shadow
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.beginPath();
        ctx.arc(x + 1, y + 2, point.isBold ? 10 : 7, 0, 2 * Math.PI);
        ctx.fill();

        // Main point
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, point.isBold ? 10 : 7, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = point.isBold ? '#059669' : '#10b981';
        ctx.lineWidth = point.isBold ? 5 : 4;
        ctx.beginPath();
        ctx.arc(x, y, point.isBold ? 10 : 7, 0, 2 * Math.PI);
        ctx.stroke();
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isSubmitted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only allow drawing within the chart area
    if (x >= paddingLeft && x <= chartWidth - paddingRight && 
        y >= paddingTop && y <= chartHeight - paddingBottom) {
      setIsDrawing(true);
      setUserPath([{ x, y }]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || isSubmitted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only allow drawing within the chart area
    if (x >= paddingLeft && x <= chartWidth - paddingRight && 
        y >= paddingTop && y <= chartHeight - paddingBottom) {
      setUserPath(prev => [...prev, { x, y }]);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const calculateAccuracy = () => {
    if (userPath.length === 0) return 0;

    let totalError = 0;
    let validPoints = 0;

    // Sample points along the user's path and compare with correct values
    for (let i = 0; i < data.length; i++) {
      const correctX = getX(i);
      const correctY = getY(data[i].value);

      // Find the closest user point to this X position
      const closestUserPoint = userPath.reduce((closest, point) => {
        const currentDistance = Math.abs(point.x - correctX);
        const closestDistance = Math.abs(closest.x - correctX);
        return currentDistance < closestDistance ? point : closest;
      });

      if (Math.abs(closestUserPoint.x - correctX) <= 20) { // Within 20px tolerance
        const error = Math.abs(closestUserPoint.y - correctY);
        const maxError = chartHeight - paddingTop - paddingBottom;
        const normalizedError = error / maxError;
        totalError += normalizedError;
        validPoints++;
      }
    }

    if (validPoints === 0) return 0;
    const averageError = totalError / validPoints;
    return Math.max(0, Math.min(100, (1 - averageError) * 100));
  };

  const handleSubmit = () => {
    const acc = calculateAccuracy();
    setAccuracy(acc);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserPath([]);
    setIsSubmitted(false);
    setAccuracy(null);
    setShowAnswer(false);
  };

  const getAccuracyColor = (acc: number) => {
    if (acc >= 80) return 'text-green-600';
    if (acc >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAccuracyMessage = (acc: number) => {
    if (acc >= 90) return 'Excellent! Your line is very accurate.';
    if (acc >= 80) return 'Great job! Your line closely matches the data.';
    if (acc >= 60) return 'Good attempt! Try to follow the data points more closely.';
    if (acc >= 40) return 'Keep practicing! Pay attention to the trend changes.';
    return 'Try again! Focus on the overall pattern of the data.';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 font-medium mb-2">Instructions:</p>
        <p className="text-blue-700 text-sm leading-relaxed">{description}</p>
        <p className="text-blue-600 text-xs mt-2 italic">
          Click and drag to draw your line. Try to match the pattern described        </p>
      </div>

      <div className="relative flex justify-center mb-6">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={chartWidth}
            height={chartHeight}
            className={`border-2 border-gray-300 rounded-lg ${
              isSubmitted ? 'cursor-not-allowed' : 'cursor-crosshair'
            } bg-white shadow-inner`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
          
          {/* Axis labels */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <span className="text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded shadow-sm">
              {xAxisLabel}
            </span>
          </div>
          
          <div className="absolute left-2 top-1/2 transform -rotate-90 -translate-y-1/2">
            <span className="text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded shadow-sm">
              {yAxisLabel}
            </span>
          </div>

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const value = Math.round(maxValue * ratio);
            const y = paddingTop + (1 - ratio) * (chartHeight - paddingTop - paddingBottom);
            
            return (
              <div
                key={ratio}
                className="absolute text-xs font-semibold text-gray-600 bg-white px-1 rounded"
                style={{
                  left: '10px',
                  top: `${y - 8}px`
                }}
              >
                {value}
              </div>
            );
          })}

          {/* X-axis labels */}
          {data.map((point, index) => {
            const x = getX(index);
            
            return (
              <div
                key={index}
                className="absolute text-xs font-semibold text-gray-600 bg-white px-1 rounded"
                style={{
                  left: `${x - 15}px`,
                  top: `${chartHeight - paddingBottom + 10}px`
                }}
              >
                {point.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Your Drawing</span>
        </div>
        {showAnswer && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Correct Answer</span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <button
          onClick={handleSubmit}
          disabled={userPath.length === 0 || isSubmitted}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
        >
          <CheckCircle size={16} />
          Submit Drawing
        </button>
        
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
        >
          {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors duration-200 flex items-center gap-2"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      {/* Results */}
      {isSubmitted && accuracy !== null && (
        <div className={`p-4 rounded-lg border ${
          accuracy >= 80 ? 'bg-green-50 border-green-200' : 
          accuracy >= 60 ? 'bg-yellow-50 border-yellow-200' : 
          'bg-red-50 border-red-200'
        }`}>
          <div className="text-center">
            <p className={`text-lg font-bold ${getAccuracyColor(accuracy)}`}>
              Accuracy: {accuracy.toFixed(1)}%
            </p>
            <p className={`text-sm mt-1 ${getAccuracyColor(accuracy)}`}>
              {getAccuracyMessage(accuracy)}
            </p>
          </div>
        </div>
      )}

      {/* Drawing tips */}
      {!isSubmitted && userPath.length === 0 && (
        <div className="text-center text-gray-500 text-sm">
          <p>💡 Tip: Click and drag on the chart area to draw your line</p>
          <p>Try to follow the pattern described in the instructions above</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveLineChart;