import { motion } from 'framer-motion';
import { Code, Palette, Globe, Smartphone, Database, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend Development',
    description: 'Scalable and secure backend solutions.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and deployment strategies.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation solutions.',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design and seamless experiences.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-violet-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <button className="mt-6 text-violet-400 hover:text-violet-300 flex items-center gap-2">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;