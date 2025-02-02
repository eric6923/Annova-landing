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
              <div className="inline-block rounded-lg bg-black/80 px-4 py-2 backdrop-blur-sm border border-violet-800">
            <h2 className="text-violet-400 font-medium text-lg tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] font-secondary">
              Worked With
            </h2>
          </div>
            </div>
  
            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-display text-3xl sm:text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3] font-secondary"
              )}>
              Our Collaborative Journey
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-secondary text-gray-400 max-w-2xl mx-auto px-4 transition-[transform,opacity] duration-[--duration]",
              )}>
              Empowering businesses through strategic partnerships and innovative solutions.
            </p>
  
            {/* Enhanced Premium Stats Section */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20 px-2 sm:px-4">
              {stats.map((stat: Stat, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="relative group perspective"
                >
                  {/* Animated background gradients */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-600/50 via-fuchsia-500/50 to-violet-600/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200 animate-gradient-xy"></div>
                  
                  {/* Shimmering effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-shimmer"></div>
                  
                  {/* Card content */}
                  <div className="relative h-full bg-gradient-to-br from-violet-950/90 to-black/95 backdrop-blur-xl border border-violet-500/20 group-hover:border-violet-400/50 rounded-2xl p-6 sm:p-8
                    transition-all duration-300 overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-500/10 before:to-fuchsia-500/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:bg-gradient-to-br after:from-violet-400/5 after:to-transparent after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-500
                    group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.3)]"
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center justify-center h-full relative z-10"
                    >
                      {/* Glowing orb behind number */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Number with enhanced gradient */}
                      <span className="relative text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-transparent group-hover:from-white group-hover:via-violet-100 group-hover:to-violet-300 transition-all duration-300">
                        <CountUp 
                          end={stat.fullNumber} 
                          duration={2} 
                          suffix={stat.number.includes('+') ? '+' : '%'} 
                          enableScrollSpy={true}
                        />
                      </span>
                      
                      {/* Label with enhanced styling */}
                      <p className="mt-4 text-sm sm:text-base text-center font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 relative">
                        <span className="relative">
                          {stat.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </p>
                    </motion.div>
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