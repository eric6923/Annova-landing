import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';
import type { Application } from '@splinetool/runtime';

const LoadingSpinner = React.memo(() => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <Loader2 className="h-12 w-12 animate-spin text-white" />
  </div>
));

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const onLoad = useCallback((splineApp: Application) => {
    splineRef.current = splineApp;
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mousePositionRef.current = {
      x: (event.clientX - rect.left) / rect.width * 2 - 1,
      y: (event.clientY - rect.top) / rect.height * 2 - 1
    };
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!containerRef.current) return;

    const touch = event.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    mousePositionRef.current = {
      x: (touch.clientX - rect.left) / rect.width * 2 - 1,
      y: (touch.clientY - rect.top) / rect.height * 2 - 1
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);

    // Performance optimization: RAF for smooth updates
    const updateSplineVariables = () => {
      if (splineRef.current) {
        const { x, y } = mousePositionRef.current;
        splineRef.current.setVariable('mouseX', x);
        splineRef.current.setVariable('mouseY', y);
      }
      rafRef.current = requestAnimationFrame(updateSplineVariables);
    };

    // Initial start of animation loop
    rafRef.current = requestAnimationFrame(updateSplineVariables);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleTouchMove]);

  // Memoized background content to prevent unnecessary re-renders
  const BackgroundContent = useMemo(() => (
    <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 to-black/10 pointer-events-none">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next Generation Robot
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Experience the future of robotics with our advanced AI-powered companion
          </p>
          <button 
            className="px-8 py-3 bg-white text-black rounded-full font-medium 
                       hover:bg-opacity-90 transition-all duration-300
                       transform hover:scale-105"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  ), []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black touch-none select-none"
    >
      <div className="absolute inset-0 z-10">
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/pOSOUFa4NGecwLZh/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      
      {BackgroundContent}
    </div>
  );
};

export default React.memo(HeroSection);