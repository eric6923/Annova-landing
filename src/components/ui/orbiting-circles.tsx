import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode; // Mobile icons
  desktopIcons?: React.ReactNode[]; // Desktop-specific icons
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  centerIcon?: React.ReactNode;
}

export function OrbitingCircles({
  className,
  children,
  desktopIcons,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  centerIcon,
  ...props
}: OrbitingCirclesProps) {
  const [adjustedRadius, setAdjustedRadius] = useState(radius);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is for desktop
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setDesktop(true);
        setAdjustedRadius(240); // Larger radius for desktop outer circle
      } else {
        setDesktop(false);
        setAdjustedRadius(radius); // Default radius for mobile
      }
    };

    handleResize(); // Set initial state on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radius]);

  const calculatedDuration = duration / speed;
  const iconsToUse = desktop && desktopIcons ? desktopIcons : React.Children.toArray(children);

  return (
    <>
      {/* Outer Circle */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/50 stroke-[1.5px]"
            cx="50%"
            cy="65%"
            r={adjustedRadius}
            fill="none"
          />
        </svg>
      )}
      {desktop && path && (
        // Smaller inner circle for desktop
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/50 stroke-[1.5px]"
            cx="50%"
            cy="65%"
            r={adjustedRadius - 100} // Smaller radius for inner circle
            fill="none"
          />
        </svg>
      )}
      {centerIcon && (
        <div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 transform">
          {centerIcon}
        </div>
      )}
      {/* Orbiting Items */}
      {iconsToUse.map((child, index) => {
        const isInnerCircle = desktop && index % 2 !== 0; // Split children for desktop
        const childRadius = isInnerCircle
          ? adjustedRadius - 100 // Assign smaller radius for inner circle
          : adjustedRadius; // Assign larger radius for outer circle
        const angle = (360 / iconsToUse.length) * index;

        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": childRadius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              top: "62%",
            } as React.CSSProperties}
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
