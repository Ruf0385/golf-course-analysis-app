import React from 'react';
import { TestimonialProps } from '../types';

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, companyName, avatarUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <svg className="w-8 h-8 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-600">
            {role}{companyName ? `, ${companyName}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
