import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

interface ExerciseCardProps {
  question: string;
  answer: string | string[];
  placeholder?: string | string[];
  children?: React.ReactNode;
  image?: string;
  isChoice?: boolean;
  choices?: string[];
  multipleInputs?: boolean;
  isChoiceImages?: boolean; // Optional prop for choice images
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ 
  question, 
  answer, 
  placeholder = "Type your answer here...",
  children,
  image,
  isChoiceImages = false,
  isChoice,
  choices = [],
  multipleInputs = false
}) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(
    multipleInputs ? new Array(Array.isArray(answer) ? answer.length : 1).fill('') : ['']
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowAnswer(true);
  };

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (Array.isArray(answer)) {
      return answer.every((correctAnswer, index) => 
        userAnswers[index]?.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
      );
    }
    return userAnswers[0]?.toLowerCase().trim() === answer.toLowerCase().trim();
  };

  const isCorrect = checkAnswers();
  const hasAllAnswers = userAnswers.every(ans => ans.trim() !== '');

  const renderInputs = () => {
    if (multipleInputs && Array.isArray(answer) && !isChoice) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {answer.map((_, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer {index + 1}:
              </label>
              <input
                type="text"
                value={userAnswers[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={Array.isArray(placeholder) ? placeholder[index] : `Answer ${index + 1}...`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                disabled={isSubmitted}
              />
            </div>
          ))}
        </div>
      );
    }

    if (!isChoice) {
      return (
        <input
          type="text"
          value={userAnswers[0] || ''}
          onChange={(e) => handleInputChange(0, e.target.value)}
          placeholder={Array.isArray(placeholder) ? placeholder[0] : placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={isSubmitted}
        />
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-lg text-gray-800 mb-3">
          {question.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <span dangerouslySetInnerHTML={{ __html: line }} />
              <br />
            </React.Fragment>
          ))}
          
        </h3>
        {image && (
          <img 
            src={image} 
            alt="Exercise illustration" 
            className="w-full h-auto mb-4 rounded-lg shadow-sm"
          />
        )}  
        {isChoice && choices.length > 0 && !isChoiceImages && (
          <div className="space-y-2 mb-4">
            {choices.map((choice, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`choice-${index}-${choice}`}
                  name={`exercise-choice-${index}`}
                  value={choice}
                  className="mr-2"
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  disabled={isSubmitted}
                />
                <label htmlFor={`choice-${index}`} className="text-gray-700">
                  {choice.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </label>
              </div>
            ))}
          </div>
        )}    
        {isChoice && choices.length > 0 && isChoiceImages && (
          <div className="space-y-2 mb-4">
            {choices.map((choice, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`choice-${index}`}
                  name="exercise-choice"
                  value={choice}
                  className="mr-2"
                  disabled={isSubmitted}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                />
                <label htmlFor={`choice-${index}`} className="text-gray-700">
                  <img src={choice} alt="choice" width={400} />
                </label>
              </div>
            ))}
          </div>
        )} 
        {children}
      </div>
      
      <div className="space-y-4">
        <div>
          {renderInputs()}
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSubmit}
            disabled={!hasAllAnswers || isSubmitted}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
          >
            <CheckCircle size={16} />
            Submit Answer
          </button>
          
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
          >
            {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
        
        {isSubmitted && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isChoice  ? isCorrect ? '✓ Correct!' : '✗ Incorrect' : ''}
            </p>
            <div className="text-sm text-gray-600 mt-1">
              <p>Your answer{multipleInputs ? 's' : ''}:</p>
                {multipleInputs ? (
                <ul className="list-disc list-inside ml-2">
                  {userAnswers.map((ans, index) => (
                  <li key={index}>
                    {isChoiceImages ? (
                    <img src={ans} alt={`Answer ${index + 1}`} className="w-32 h-32 object-cover rounded-lg mb-2" />
                    ) : (
                    ans.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                      {line}
                      <br />
                      </React.Fragment>
                    ))
                    )}
                  </li>
                  ))}
                </ul>
                ) : (
                isChoiceImages ? (
                  <img src={userAnswers[0]} alt="Answer" className="w-32 h-32 object-cover rounded-lg mb-2" />
                ) : (
                  userAnswers[0].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                  ))
                )
                )}
            </div>
          </div>
        )}
        
        {showAnswer && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 font-medium">
              Answer{Array.isArray(answer) ? 's' : ''}:
            </p>
            {Array.isArray(answer) ? (
              <ul className="list-disc list-inside ml-2 text-blue-800">
                {answer.map((ans, index) => (
                  <li key={index}>
                    {isChoiceImages ? (
                      <img src={ans} alt={`Choice ${index + 1}`} className="w-32 h-32 object-cover rounded-lg mb-2" />
                    ) : ans.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            ) : (
              isChoiceImages ? (
                <img src={answer} alt={`Choice`} className="w-32 h-32 object-cover rounded-lg mb-2" />
              ) : answer.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;