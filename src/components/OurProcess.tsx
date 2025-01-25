import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { Code, Palette, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const timelineData = [
    {
      title: "Discovery & Planning",
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm md:text-base">
            We begin with a thorough consultation to understand your vision, goals, and requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-violet-500/5 rounded-lg p-4 backdrop-blur-sm border border-violet-500/10">
              <Code className="w-6 h-6 text-violet-500 mb-2" />
              <h4 className="text-white text-lg font-semibold mb-2">Technical Assessment</h4>
              <p className="text-gray-400 text-sm">Evaluating requirements and choosing the right technologies</p>
            </div>
            <div className="bg-violet-500/5 rounded-lg p-4 backdrop-blur-sm border border-violet-500/10">
              <Palette className="w-6 h-6 text-violet-500 mb-2" />
              <h4 className="text-white text-lg font-semibold mb-2">Design Planning</h4>
              <p className="text-gray-400 text-sm">Creating wireframes and establishing design direction</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design & Development",
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm md:text-base">
            Our team brings your vision to life through iterative development and constant communication.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Development Process"
              className="rounded-lg object-cover h-48 w-full shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-violet-500/5 rounded-lg p-4 backdrop-blur-sm border border-violet-500/10">
                <h4 className="text-white text-lg font-semibold mb-2">UI Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive and intuitive interfaces</p>
              </div>
              <div className="bg-violet-500/5 rounded-lg p-4 backdrop-blur-sm border border-violet-500/10">
                <h4 className="text-white text-lg font-semibold mb-2">Backend Integration</h4>
                <p className="text-gray-400 text-sm">Building robust and scalable systems</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Launch & Support",
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm md:text-base">
            We ensure a smooth deployment and provide ongoing support for your success.
          </p>
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-lg p-6 backdrop-blur-sm border border-violet-500/10">
            <Rocket className="w-8 h-8 text-violet-500 mb-4" />
            <h4 className="text-white text-xl font-semibold mb-3">Ready for Takeoff</h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-400 text-sm">
                ✓ Performance optimization
              </div>
              <div className="flex gap-2 items-center text-gray-400 text-sm">
                ✓ Security measures implementation
              </div>
              <div className="flex gap-2 items-center text-gray-400 text-sm">
                ✓ Deployment to production
              </div>
              <div className="flex gap-2 items-center text-gray-400 text-sm">
                ✓ Post-launch monitoring
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen w-full px-4 sm:px-8 py-12 overflow-hidden bg-black">
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
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium bg-black/20 backdrop-blur-sm">
            Our Process
          </div>
        </div>

        <h2 className="mt-6 text-center font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent leading-[1.15] md:leading-[1.3]">
          How We Work
        </h2>
        
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Our proven process ensures we deliver exceptional results that exceed expectations.
        </p>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ProcessSection;