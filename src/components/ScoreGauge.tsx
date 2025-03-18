import React from 'react';
import { ScoreGaugeProps } from '../types';

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score, maxScore, label, color = 'green' }) => {
  const percentage = (score / maxScore) * 100;
  
  // Determine color based on score percentage or use provided color
  const getColor = () => {
    if (color) return color;
    
    if (percentage >= 80) return 'green';
    if (percentage >= 60) return 'yellow';
    return 'red';
  };
  
  const colorClasses = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
    blue: 'text-blue-600'
  };
  
  const bgColorClasses = {
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    blue: 'bg-blue-600'
  };
  
  const selectedColor = getColor();
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full bg-gray-200"></div>
        
        {/* Progress circle */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          
          <circle
            className={`${bgColorClasses[selectedColor as keyof typeof bgColorClasses]} stroke-current`}
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={`${percentage * 2.51} 251.2`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          ></circle>
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-bold ${colorClasses[selectedColor as keyof typeof colorClasses]}`}>
            {score}
          </span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-center">{label}</h3>
      <p className="text-sm text-gray-600 text-center">Score: {score}/{maxScore}</p>
    </div>
  );
};

export default ScoreGauge;
