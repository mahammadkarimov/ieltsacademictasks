import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
          >
            <Home size={16} />
            Go to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Available activities:</p>
            <div className="mt-2 space-y-1">
              <Link to="/activity-1" className="block text-blue-600 hover:text-blue-700">
                Activity 1 - Advanced Vocabulary Assessment
              </Link>
              <Link to="/activity-2" className="block text-blue-600 hover:text-blue-700">
                Activity 2 - Business Analytics Vocabulary
              </Link>
              <Link to="/activity-3" className="block text-blue-600 hover:text-blue-700">
                Activity 3 - Scientific Data Analysis
              </Link>
              <Link to="/activity-4" className="block text-blue-600 hover:text-blue-700">
                Activity 4 - Market Research Fundamentals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;