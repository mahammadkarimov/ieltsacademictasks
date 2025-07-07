import React, { useState, useRef } from 'react';
import { CheckCircle, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface TableCell {
  value: string;
  isDropZone?: boolean;
  isCorrect?: boolean;
  correctAnswer?: string;
  id?: string;
}

interface TableRow {
  cells: TableCell[];
  isHeader?: boolean;
}

interface DraggableItem {
  id: string;
  value: string;
  isUsed?: boolean;
}

interface DraggableTableTaskProps {
  title: string;
  instructions: string;
  tableData: TableRow[];
  draggableItems: DraggableItem[];
  onComplete?: (isCorrect: boolean, accuracy: number) => void;
}

const DraggableTableTask: React.FC<DraggableTableTaskProps> = ({
  title,
  instructions,
  tableData,
  draggableItems,
  onComplete
}) => {
  const [draggedItem, setDraggedItem] = useState<DraggableItem | null>(null);
  const [droppedItems, setDroppedItems] = useState<Record<string, string>>({});
  const [availableItems, setAvailableItems] = useState<DraggableItem[]>(draggableItems);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [results, setResults] = useState<{ correct: number; total: number; accuracy: number } | null>(null);
  const dragCounter = useRef(0);

  const handleDragStart = (e: React.DragEvent, item: DraggableItem) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', item.value);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current--;
  };

  const handleDrop = (e: React.DragEvent, cellId: string) => {
    e.preventDefault();
    dragCounter.current = 0;
    
    if (!draggedItem) return;

    // Check if this cell already has an item
    const existingItem = Object.entries(droppedItems).find(([_, itemId]) => itemId === draggedItem.id);
    if (existingItem) {
      // Remove from previous position
      setDroppedItems(prev => {
        const newDropped = { ...prev };
        delete newDropped[existingItem[0]];
        return newDropped;
      });
    }

    // Check if target cell already has an item
    if (droppedItems[cellId]) {
      // Return the existing item to available items
      const existingItemId = droppedItems[cellId];
      setAvailableItems(prev => 
        prev.map(item => 
          item.id === existingItemId ? { ...item, isUsed: false } : item
        )
      );
    }

    // Place the new item
    setDroppedItems(prev => ({ ...prev, [cellId]: draggedItem.id }));
    setAvailableItems(prev => 
      prev.map(item => 
        item.id === draggedItem.id ? { ...item, isUsed: true } : item
      )
    );

    setDraggedItem(null);
  };

  const handleRemoveItem = (cellId: string) => {
    if (isSubmitted) return;
    
    const itemId = droppedItems[cellId];
    if (itemId) {
      setDroppedItems(prev => {
        const newDropped = { ...prev };
        delete newDropped[cellId];
        return newDropped;
      });
      setAvailableItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, isUsed: false } : item
        )
      );
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    let total = 0;

    // Count correct answers
    tableData.forEach(row => {
      row.cells.forEach(cell => {
        if (cell.isDropZone && cell.correctAnswer && cell.id) {
          total++;
          const droppedItemId = droppedItems[cell.id];
          if (droppedItemId) {
            const droppedItem = draggableItems.find(item => item.id === droppedItemId);
            if (droppedItem && droppedItem.value.toLowerCase().trim() === cell.correctAnswer.toLowerCase().trim()) {
              correct++;
            }
          }
        }
      });
    });

    const accuracy = total > 0 ? (correct / total) * 100 : 0;
    setResults({ correct, total, accuracy });
    setIsSubmitted(true);
    
    if (onComplete) {
      onComplete(correct === total, accuracy);
    }
  };

  const handleReset = () => {
    setDroppedItems({});
    setAvailableItems(draggableItems.map(item => ({ ...item, isUsed: false })));
    setIsSubmitted(false);
    setShowAnswers(false);
    setResults(null);
  };

  const getDropZoneContent = (cell: TableCell) => {
    if (!cell.id) return null;
    
    const droppedItemId = droppedItems[cell.id];
    if (droppedItemId) {
      const droppedItem = draggableItems.find(item => item.id === droppedItemId);
      if (droppedItem) {
        const isCorrect = isSubmitted && cell.correctAnswer && 
          droppedItem.value.toLowerCase().trim() === cell.correctAnswer.toLowerCase().trim();
        const isIncorrect = isSubmitted && cell.correctAnswer && 
          droppedItem.value.toLowerCase().trim() !== cell.correctAnswer.toLowerCase().trim();

        return (
          <div
            className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              isCorrect ? 'bg-green-100 text-green-800 border border-green-300' :
              isIncorrect ? 'bg-red-100 text-red-800 border border-red-300' :
              'bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200'
            }`}
            onClick={() => handleRemoveItem(cell.id!)}
          >
            {droppedItem.value}
            {!isSubmitted && (
              <span className="ml-2 text-xs opacity-70">✕</span>
            )}
          </div>
        );
      }
    }

    return (
      <div className="px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-400 text-sm text-center min-h-[40px] flex items-center justify-center">
        Drop here
      </div>
    );
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAccuracyMessage = (accuracy: number) => {
    if (accuracy === 100) return 'Perfect! All answers are correct.';
    if (accuracy >= 80) return 'Excellent work! Most answers are correct.';
    if (accuracy >= 60) return 'Good job! Keep practicing to improve.';
    return 'Keep trying! Review the vocabulary and try again.';
  };

  const allDropZonesFilled = tableData.every(row => 
    row.cells.every(cell => 
      !cell.isDropZone || (cell.id && droppedItems[cell.id])
    )
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 font-medium mb-2">Instructions:</p>
        <p className="text-blue-700 text-sm leading-relaxed">{instructions}</p>
      </div>

      {/* Draggable Items Pool */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Available Answers:</h4>
        <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 min-h-[80px]">
          {availableItems.filter(item => !item.isUsed).map(item => (
            <div
              key={item.id}
              draggable={!isSubmitted}
              onDragStart={(e) => handleDragStart(e, item)}
              className={`px-4 py-2 bg-white border-2 border-gray-300 rounded-lg shadow-sm transition-all duration-200 ${
                !isSubmitted 
                  ? 'cursor-move hover:border-blue-400 hover:shadow-md hover:scale-105' 
                  : 'cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-sm font-medium text-gray-700">{item.value}</span>
              {!isSubmitted && (
                <span className="ml-2 text-xs text-gray-400">⋮⋮</span>
              )}
            </div>
          ))}
          {availableItems.filter(item => !item.isUsed).length === 0 && (
            <div className="text-gray-400 text-sm italic flex items-center justify-center w-full">
              All items have been used
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-300">
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.isHeader ? 'bg-gray-100' : 'bg-white'}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border border-gray-300 px-4 py-3 ${
                      row.isHeader ? 'font-semibold text-gray-800' : 'text-gray-700'
                    } ${cell.isDropZone ? 'bg-gray-50' : ''}`}
                    onDragOver={cell.isDropZone ? handleDragOver : undefined}
                    onDragEnter={cell.isDropZone ? handleDragEnter : undefined}
                    onDragLeave={cell.isDropZone ? handleDragLeave : undefined}
                    onDrop={cell.isDropZone && cell.id ? (e) => handleDrop(e, cell.id!) : undefined}
                  >
                    {cell.isDropZone ? (
                      <div className="relative">
                        {getDropZoneContent(cell)}
                        {showAnswers && cell.correctAnswer && (
                          <div className="mt-2 text-xs text-green-600 font-medium">
                            Correct: {cell.correctAnswer}
                          </div>
                        )}
                      </div>
                    ) : (
                      cell.value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <button
          onClick={handleSubmit}
          disabled={!allDropZonesFilled || isSubmitted}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
        >
          <CheckCircle size={16} />
          Submit Answers
        </button>
        
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
        >
          {showAnswers ? <EyeOff size={16} /> : <Eye size={16} />}
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
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
      {isSubmitted && results && (
        <div className={`p-4 rounded-lg border ${
          results.accuracy >= 80 ? 'bg-green-50 border-green-200' : 
          results.accuracy >= 60 ? 'bg-yellow-50 border-yellow-200' : 
          'bg-red-50 border-red-200'
        }`}>
          <div className="text-center">
            <p className={`text-lg font-bold ${getAccuracyColor(results.accuracy)}`}>
              Score: {results.correct}/{results.total} ({results.accuracy.toFixed(1)}%)
            </p>
            <p className={`text-sm mt-1 ${getAccuracyColor(results.accuracy)}`}>
              {getAccuracyMessage(results.accuracy)}
            </p>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      {!isSubmitted && (
        <div className="text-center text-gray-500 text-sm">
          <p>
            Progress: {Object.keys(droppedItems).length} / {
              tableData.reduce((total, row) => 
                total + row.cells.filter(cell => cell.isDropZone).length, 0
              )
            } items placed
          </p>
        </div>
      )}
    </div>
  );
};

export default DraggableTableTask;