import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, Palette, MousePointer } from 'lucide-react';

const HomePage: React.FC = () => {
  const activities = [
    {
      slug: 'activity-1',
      title: 'Advanced Vocabulary Assessment',
      description: 'Chart analysis, data interpretation, interactive drawing & drag-drop exercises',
      duration: '60 minutes',
      questions: 8,
      difficulty: 'Advanced',
      color: 'bg-blue-500',
      features: ['Line Charts', 'Interactive Drawing', 'Drag & Drop Tables', 'Vocabulary Analysis']
    },
    {
      slug: 'activity-2',
      title: 'Business Analytics Vocabulary',
      description: 'Financial charts, business terminology, drawing & table completion exercises',
      duration: '45 minutes',
      questions: 5,
      difficulty: 'Intermediate',
      color: 'bg-green-500',
      features: ['Business Charts', 'Revenue Patterns', 'Interactive Drawing', 'Drag & Drop']
    },
    {
      slug: 'activity-3',
      title: 'Scientific Data Analysis',
      description: 'Research data, scientific vocabulary, experimental patterns & method tables',
      duration: '50 minutes',
      questions: 4,
      difficulty: 'Advanced',
      color: 'bg-purple-500',
      features: ['Scientific Charts', 'Experimental Data', 'Interactive Drawing', 'Method Tables']
    },
    {
      slug: 'activity-4',
      title: 'Market Research Fundamentals',
      description: 'Consumer data, market analysis, trend drawing & research method tables',
      duration: '40 minutes',
      questions: 3,
      difficulty: 'Beginner',
      color: 'bg-orange-500',
      features: ['Market Trends', 'Consumer Data', 'Interactive Drawing', 'Research Methods']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Vocabulary Assessment Center
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master vocabulary through interactive chart analysis, data interpretation, hands-on drawing, and drag-and-drop exercises
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
            <p className="text-gray-600">Available Activities</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">20</h3>
            <p className="text-gray-600">Total Questions</p>
          </div>
          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Palette className="h-6 w-6 text-purple-600" />
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MousePointer className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
            <p className="text-gray-600">Interactive Tasks</p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.slug}
                to={`/${activity.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
              >
                <div className={`h-2 ${activity.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {activity.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(activity.difficulty)}`}>
                      {activity.difficulty}
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{activity.questions} questions</span>
                      </div>
                    </div>
                    <div className="text-blue-600 font-medium group-hover:text-blue-700">
                      Start Activity →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Activity</h3>
              <p className="text-gray-600">Select an activity based on your skill level and available time</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyze Charts</h3>
              <p className="text-gray-600">Study interactive charts and data visualizations carefully</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Tasks</h3>
              <p className="text-gray-600">Draw charts and drag-drop answers to complete vocabulary exercises</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Answer Questions</h3>
              <p className="text-gray-600">Complete vocabulary exercises based on the data presented</p>
            </div>
          </div>
        </div>

        {/* New Features Highlight */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 mt-8 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <MousePointer className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">🎯 New Drag & Drop Table Exercises!</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Experience our latest interactive feature: drag and drop vocabulary terms into tables! 
              Perfect for matching definitions, organizing data, and practicing business, scientific, and market research terminology.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Drawing Exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <MousePointer className="h-4 w-4" />
                <span>Drag & Drop Tables</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Chart Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;