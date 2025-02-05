import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import clsx from "clsx";
import Img1 from './assets/1.webp'
import Img2 from './assets/2.webp'
import Img3 from './assets/3.webp'
import Img4 from './assets/4.webp'
import Img5 from './assets/5.webp'
import Img6 from './assets/6.webp'

interface Stat {
  number: number;
  label: string;
  description: string;
  color: string;
  border?: string;
  darkText?: boolean;
}

interface ScrollRevealProps {
  children: (isActive: boolean) => React.ReactNode;
  offset?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, offset = 0, className }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `0px 0px ${-offset}px 0px`
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      {children(isActive)}
    </div>
  );
};

const WorkedWith: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  const stats: Stat[] = [
    { 
      number: 100,
      label: "Percent",
      description: "customer satisfaction",
      color: "rgb(130, 255, 31)",
      darkText: true
    },
    { 
      number: 5,
      label: "Years",
      description: "of experience",
      color: "rgb(26, 26, 26)",
      border: "rgb(49, 49, 49)"
    },
    { 
      number: 50,
      label: "Projects",
      description: "completed",
      color: "rgb(255, 255, 255)",
      border: "rgb(224, 224, 224)",
      darkText: true
    }
  ];

  const brands = [
    { img: Img1, alt: "Brand 1" },
    { img: Img2, alt: "Brand 2" },
    { img: Img3, alt: "Brand 3" },
    { img: Img4, alt: "Brand 4" },
    { img: Img5, alt: "Brand 5" },
    { img: Img6, alt: "Brand 6" }
  ];

  return (
    <section className="relative min-h-screen w-full px-4 sm:px-8 py-2 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0),_rgba(0,0,0,0.4))]" />
      
      <ScrollReveal offset={200} className="relative z-10 mx-auto max-w-7xl [--duration:800ms]">
        {(isActive) => (
          <>
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-medium text-white mb-4"
              >
                Worked with amazing brands
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
              >
                We've had the pleasure of working with amazing companies and brands from various industries
              </motion.p>
            </div>
  
            {/* Stats Cards */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 px-2 sm:px-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    style={{
                      backgroundColor: stat.color,
                      borderWidth: stat.border ? '1px' : '0px',
                      borderColor: stat.border || 'transparent',
                      borderStyle: 'solid'
                    }}
                    className="w-full rounded-[14px] relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div 
                      className="absolute inset-0 left-1/2 -translate-x-1/2"
                      style={{
                        mask: `linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) ${index === 2 ? '80%' : '65%'})`,
                        WebkitMask: `linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) ${index === 2 ? '80%' : '65%'})`,
                        opacity: stat.color === 'rgb(130, 255, 31)' ? '0.3' : stat.color === 'rgb(26, 26, 26)' ? '0.07' : '0.09'
                      }}
                    >
                      <div className="w-full h-full">
                        <svg 
                          viewBox="0 0 240 250"
                          preserveAspectRatio="none"
                          style={{
                            width: '100%',
                            height: '100%',
                            fill: stat.darkText ? 'black' : 'white',
                            imageRendering: 'pixelated'
                          }}
                        >
                          <defs>
                            <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <circle cx="20" cy="20" r="15" fillOpacity="0.4" />
                              <circle cx="0" cy="0" r="10" fillOpacity="0.3" />
                              <circle cx="40" cy="40" r="12" fillOpacity="0.3" />
                              <circle cx="0" cy="40" r="8" fillOpacity="0.4" />
                              <circle cx="40" cy="0" r="8" fillOpacity="0.4" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative px-8 py-12 flex flex-col justify-between min-h-[250px]">
                      {/* Number with CountUp */}
                      <div className="framer-b3es2q">
                        <motion.h3 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isActive ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className={`text-[72px] leading-none font-medium ${
                            stat.darkText ? 'text-black' : 'text-white'
                          }`}
                        >
                          {isActive ? (
                            <CountUp
                              start={0}
                              end={stat.number}
                              duration={2}
                              suffix="+"
                              useEasing={true}
                              delay={index * 0.2}
                            />
                          ) : (
                            "0+"
                          )}
                        </motion.h3>
                      </div>

                      {/* Label and Description */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="flex flex-col gap-1 text-right"
                      >
                        <p 
                          className={`text-lg font-medium ${
                            stat.darkText ? 'text-black' : 'text-white'
                          }`}
                        >
                          {stat.label}
                        </p>
                        <p 
                          className={`text-lg font-semibold ${
                            stat.darkText ? 'text-black/60' : 'text-white/60'
                          }`}
                        >
                          {stat.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
  
            {/* Brands Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full overflow-hidden"
            >
              <motion.div 
                className="flex w-max"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }}
                style={{ 
                  animationPlayState: isAnimating ? 'running' : 'paused'
                }}
                onMouseEnter={() => setIsAnimating(false)}
                onMouseLeave={() => setIsAnimating(true)}
              >
                {[...brands, ...brands].map((brand, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % brands.length) * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="mx-1 sm:mx-2 w-[10rem] sm:w-[12rem] md:w-[15rem] 
                      aspect-square
                      bg-gradient-to-br from-violet-900/10 to-black/30 
                      backdrop-blur-sm 
                      p-2 sm:p-3 
                      rounded-xl 
                      border border-violet-500/20 
                      hover:border-violet-500/40 
                      transition-all duration-300 
                      flex flex-col justify-center items-center 
                      group"
                  >
                    <div className="w-full flex-grow flex items-center justify-center 
                      bg-black/20 
                      rounded-lg 
                      group-hover:bg-violet-500/10 
                      transition-all duration-300 
                      p-2"
                    >
                      <img
                        src={brand.img}
                        alt={brand.alt}
                        className="max-w-[80%] max-h-[80%] 
                          object-contain 
                          transition-all duration-300 
                          group-hover:scale-105 
                          group-hover:brightness-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Vignette effect */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
            </motion.div>
          </>
        )}
      </ScrollReveal>
    </section>
  );
}

export default WorkedWith;