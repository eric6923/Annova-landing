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
      <div className="w-full marquee-container">
        <div className="flex relative">
          {/* First set */}
          <div className="flex animate-marquee">
            {stats.map((stat, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-2 md:gap-4 mx-4 md:mx-8 whitespace-nowrap"
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
          {/* Second set */}
          <div className="flex animate-marquee2 absolute top-0 left-0">
            {stats.map((stat, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-2 md:gap-4 mx-4 md:mx-8 whitespace-nowrap"
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