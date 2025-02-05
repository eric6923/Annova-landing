import React from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';

const MarqueeContent = () => (
  <div className="flex items-center space-x-3 px-2">
    <PhoneCall className="w-4 h-4 text-white/90" />
    <span className="font-medium text-sm sm:text-base text-white tracking-wide">Feel free to Bother our Sales Team</span>
    <Sparkles className="w-4 h-4 text-white/90" />
  </div>
);

const CrossMarquee: React.FC = () => {
  const gradientStyle = {
    background: `linear-gradient(90deg, 
      rgb(139, 92, 246) 0%,
      rgb(196, 81, 229) 30%,
      rgb(217, 70, 239) 50%,
      rgb(196, 81, 229) 70%,
      rgb(139, 92, 246) 100%
    )`
  };

  return (
    <div className="bg-black/95 relative">
      <div className="py-6 sm:py-20 overflow-hidden relative w-screen">
        {/* Top Marquee */}
        <div className="relative flex overflow-x-hidden -rotate-[12deg] sm:-rotate-6 scale-100 sm:scale-125 translate-y-12 sm:translate-y-8 w-[150%] sm:w-full -ml-[25%] sm:ml-0">
          <div style={gradientStyle} className="animate-marquee-left whitespace-nowrap flex items-center py-3 sm:py-4 shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            {[...Array(6)].map((_, i) => (
              <div key={`top-${i}`} className="flex items-center mx-3 sm:mx-6 group transition-all duration-300 hover:scale-105">
                <MarqueeContent />
              </div>
            ))}
          </div>
          <div style={gradientStyle} className="absolute top-0 animate-marquee2-left whitespace-nowrap flex items-center py-3 sm:py-4 shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            {[...Array(6)].map((_, i) => (
              <div key={`top2-${i}`} className="flex items-center mx-3 sm:mx-6 group transition-all duration-300 hover:scale-105">
                <MarqueeContent />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="relative flex overflow-x-hidden rotate-[12deg] sm:rotate-6 scale-100 sm:scale-125  sm:-translate-y-8 w-[150%] sm:w-full -ml-[25%] sm:ml-0">
          <div style={gradientStyle} className="animate-marquee-right whitespace-nowrap flex items-center py-3 sm:py-4 shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            {[...Array(6)].map((_, i) => (
              <div key={`bottom-${i}`} className="flex items-center mx-3 sm:mx-6 group transition-all duration-300 hover:scale-105">
                <MarqueeContent />
              </div>
            ))}
          </div>
          <div style={gradientStyle} className="absolute top-0 animate-marquee2-right whitespace-nowrap flex items-center py-3 sm:py-4 shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            {[...Array(6)].map((_, i) => (
              <div key={`bottom2-${i}`} className="flex items-center mx-3 sm:mx-6 group transition-all duration-300 hover:scale-105">
                <MarqueeContent />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default CrossMarquee;