import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our 3-step process.</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold">1</span>
          <h3 className="text-xl md:text-2xl font-bold mt-4 text-violet-600">Consult</h3>
          <p className="text-gray-400 text-center">We'll discuss your goals and vision over a call to ensure we're aligned.</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold ">2</span>
          <h3 className="text-xl md:text-2xl font-bold mt-4 text-violet-600">Design</h3>
          <p className="text-gray-400 text-center">We'll create a custom design that reflects your brand and meets your needs.</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold">3</span>
          <h3 className="text-xl md:text-2xl font-bold mt-4 text-violet-600">Deliver</h3>
          <p className="text-gray-400 text-center">Your website will be delivered, optimized for performance and ready to impress.</p>
        </div>
      </div>
    </div>
  );
};

export default Process;