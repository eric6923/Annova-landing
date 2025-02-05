import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "8+", label: "years of experience" },
  { value: "95%", label: "client retention rate" },
  { value: "100%", label: "clients satisfaction" },
  { value: "50+", label: "projects finished" },
];

function App() {
  return (
    <div className="bg-black flex items-center justify-center">
      <div className="w-full overflow-hidden">
        <div className="marquee-container w-full">
          <div className="flex animate-marquee will-change-transform">
            {/* First set of items */}
            {stats.map((stat, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-2 md:gap-4 mx-4 md:mx-8"
                style={{ 
                  whiteSpace: 'nowrap',
                  transform: 'translateZ(0)'  // Hardware acceleration
                }}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#82FF1F] flex-shrink-0" />
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-[#82FF1F] font-manrope text-base md:text-[26px] font-semibold tracking-[-0.04em] leading-normal md:leading-[64px]">
                    {stat.value} /
                  </span>
                  <span className="text-white font-manrope text-base md:text-[26px] font-semibold tracking-[-0.04em] leading-normal md:leading-[64px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {stats.map((stat, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-2 md:gap-4 mx-4 md:mx-8"
                style={{ 
                  whiteSpace: 'nowrap',
                  transform: 'translateZ(0)'  // Hardware acceleration
                }}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#82FF1F] flex-shrink-0" />
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-[#82FF1F] font-manrope text-base md:text-[26px] font-semibold tracking-[-0.04em] leading-normal md:leading-[64px]">
                    {stat.value} /
                  </span>
                  <span className="text-white font-manrope text-base md:text-[26px] font-semibold tracking-[-0.04em] leading-normal md:leading-[64px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;