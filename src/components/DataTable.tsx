import React, { useEffect, useState } from 'react';

interface TableCell {
  value: string | number;
  isBold?: boolean;
  isHeader?: boolean;
}

interface TableRow {
  cells: TableCell[];
  isBold?: boolean;
}

interface DataTableProps {
  data: TableRow[];
  title: string;
  headers?: string[];
  animate?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ 
  data, 
  title, 
  headers, 
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
            }, 200);
            return () => clearTimeout(timer);
          } else {
            setAnimationProgress(1);
          }
        }
      },
      { threshold: 0.3 }
    );

    const tableElement = document.getElementById(`data-table-${title.replace(/\s+/g, '-')}`);
    if (tableElement) {
      observer.observe(tableElement);
    }

    return () => observer.disconnect();
  }, [animate, title, isVisible]);

  return (
    <div 
      id={`data-table-${title.replace(/\s+/g, '-')}`}
      className="bg-white rounded-lg shadow-md p-6 mb-6 transform transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <h3 
        className="text-lg font-semibold text-gray-800 mb-4"
        style={{
          opacity: animationProgress,
          transform: animationProgress > 0 ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.5s ease-out 0.2s'
        }}
      >
        {title}
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          {headers && (
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 relative overflow-hidden"
                    style={{
                      opacity: animationProgress,
                      transform: animationProgress > 0 ? 'translateY(0)' : 'translateY(-20px)',
                      transition: `all 0.5s ease-out ${index * 0.1 + 0.3}s`
                    }}
                  >
                    {/* Animated background highlight */}
                    <div 
                      className="absolute inset-0 bg-blue-100 opacity-0"
                      style={{
                        opacity: animationProgress > 0.8 ? 0.3 : 0,
                        transform: animationProgress > 0.8 ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: `all 0.3s ease-out ${index * 0.05 + 1}s`
                      }}
                    />
                    <span className="relative z-10">{header}</span>
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  row.isBold 
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 font-bold' 
                    : 'hover:bg-gray-50'
                } transition-all duration-300 relative overflow-hidden`}
                style={{
                  opacity: animationProgress,
                  transform: animationProgress > 0 ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.5s ease-out ${rowIndex * 0.1 + 0.5}s`
                }}
              >
                {/* Row highlight animation */}
                {row.isBold && (
                  <div 
                    className="absolute inset-0 bg-blue-200 opacity-0"
                    style={{
                      opacity: animationProgress > 0.9 ? 0.2 : 0,
                      transform: animationProgress > 0.9 ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: `all 0.4s ease-out ${rowIndex * 0.05 + 1.2}s`
                    }}
                  />
                )}
                
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border border-gray-300 px-4 py-3 relative ${
                      cell.isBold ? 'font-bold text-gray-900' : 'text-gray-700'
                    } ${cell.isHeader ? 'bg-gray-100 font-semibold' : ''}`}
                    style={{
                      opacity: animationProgress,
                      transform: animationProgress > 0 ? 'scale(1)' : 'scale(0.95)',
                      transition: `all 0.3s ease-out ${(rowIndex * row.cells.length + cellIndex) * 0.05 + 0.7}s`
                    }}
                  >
                    {/* Cell highlight for bold values */}
                    {cell.isBold && (
                      <div 
                        className="absolute inset-0 bg-yellow-100 opacity-0 rounded"
                        style={{
                          opacity: animationProgress > 0.95 ? 0.4 : 0,
                          transform: animationProgress > 0.95 ? 'scale(1)' : 'scale(0.8)',
                          transition: `all 0.2s ease-out ${(rowIndex * row.cells.length + cellIndex) * 0.02 + 1.5}s`
                        }}
                      />
                    )}
                    
                    <span className="relative z-10">{cell.value}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Animated border glow effect */}
      <div 
        className="absolute inset-0 rounded-lg border-2 border-blue-200 opacity-0 pointer-events-none"
        style={{
          opacity: animationProgress > 0.8 ? 0.5 : 0,
          transform: animationProgress > 0.8 ? 'scale(1)' : 'scale(1.02)',
          transition: 'all 0.5s ease-out 1.8s'
        }}
      />
    </div>
  );
};

export default DataTable;