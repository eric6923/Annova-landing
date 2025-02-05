import React from 'react';
import myGif from './friday.gif';

// Define the props interface for the Button component
interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  isLoading?: boolean;  // Added since it was used in the parent component
}

const Button: React.FC<ButtonProps> = ({ onClick, children, isLoading }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src={myGif} 
        alt="button gif" 
        onClick={onClick} 
        style={{
          cursor: "pointer",
          width: "255px",
          height: "255px"
        }}
      />
      {children}
    </div>
  );
};

export default Button;