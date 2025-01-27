import React from 'react';

const MarqueeContent = () => (
  <div className="flex items-center space-x-2">
    <span className="font-medium text-sm sm:text-base">Feel free to Bother our Sales Team</span>
    <span className="text-lg sm:text-xl">✧</span>
  </div>
);

const CrossMarquee: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="py-6 sm:py-20 overflow-hidden relative w-screen">
        {/* Top Marquee */}
        <div className="relative flex overflow-x-hidden -rotate-[8deg] sm:-rotate-6 scale-100 sm:scale-125 translate-y-8 sm:translate-y-8 w-[150%] sm:w-full -ml-[25%] sm:ml-0">
          <div className="animate-marquee-left whitespace-nowrap flex items-center py-2 sm:py-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400">
            {[...Array(6)].map((_, i) => (
              <div key={`top-${i}`} className="flex items-center mx-2 sm:mx-4">
                <MarqueeContent />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2-left whitespace-nowrap flex items-center py-2 sm:py-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400">
            {[...Array(6)].map((_, i) => (
              <div key={`top2-${i}`} className="flex items-center mx-2 sm:mx-4">
                <MarqueeContent />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="relative flex overflow-x-hidden rotate-[8deg] sm:rotate-6 scale-100 sm:scale-125 -translate-y-4 sm:-translate-y-8 w-[150%] sm:w-full -ml-[25%] sm:ml-0">
          <div className="animate-marquee-right whitespace-nowrap flex items-center py-2 sm:py-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-rose-400">
            {[...Array(6)].map((_, i) => (
              <div key={`bottom-${i}`} className="flex items-center mx-2 sm:mx-4">
                <MarqueeContent />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2-right whitespace-nowrap flex items-center py-2 sm:py-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-rose-400">
            {[...Array(6)].map((_, i) => (
              <div key={`bottom2-${i}`} className="flex items-center mx-2 sm:mx-4">
                <MarqueeContent />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossMarquee;