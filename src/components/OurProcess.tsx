import { motion } from 'framer-motion';

const App = () => {
  const steps = [
    {
      number: "1",
      title: "Consult",
      description: "We'll discuss your goals and vision over a call to ensure we're aligned."
    },
    {
      number: "2",
      title: "Design",
      description: "We'll create a custom design that reflects your brand and meets your needs."
    },
    {
      number: "3",
      title: "Deliver",
      description: "Your website will be delivered, optimized for performance and ready to impress."
    }
  ];

  return (
    <div className="bg-black text-white font-[Inter]">
      <div className="px-4 md:px-6">
        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl font-bold mt-24 mb-16 text-center md:text-center font-secondary">
          Our <span className="text-violet-600 font-secondary">3-step</span> Process
        </h1>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Line with Beam */}
          <div className="hidden md:block absolute top-[45px] left-[20%] right-[20%] h-[2px] bg-gray-800 overflow-hidden">
            <motion.div
              className="h-full w-[20%] bg-violet-600"
              animate={{
                x: ["0%", "400%"],
              }}
              transition={{
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex justify-between items-start relative">
              {/* Horizontal line with Beam for mobile */}
              <div className="absolute top-[35px] left-[40px] right-[40px] h-[2px] bg-gray-800 overflow-hidden">
                <motion.div
                  className="h-full w-[30%] bg-violet-600"
                  animate={{
                    x: ["0%", "300%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center w-24"
                >
                  <span className="text-6xl font-secondary mb-6 relative z-10 bg-black px-2">
                    {step.number}
                  </span>
                  <h2 className="text-base font-bold font-secondary text-violet-600 text-center w-full mb-8">
                    {step.title}
                  </h2>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-8xl font-bold mb-6">{step.number}</span>
                <h2 className="text-3xl font-bold text-violet-600 mb-4">{step.title}</h2>
                <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;