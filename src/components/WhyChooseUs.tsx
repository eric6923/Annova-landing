import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Rocket, Users, Target } from 'lucide-react';

const reasons = [
  {
    icon: <Shield size={32} />,
    title: 'Proven Expertise',
    description: 'Over a decade of experience delivering cutting-edge digital solutions across industries.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Innovation First',
    description: 'We stay ahead of technological trends to give your business a competitive edge.'
  },
  {
    icon: <Users size={32} />,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand and achieve your goals.'
  },
  {
    icon: <Target size={32} />,
    title: 'Results Driven',
    description: 'We focus on delivering measurable results that drive your business forward.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Why <span className='text-violet-500'>Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We bring together expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-violet-900/20 to-black p-8 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-violet-500 mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;