import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, Tech Innovators',
    content: 'Working with Annova has been transformative for our business. Their expertise and dedication to quality are unmatched.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Director, Global Solutions',
    content: 'The team at Annova delivered beyond our expectations. Their attention to detail and innovative solutions have helped us stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder, Digital Ventures',
    content: 'Exceptional service and outstanding results. Annova has been instrumental in our digital transformation journey.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-violet-600/20 text-violet-400 hover:bg-violet-600/40 transition-colors pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-violet-600/20 text-violet-400 hover:bg-violet-600/40 transition-colors pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-violet-500/20">
                  <Quote className="text-violet-500 mb-6" size={48} />
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-violet-500 w-4'
                    : 'bg-violet-500/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;