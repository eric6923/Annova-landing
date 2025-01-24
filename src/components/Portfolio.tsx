"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Code, Palette } from 'lucide-react';
import clsx from "clsx";

// Typed interfaces
interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ScrollRevealProps {
  children: ((isActive: boolean) => React.ReactNode) | React.ReactNode;
  offset?: number;
  className?: string;
}

// ScrollReveal Component
const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, offset = 200, className }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      {typeof children === 'function' ? children(isActive) : children}
    </div>
  );
};

// Static Data with Type Annotations
const categories: Category[] = [
  { id: 'web', label: 'Web Development', icon: <Globe size={20} /> },
  { id: 'software', label: 'Software Development', icon: <Code size={20} /> },
  { id: 'branding', label: 'Branding', icon: <Palette size={20} /> }
];

const projects: Project[] = [
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

// Portfolio Component
const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('web');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen w-full px-8 py-2 overflow-hidden bg-black">
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
      <ScrollReveal offset={200} className="relative z-10 mx-auto max-w-7xl [--duration:800ms]">
        {(isActive: boolean) => (
          <>
            <div
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "flex justify-center mt-2 sm:mt-6 transition-[transform,opacity] duration-[--duration]",
              )}>
              <div className="
                relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
                bg-black/20 backdrop-blur-sm
                before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
                animate-glow-slow
              ">
                Our Portfolio
              </div>
            </div>

            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-6 text-center font-display text-4xl md:text-5xl font-bold transition-[transform,opacity] duration-[--duration]",
                "bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",
                "leading-[1.15] md:leading-[1.3]"
              )}>
              Creative Digital Solutions Showcase
            </h2>
            
            <p
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-gray-400 max-w-2xl mx-auto transition-[transform,opacity] duration-[--duration]",
              )}>
              Explore our innovative projects that demonstrate our commitment to cutting-edge digital experiences.
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
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
          </>
        )}
      </ScrollReveal>
    </section>
  );
};

export default Portfolio;