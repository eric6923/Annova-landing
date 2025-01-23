import React, { ReactNode } from 'react';

interface SpotlightButtonProps {
  children: ReactNode;
  className?: string;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({ children, className = '' }) => {
  return (
    <div className={`group relative inline-block ${className}`}>
      <div 
        className="absolute -inset-0.5 bg-violet-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg animate-tilt"
      />
      <div className="relative z-10 bg-transparent">
        {children}
      </div>
    </div>
  );
};

export default SpotlightButton;