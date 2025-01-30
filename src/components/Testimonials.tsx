import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import video from './assets/test1.mp4'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  video: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sonarike Mahajan",
    role: "Co-founder",
    company: "@Apollo Cranes",
    video: video,
    quote: "The level of collaboration made the entire process smooth and enjoyable."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "@BuildTech",
    video: "",
    quote: "Their innovative approach transformed our construction workflow completely."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Site Director",
    company: "@ConstructPro",
    video: "",
    quote: "The attention to detail and commitment to excellence was outstanding."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:py-0">
      <div className="max-w-6xl w-full mx-auto">
        {/* Testimonial Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block rounded-lg bg-black/80 px-4 py-2 backdrop-blur-sm border border-violet-800">
            <h2 className="text-violet-400 font-medium text-lg tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Our Testimonials
            </h2>
          </div>
          <h2 className="mt-6 text-center font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent leading-[1.15] md:leading-[1.3]">
            Real Stories, Real Voices
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Section - Now first on mobile */}
          <div className="order-1 flex flex-col items-center">
            {/* Video Container */}
            <div className="relative w-full max-w-[280px] lg:max-w-sm aspect-[3/4] rounded-3xl overflow-hidden mb-6">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={testimonials[currentIndex].video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
              
              {/* Mute Button - Now positioned top left */}
              <button
                onClick={toggleMute}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
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
            <div className="text-center lg:hidden mb-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-white/60">
                {testimonials[currentIndex].role} {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Quote and Desktop Navigation */}
          <div className="order-2 flex flex-col justify-center">
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