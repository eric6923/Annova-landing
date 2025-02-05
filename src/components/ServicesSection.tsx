import { useRef, useEffect, useState } from 'react';
import { Code, Palette, Globe, Smartphone, Database, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import img from '../components/assets/whatsapp.png'
import clsx from "clsx";

interface ScrollRevealProps {
  children: (isActive: boolean) => React.ReactNode;
  offset?: number;
  className?: string;
}

export const services = [
  {
    icon: <Code size={32} />,
    title: 'Software Development',
    description: 'Custom web applications solutions.',
    path: '/software'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    path: '/mobile'
  },
  {
    icon: <Database size={32} />,
    title: 'AI Solutions',
    description: 'Scalable and secure AI solutions.',
    path: '/ai'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Branding',
    description: 'Crafting memorable branding experiences',
    path: '/branding'
  },
  {
    icon: <Globe size={32} />,
    title: 'Social Media Marketing',
    description: 'Building engaging social presence',
    path: '/social'
  },
  {
    icon: <Palette size={32} />,
    title: 'Ads Creation',
    description: 'Crafting impactful Ad Campaigns',
    path: '/ads'
  },
];

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
          <div>
            <div
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "flex justify-center mt-2 sm:mt-6 transition-[transform,opacity] duration-[--duration]",
              )}>
              <div className="inline-block rounded-lg bg-black/80 px-4 py-2 backdrop-blur-sm border border-violet-800">
                <h2 className="text-violet-400 font-medium text-lg tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] font-secondary">
                  Our Services
                </h2>
              </div>
            </div>

            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-display text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3] font-secondary"
              )}>
              Digital Solutions for Modern Business
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-gray-400 max-w-2xl mx-auto transition-[transform,opacity] duration-[--duration] font-secondary",
              )}>
              We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} offset={100}>
                  {(isCardActive) => (
                    <div>
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
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-4">
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
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-20 mb-8 flex justify-center">
              <a
                href="https://wa.me/7992193730"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "group flex items-center gap-3 px-6 py-3 rounded-full",
                  "bg-gradient-to-r from-green-500 to-green-600",
                  "hover:from-green-600 hover:to-green-700",
                  "transition-all duration-300 transform hover:scale-105",
                  "text-white font-medium shadow-lg",
                  "shadow-green-500/25 hover:shadow-green-500/40"
                )}
              >
                <img 
                  src={img}
                  alt="WhatsApp"
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                />
                Chat with us
              </a>
            </div>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}