"use client"

import { useRef, useEffect, useState } from 'react';
import { Code, Palette, Globe, Smartphone, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from "clsx";

interface ScrollRevealProps {
  children: (isActive: boolean) => React.ReactNode;
  offset?: number;
  className?: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
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

const services: Service[] = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend Development',
    description: 'Scalable and secure backend solutions.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and deployment strategies.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation solutions.',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design and seamless experiences.',
  },
];

export default function ServicesSection() {
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
                Our Services
              </div>
            </div>

            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-display text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3]"
              )}>
              Digital Solutions for Modern Business
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-gray-400 max-w-2xl mx-auto transition-[transform,opacity] duration-[--duration]",
              )}>
              We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} offset={100}>
                  {(isCardActive) => (
                    <>
                      {/* Mobile View */}
                      <motion.div
                        className="block lg:hidden relative group"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={clsx(
                          "relative bg-gradient-to-br from-violet-900/10 to-black p-8 rounded-2xl",
                          "border border-violet-500/20 hover:border-violet-500/40",
                          "transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10",
                          "group hover:-translate-y-1 backdrop-blur-sm",
                          "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-violet-500/5 before:blur-xl"
                        )}>
                          <div className="text-violet-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Desktop View */}
                      <div 
                        className={clsx(
                          "hidden lg:block relative group",
                          { "translate-y-8 opacity-0": !isCardActive },
                          "transition-all duration-[800ms]"
                        )}
                      >
                        <div className={clsx(
                          "relative bg-gradient-to-br from-violet-900/10 to-black p-8 rounded-2xl",
                          "border border-violet-500/20 hover:border-violet-500/40",
                          "transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10",
                          "group hover:-translate-y-1 backdrop-blur-sm",
                          "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-violet-500/5 before:blur-xl"
                        )}>
                          <div className="text-violet-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </ScrollReveal>
    </section>
  );
}