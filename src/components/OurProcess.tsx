import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb size={32} />,
    title: 'Discovery',
    description: 'We dive deep into understanding your business goals and requirements.'
  },
  {
    icon: <Search size={32} />,
    title: 'Strategy',
    description: 'Developing a comprehensive plan to achieve your digital objectives.'
  },
  {
    icon: <Code size={32} />,
    title: 'Development',
    description: 'Building your solution with cutting-edge technologies and best practices.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Launch',
    description: 'Deploying your project and ensuring everything runs smoothly.'
  }
];

const OurProcess = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined approach to turning your vision into reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-violet-600/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 text-sm font-bold">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="relative z-10">
                    <div className="text-violet-500 mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Connection Point */}
                <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-violet-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-violet-600/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;