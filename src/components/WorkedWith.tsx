"use client"

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

interface ScrollRevealProps {
  children: (isActive: boolean) => React.ReactNode;
  offset?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, offset = 200, className }) => {
  const [isActive, setIsActive] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setIsActive(true);
          setHasRevealed(true);
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [offset, hasRevealed]);

  return (
    <div ref={ref} className={className}>
      {children(isActive)}
    </div>
  );
};

// Define types for stats and brands
interface Stat {
  number: string;
  label: string;
  fullNumber: number;
}

interface Brand {
  name: string;
  logo: string;
}

const WorkedWith: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  const stats: Stat[] = [
    { number: '150+', label: 'Projects Completed', fullNumber: 150 },
    { number: '50+', label: 'Happy Clients', fullNumber: 50 },
    { number: '10+', label: 'Years Experience', fullNumber: 10 },
    { number: '100%', label: 'Client Satisfaction', fullNumber: 100 }
  ];

  const brands: Brand[] = [
    { name: 'Mobile App Banao', logo: Img1 },
    { name: 'VamiTech Solutions', logo: Img2 },
    { name: 'Stancord', logo: Img3 },
    { name: 'Inno Sewa', logo: Img4 },
    { name: 'Bihar Innovations', logo: Img5 },
    { name: 'Totem Consultancy', logo: Img6 }
  ];

  return (
    <section className="relative min-h-screen w-full px-4 sm:px-8 py-2 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),rgba(0,0,0,0))]"></div>
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/4 rounded-full blur-[120px] animate-drift-1"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
  
      {/* Content */}
      <ScrollReveal offset={200} className="relative z-10 mx-auto max-w-7xl [--duration:800ms]">
        {(isActive) => (
          <>
            <div
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "flex justify-center mt-2 sm:mt-6 transition-[transform,opacity] duration-[--duration]",
              )}>
              <div className="
                relative rounded-full border-2 border-violet-500 px-4 sm:px-8 py-1 sm:py-2 text-xs sm:text-base font-medium
                bg-black/20 backdrop-blur-sm
                before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
                animate-glow-slow
              ">
                Worked With
              </div>
            </div>
  
            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-display text-3xl sm:text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3]"
              )}>
              Our Collaborative Journey
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-gray-400 max-w-2xl mx-auto px-4 transition-[transform,opacity] duration-[--duration]",
              )}>
              Empowering businesses through strategic partnerships and innovative solutions.
            </p>
  
            <div className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
              {stats.map((stat: Stat, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-500 mb-1 sm:mb-2"
                  >
                    <CountUp 
                      end={stat.fullNumber} 
                      duration={2} 
                      suffix={stat.number.includes('+') ? '+' : '%'} 
                      enableScrollSpy={true}
                    />
                  </motion.h3>
                  <p className="text-xs sm:text-base text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
  
            {/* Brands Marquee */}
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
    {[...brands, ...brands].map((brand: Brand, index: number) => (
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
         src={brand.logo}
         alt={brand.name}
         className="max-w-[80%] max-h-[80%] 
           object-contain 
           transition-all duration-300 
           group-hover:scale-105 
           group-hover:brightness-110"
       />
     </div>
     <p className="text-center mt-1 text-xs sm:text-sm text-gray-300 
       group-hover:text-white 
       transition-colors duration-300"
     >
       {brand.name}
     </p>
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