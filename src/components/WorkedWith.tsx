import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' }
];

const brands = [
  { name: 'Brand 1', logo: 'https://via.placeholder.com/150' },
  { name: 'Brand 2', logo: 'https://via.placeholder.com/150' },
  { name: 'Brand 3', logo: 'https://via.placeholder.com/150' },
  { name: 'Brand 4', logo: 'https://via.placeholder.com/150' },
  { name: 'Brand 5', logo: 'https://via.placeholder.com/150' },
  { name: 'Brand 6', logo: 'https://via.placeholder.com/150' }
];

const WorkedWith = () => {
  return (
    <section id="worked-with" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-violet-500 mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="aspect-video relative flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[120px] max-h-[60px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 text-gray-400">{brand.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkedWith;