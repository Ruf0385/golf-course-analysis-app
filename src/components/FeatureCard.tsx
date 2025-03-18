import React from 'react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
      {imageUrl ? (
        <div className="mb-4 overflow-hidden rounded-md">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        </div>
      ) : icon ? (
        <div className="text-4xl mb-4">{icon}</div>
      ) : null}
      
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
