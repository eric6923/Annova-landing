import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useAnimation, useScroll } from 'framer-motion';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  useEffect(() => {
    setIsMounted(true);
    controls.start("visible");
  }, [controls]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Enhanced text animation configuration
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section 
      className="relative min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay with more vibrant violet */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/60 via-black to-black" />
        
        {/* Dynamic mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl mix-blend-screen"
              style={{
                background: `radial-gradient(circle at center, 
                  ${i % 3 === 0 ? 'rgba(139,92,246,0.2)' : 
                    i % 3 === 1 ? 'rgba(124,58,237,0.2)' : 'rgba(167,139,250,0.2)'}
                  , transparent)`,
                width: `${250 + Math.random() * 400}px`,
                height: `${250 + Math.random() * 400}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                opacity: [0.6, 0.3, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced animated lines */}
        <div className="absolute inset-0 opacity-25">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-full h-[0.5px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
                top: `${15 + i * 12}%`,
                transform: `rotate(${-35 + i * 2}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                translateX: [-1500, 1500],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Enhanced particle effect */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                background: `rgba(${167 + Math.random() * 20}, ${139 + Math.random() * 20}, ${250 + Math.random() * 5}, ${0.6 + Math.random() * 0.4})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [-20, 20],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 md:pt-48 pb-12 sm:pb-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-4xl mx-auto text-center"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Enhanced Title */}
          <motion.div 
            variants={child}
            className="space-y-2 sm:space-y-4 mb-8 sm:mb-10"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-violet-400/20 rounded-lg blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <h1 className="relative text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight px-4">
                <span className="block sm:inline">Transforming Ideas </span>
                <span className="block sm:inline">into </span>
                <span className="relative inline-block">
                  <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-violet-300 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                  <motion.span
                    className="absolute top-0 right-0 -mr-4 -mt-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-violet-400" />
                  </motion.span>
                </span>
              </h1>
            </div>
          </motion.div>
          
          {/* Enhanced Description */}
          <motion.p 
            variants={child}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-12 px-4 leading-relaxed"
          >
            We craft exceptional digital experiences that elevate brands and drive success through innovative solutions and cutting-edge technology.
          </motion.p>

          {/* Enhanced Buttons */}
          <motion.div 
            variants={child}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <motion.button 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-full flex items-center justify-center gap-2 group relative overflow-hidden shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-400 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 font-medium">Get Started</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button 
              className="w-full sm:w-auto px-8 py-4 border border-violet-500/50 text-white rounded-full group relative overflow-hidden backdrop-blur-sm hover:border-violet-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 font-medium">View Our Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;