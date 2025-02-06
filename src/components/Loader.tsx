import { motion } from 'framer-motion';
import profile from './profile.jpg'
const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
            radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 70%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo container with floating animation */}
        <motion.div
          className="relative w-16 h-16"
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Logo image with shine effect */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profile}
              alt="Logo"
              className="w-full h-full object-contain rounded-full"
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </motion.div>

          {/* Orbital rings */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-full border border-violet-500/20"
              style={{ 
                transform: `scale(${1 + (index * 0.15)})`,
              }}
              animate={{
                rotate: 360,
                scale: [1 + (index * 0.15), 1 + (index * 0.2), 1 + (index * 0.15)],
              }}
              transition={{
                rotate: {
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
            />
          ))}

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-violet-600/10 blur-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Animated dots */}
          <div className="flex items-center justify-center space-x-1.5">
            {[...Array(3)].map((_, index) => (
              <motion.span
                key={index}
                className="w-1.5 h-1.5 bg-violet-600 rounded-full"
                animate={{
                  y: [-3, 3, -3],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>

          {/* Loading text with gradient */}
          <motion.div
            className="relative"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600 font-medium">
              Loading
            </span> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;