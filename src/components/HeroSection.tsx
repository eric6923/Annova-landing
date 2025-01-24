import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white z-30 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Future Tech
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Innovative Solutions, Seamless Design
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Now
          </button>
        </div>
      </div>

      {/* Spline Model Iframe with Optimization */}
      <div 
        className="absolute inset-0 z-10 transform scale-100 transition-transform duration-300 ease-in-out"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <iframe 
          src="https://my.spline.design/nexbotrobotcharacterconcept-758943658d40632b5a6102845c92b28b/"
          className="w-full h-full border-none"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
          loading="eager"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default HeroSection;