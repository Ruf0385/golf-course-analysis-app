import React from 'react';
import { ProcessStepProps } from '../types';

const ProcessSteps: React.FC<ProcessStepProps> = ({ steps }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl text-green-600 mb-4">
                {step.icon || (index + 1)}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-green-200 -z-10 transform -translate-y-1/2"></div>
              )}
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
