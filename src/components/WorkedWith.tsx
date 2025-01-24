"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import clsx from "clsx";

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
  const stats: Stat[] = [
    { number: '150+', label: 'Projects Completed', fullNumber: 150 },
    { number: '50+', label: 'Happy Clients', fullNumber: 50 },
    { number: '10+', label: 'Years Experience', fullNumber: 10 },
    { number: '100%', label: 'Client Satisfaction', fullNumber: 100 }
  ];

  const brands: Brand[] = [
    { name: 'Brand 1', logo: 'https://via.placeholder.com/150' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/150' },
    { name: 'Brand 3', logo: 'https://via.placeholder.com/150' },
    { name: 'Brand 4', logo: 'https://via.placeholder.com/150' },
    { name: 'Brand 5', logo: 'https://via.placeholder.com/150' },
    { name: 'Brand 6', logo: 'https://via.placeholder.com/150' }
  ];

  return (
    <section className="relative min-h-screen w-full px-8 py-2 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),rgba(0,0,0,0))]"></div>
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/4 rounded-full blur-[120px] animate-drift-1"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
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
                relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
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
                "mt-6 text-center font-display text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3]"
              )}>
              Our Collaborative Journey
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-gray-400 max-w-2xl mx-auto transition-[transform,opacity] duration-[--duration]",
              )}>
              Empowering businesses through strategic partnerships and innovative solutions.
            </p>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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
                    className="text-4xl md:text-5xl font-bold text-violet-500 mb-2"
                  >
                    <CountUp 
                      end={stat.fullNumber} 
                      duration={2} 
                      suffix={stat.number.includes('+') ? '+' : '%'} 
                      enableScrollSpy={true}
                    />
                  </motion.h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Brands Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {brands.map((brand: Brand, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                >
                  <div className="aspect-video relative flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-[120px] max-h-[60px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-center mt-4 text-gray-400">{brand.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </ScrollReveal>
    </section>
  );
};

export default WorkedWith;