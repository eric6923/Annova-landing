import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Code, Palette } from 'lucide-react';

const categories = [
  { id: 'web', label: 'Web Development', icon: <Globe size={20} /> },
  { id: 'software', label: 'Software Development', icon: <Code size={20} /> },
  { id: 'branding', label: 'Branding', icon: <Palette size={20} /> }
];

const projects = [
  {
    id: 1,
    category: 'web',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    url: '#'
  },
  {
    id: 2,
    category: 'software',
    title: 'Enterprise Management System',
    description: 'Comprehensive business management solution',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    url: '#'
  },
  {
    id: 3,
    category: 'branding',
    title: 'Brand Identity Design',
    description: 'Complete brand identity transformation',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=60',
    url: '#'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-black/40 text-gray-400 hover:bg-violet-600/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects
              .filter((project) => project.category === activeCategory)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <a
                        href={project.url}
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
                      >
                        View Project <ArrowRight size={16} />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;