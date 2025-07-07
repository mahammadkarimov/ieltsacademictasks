import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';

interface ExamHeaderProps {
  title: string;
  timeLimit: string;
  studentName?: string;
  progress: number;
}

const ExamHeader: React.FC<ExamHeaderProps> = ({ 
  title, 
  timeLimit, 
  studentName = "Student",
  progress 
}) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">Vocabulary Exercise</p>
            </div>
          </div>
          
      
        </div>
        
    
      </div>
    </div>
  );
};

export default ExamHeader;