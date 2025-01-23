import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: number }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; size: number }>>([]);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const shootingStarsArray = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
    }));
    setShootingStars(shootingStarsArray);

    const starsArray = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2,
    }));
    setStars(starsArray);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    idle: {
      scale: 1,
      opacity: 0.5,
    },
    hover: {
      scale: 1.2,
      opacity: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section 
      ref={ref} 
      style={{ opacity }}
      className="relative min-h-screen bg-gradient-to-b from-black via-violet-950 to-black overflow-hidden perspective-1000"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),rgba(0,0,0,0))]"></div>
        
        {/* Enhanced Grid Pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"
        ></motion.div>

        {/* Enhanced Background Stars */}
        <div className="fixed inset-0">
          {stars.map((star) => (
            <motion.span
              key={star.id}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                width: star.size + "px",
                height: star.size + "px",
              }}
              className="absolute rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.3)]"
            />
          ))}
        </div>

        {/* Animated Gradient Spheres */}
        <div className="absolute -left-48 top-1/4">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotateZ: 360
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-96 h-96 rounded-full bg-gradient-conic from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 blur-3xl"
          />
        </div>
        <div className="absolute -right-48 bottom-1/4">
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
              rotateZ: -360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-96 h-96 rounded-full bg-gradient-conic from-violet-600/20 via-purple-500/20 to-violet-600/20 blur-3xl"
          />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%", y: 100 * i }}
              animate={{ x: "200%" }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent w-1/2"
            />
          ))}
        </div>

        {/* Scroll-triggered Portals */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full border-2 border-violet-500/20 rounded-full"
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1 + i * 0.5, 4 + i * 0.5]),
                opacity: useTransform(scrollYProgress, [0, 0.7], [0.3 - i * 0.1, 0])
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 pt-40 sm:pt-48 md:pt-52 pb-12 md:pb-20 relative z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          <motion.div
            className="relative inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Transforming Ideas into
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-violet-200 text-transparent bg-clip-text"> Digital Reality</span>
                <motion.span
                  variants={glowVariants}
                  animate={isHovered ? "hover" : "idle"}
                  className="absolute inset-0 bg-gradient-to-r from-violet-300/20 via-violet-400/20 to-violet-200/20 blur-xl -z-10"
                />
              </span>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            We craft exceptional digital experiences that elevate brands and drive success through innovative solutions and cutting-edge technology.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-3/4 sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center gap-2 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={18} className="w-4 sm:w-5 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-violet-500"
                initial={false}
                animate={{
                  scale: isHovered ? 1.5 : 1,
                  opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-3/4 sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base border border-violet-500 text-white rounded-full hover:bg-violet-500/10 transition-all flex items-center justify-center gap-2"
            >
              <span>View Our Work</span>
              <Sparkles className="w-4 h-4 text-violet-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;