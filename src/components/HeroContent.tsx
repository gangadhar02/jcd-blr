
import React from 'react';

const HeroContent = () => {
  return (
    <div className="text-center mb-4 lg:mb-0">
      <h1 className="text-xl min-[430px]:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight animate-fade-in">
        Best Interior Designers
        <br />
        <span className="text-red-600">In Bangalore</span>
      </h1>
      
      <p className="text-sm min-[430px]:text-base sm:text-lg lg:text-xl text-gray-700 font-medium mb-3 md:mb-4 animate-fade-in">
        Affordable – Quick – Premium
      </p>
      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center animate-fade-in text-xs sm:text-sm">
        <div className="flex items-center space-x-1.5 text-gray-600">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span>10+ Years Experience</span>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-600">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span>1000+ Happy Clients</span>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-600">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span>Award Winning Designs</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
