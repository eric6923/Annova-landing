import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useAnimation, useInView, useScroll, useTransform, Variants, cubicBezier } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  // Add any props if needed
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const customEasing = cubicBezier(0.215, 0.610, 0.355, 1.000);

  // Modified scroll-based animations with slower fade
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: customEasing
      }
    }
  };

  const buttonVariants: Variants = {
    hover: { 
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.97,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.section 
      ref={ref} 
      className="relative min-h-screen bg-gradient-to-b from-black via-violet-950 to-black overflow-hidden perspective-1000"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),rgba(0,0,0,0))]" />
        
        {/* Animated Gradient Spheres */}
        <div className="absolute -left-48 top-1/4">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
              rotateZ: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1]
            }}
            className="w-96 h-96 rounded-full bg-gradient-conic from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 blur-3xl"
          />
        </div>
        <div className="absolute -right-48 bottom-1/4">
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.4, 0.3],
              rotateZ: -360
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1]
            }}
            className="w-96 h-96 rounded-full bg-gradient-conic from-violet-600/20 via-purple-500/20 to-violet-600/20 blur-3xl"
          />
        </div>
      </motion.div>

      {/* Main Content - Now with slower fade animation */}
      <motion.div 
        ref={contentRef}
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
        className="container mx-auto px-4 md:px-6 pt-40 sm:pt-48 md:pt-52 pb-12 md:pb-20 relative z-10"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          <motion.div className="relative inline-block">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Transforming Ideas into
              <span className="relative group">
                <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-violet-200 text-transparent bg-clip-text"> Digital Reality</span>
                
                {/* Doodle Art Circle */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[120%] -z-10 opacity-60"
                  viewBox="0 0 500 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M20,30 Q250,50 480,30" 
                    fill="none" 
                    stroke="rgba(124,58,237,0.5)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 font-secondary"
          >
            We craft exceptional digital experiences that elevate brands and drive success through innovative solutions and cutting-edge technology.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-8"
          >
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group w-3/4 sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base font-bold font- bg-violet-600 hover:bg-violet-700 text-white rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group w-3/4 sm:w-auto px-6 md:px-6 py-3 md:py-4 text-base font-bold border-2 border-violet-500 text-white rounded-xl hover:bg-violet-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Our Work</span>
              <Sparkles className="w-5 h-5 text-violet-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;