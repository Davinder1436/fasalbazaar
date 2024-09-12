import React from 'react';
import { ArrowRight } from 'lucide-react';

const CropCard = ({ name, image, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={name} 
      />
      <div className="p-5 text-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-4 text-sm text-gray-600">
          {description || 'Description not available'}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition duration-300 ease-in-out"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default CropCard;