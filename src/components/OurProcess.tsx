import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./Timeline";
import { Code, Palette, Rocket, CheckCircle, Cpu } from "lucide-react";

const ProcessSection: React.FC = () => {
  const timelineData = [
    {
      title: "Discovery & Planning",
      content: (
        <div className="space-y-8">
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            We begin with a thorough consultation to understand your vision,
            goals, and requirements. Our team works closely with you to create a
            comprehensive project roadmap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-violet-500/5 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10 transition-all duration-300 hover:border-violet-500/30">
              <Code className="w-6 h-6 text-violet-500 mb-3" />
              <h4 className="text-white text-lg font-semibold mb-3">
                Technical Assessment
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Evaluating requirements and choosing the right technologies for
                your project's success
              </p>
            </div>
            <div className="bg-violet-500/5 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10 transition-all duration-300 hover:border-violet-500/30">
              <Palette className="w-6 h-6 text-violet-500 mb-3" />
              <h4 className="text-white text-lg font-semibold mb-3">
                Design Planning
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Creating wireframes and establishing design direction aligned
                with your brand
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design & Development",
      content: (
        <div className="space-y-8">
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            Our team brings your vision to life through iterative development
            and constant communication, ensuring every detail meets our high
            standards.
          </p>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-violet-500/5 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10 transition-all duration-300 hover:border-violet-500/30">
                <Palette className="w-6 h-6 text-violet-500 mb-3" />
                <h4 className="text-white text-lg font-semibold mb-3">
                  UI Development
                </h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  Creating responsive and intuitive interfaces that delight
                  users
                </p>
              </div>
              <div className="bg-violet-500/5 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10 transition-all duration-300 hover:border-violet-500/30">
                <Cpu className="w-6 h-6 text-violet-500 mb-3" />
                <h4 className="text-white text-lg font-semibold mb-3">
                  Backend Integration
                </h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  Building robust and scalable systems for long-term success
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Launch & Support",
      content: (
        <div className="space-y-8">
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            We ensure a smooth deployment and provide comprehensive support to
            guarantee your success in the digital landscape.
          </p>
          <div className="bg-violet-500/5 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10 transition-all duration-300 hover:border-violet-500/30">
            <Rocket className="w-8 h-8 text-violet-500 mb-4" />
            <h4 className="text-white text-lg font-semibold mb-4">
              Ready for Takeoff
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
              {[
                "Performance optimization",
                "Security implementation",
                "Production deployment",
                "Post-launch monitoring",
                "24/7 Support access",
                "Constant updates",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen w-full px-4 sm:px-8 py-2 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),rgba(0,0,0,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/4 rounded-full blur-[120px] animate-drift-1"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-2 sm:mt-6"
        >
          <div className="inline-block rounded-lg bg-black/80 px-4 py-2 backdrop-blur-sm border border-violet-800">
            <h2 className="text-violet-400 font-medium text-lg tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Our Process
            </h2>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-6 text-center font-display text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent 
            leading-[1.15] md:leading-[1.3]
          "
        >
          How We Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-400 max-w-2xl mx-auto mb-20"
        >
          Our proven process ensures we deliver exceptional results that exceed
          expectations, every step of the way.
        </motion.p>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ProcessSection;