import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExamHeader from '../components/ExamHeader';
import LineChart from '../components/LineChart';
import MultiLineBarChart from '../components/MultiLineBarChart';
import PieChart from '../components/PieChart';
import DataTable from '../components/DataTable';
import ExerciseCard from '../components/ExerciseCard';
import ExplanationCard from '../components/ExplanationCard';
import InteractiveLineChart from '../components/InteractiveLineChart';
import DraggableTableTask from '../components/DraggableTableTask';
import { getExamData } from '../data/examData';

const ExamPage: React.FC = () => {
  const { activitySlug } = useParams<{ activitySlug: string }>();
  const [progress, setProgress] = useState(0);

  const examData = getExamData(activitySlug || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!examData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Activity Not Found</h1>
          <p className="text-gray-600 mb-6">The requested activity does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderChart = (chart: any) => {
    switch (chart.type) {
      case 'line':
        return (
          <LineChart
            data={chart.data}
            title={chart.title}
            yAxisLabel={chart.yAxisLabel}
            xAxisLabel={chart.xAxisLabel}
          />
        );
      case 'multiBar':
        return (
          <MultiLineBarChart
            data={chart.data}
            labels={chart.labels}
            title={chart.title}
            yAxisLabel={chart.yAxisLabel}
            xAxisLabel={chart.xAxisLabel}
          />
        );
      case 'pie':
        return (
          <PieChart
            data={chart.data}
            title={chart.title}
            showPercentages={chart.showPercentages}
          />
        );
      case 'table':
        return (
          <DataTable
            data={chart.data}
            title={chart.title}
            headers={chart.headers}
          />
        );
      case 'interactive':
        return (
          <InteractiveLineChart
            data={chart.data}
            title={chart.title}
            yAxisLabel={chart.yAxisLabel}
            xAxisLabel={chart.xAxisLabel}
            description={chart.description}
            maxValue={chart.maxValue}
          />
        );
      case 'draggableTable':
        return (
          <DraggableTableTask
            title={chart.title}
            instructions={chart.instructions || ''}
            tableData={chart.data}
            draggableItems={chart.draggableItems || []}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Activities
          </Link>
        </div>
      </div>

      <ExamHeader 
        title={examData.title}
        timeLimit={examData.timeLimit}
        studentName="Alex Johnson"
        progress={progress}
      />
      
      <div className="max-w-4xl mx-auto px-6 pb-12">
        {examData.exercises.map((exercise, index) => {
          // Render explanation cards
          if (exercise.isExplanation) {
            return (
              <ExplanationCard
                key={index}
                title={exercise.explanationTitle || 'Information'}
                audio={exercise.audio}
                content={exercise.explanationContent || ''}
                image={exercise.image}
              >
                {exercise.chart && renderChart(exercise.chart)}
              </ExplanationCard>
            );
          }

          // Render interactive drawing exercises
          if (exercise.chart?.type === 'interactive') {
            return (
              <div key={index}>
                {renderChart(exercise.chart)}
              </div>
            );
          }

          // Render draggable table exercises
          if (exercise.chart?.type === 'draggableTable') {
            return (
              <div key={index}>
                {renderChart(exercise.chart)}
              </div>
            );
          }

          // Render question cards
          return (
            <ExerciseCard
              key={index}
              question={exercise.question || ''}
              answer={exercise.answer || ''}
              placeholder={exercise.placeholder}
              image={exercise.image}
              isChoice={exercise.isChoice}
              isChoiceImages={exercise.isChoiceImages}
              choices={exercise.choices}
              multipleInputs={exercise.multipleInputs}
            >
              {exercise.chart && renderChart(exercise.chart)}
            </ExerciseCard>
          );
        })}
      </div>
    </div>
  );
};

export default ExamPage;