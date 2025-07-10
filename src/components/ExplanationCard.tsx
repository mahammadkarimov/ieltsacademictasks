import React from 'react';
import { BookOpen } from 'lucide-react';
import AudioTask from './AudioTask';

interface ExplanationCardProps {
  title: string;
  content: string;
  children?: React.ReactNode;
  image?: string; // Optional image prop
  audio?: string; // Optional audio prop
}

const ExplanationCard: React.FC<ExplanationCardProps> = ({ 
  title, 
  content, 
  children,
  image,
  audio
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 mb-6 border border-blue-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
          <BookOpen className="h-5 w-5 text-blue-600" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
          <p className="text-blue-800 leading-relaxed">{content}</p>
        </div>
      </div>
      {image && (
          <img 
            src={image} 
            alt="Explanation illustration" 
            className="rounded-lg shadow-sm mb-2"
          />
        )}
      
      {audio && (
        <AudioTask audioSrc={audio} />
      )}
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExplanationCard;