import { cn } from '@/lib/utils'
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
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
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  centerIcon,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/50 stroke-[1.5px]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {/* Center icon */}
      {centerIcon && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          {centerIcon}
        </div>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center`,
              { "[animation-direction:reverse]": reverse },
              className,
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