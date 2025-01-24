import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ProcessSection: React.FC = () => {
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
      <div className="relative z-10 mx-auto max-w-7xl [--duration:800ms]">
        <div
          className={clsx(
            "flex justify-center mt-2 sm:mt-6 transition-[transform,opacity] duration-[--duration]"
          )}>
          <div className="
            relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
            bg-black/20 backdrop-blur-sm
            before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
            animate-glow-slow
          ">
            Our 3-Step Process
          </div>
        </div>

        <h2 className={clsx(
          "mt-6 text-center font-display text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
          "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
          "leading-[1.15] md:leading-[1.3]"
        )}>
          Efficient, Effective, and Tailored for You
        </h2>
        
        <p className={clsx(
          "mt-4 text-center text-gray-400 max-w-2xl mx-auto transition-[transform,opacity] duration-[--duration]",
        )}>
          Our 3-step process ensures we deliver exceptional results every time.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-violet-500 mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold"
              >
                1
              </motion.span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Consult</h3>
            <p className="text-gray-400 text-center max-w-xs">
              We'll discuss your goals and vision over a call to ensure we're aligned.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-violet-500 mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold"
              >
                2
              </motion.span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Develop</h3>
            <p className="text-gray-400 text-center max-w-xs">
              We'll create a custom design that reflects your brand and meets your needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-violet-500 mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold"
              >
                3
              </motion.span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Deliver</h3>
            <p className="text-gray-400 text-center max-w-xs">
              Your website will be delivered, optimized for performance and ready to impress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;