import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sonarike Mahajan",
    role: "Co-founder",
    company: "@Apollo Cranes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The level of collaboration made the entire process smooth and enjoyable."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "@BuildTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "Their innovative approach transformed our construction workflow completely."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Site Director",
    company: "@ConstructPro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The attention to detail and commitment to excellence was outstanding."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-6xl w-full mx-auto">
        {/* Testimonial Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#2A2A2A] mb-4">
            <span className="text-white/90 text-sm font-medium">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            <div className="bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text inline-block">
              Real Stories,
            </div>
            <div className="text-white">
              Real Voices
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section - Now first on mobile */}
          <div className="order-1 flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full max-w-[280px] lg:max-w-sm aspect-[3/4] rounded-3xl overflow-hidden mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mb-6 lg:hidden">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-violet-500/30 flex items-center justify-center text-violet-500 hover:text-violet-400 hover:border-violet-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-violet-500/30 flex items-center justify-center text-violet-500 hover:text-violet-400 hover:border-violet-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Name and Designation - Overlaid on image for desktop, visible on mobile */}
            <div className=" text-center lg:hidden mb-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-white/60">
                {testimonials[currentIndex].role} {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Quote and Desktop Navigation */}
          <div className=" order-2 flex flex-col justify-center">
            {/* Quote */}
            <blockquote className="hidden lg:block text-2xl lg:text-4xl font-light text-white/90 leading-tight mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Name and Designation - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block mb-6">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-base text-white/60">
                {testimonials[currentIndex].role} {testimonials[currentIndex].company}
              </p>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden lg:flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-violet-500/30 flex items-center justify-center text-violet-500 hover:text-violet-400 hover:border-violet-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-violet-500/30 flex items-center justify-center text-violet-500 hover:text-violet-400 hover:border-violet-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;