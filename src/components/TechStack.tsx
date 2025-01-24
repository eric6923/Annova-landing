import React, { ComponentPropsWithoutRef } from 'react';

// Utility function to conditionally join classNames
function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ');
}

// Marquee Component
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

function Marquee({ 
  className, 
  reverse = false, 
  pauseOnHover = false, 
  children, 
  vertical = false, 
  repeat = 4, 
  ...props
}: MarqueeProps) {
  return (
    <div 
      {...props} 
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        !vertical ? "flex-row" : "flex-col",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              !vertical ? "animate-marquee flex-row" : "animate-marquee-vertical flex-col",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Tech stack logos as SVG components
const TechLogos = {
  GitHub: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Python: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
      <path d="M14.25.75v2.249c0 .621-.504 1.125-1.125 1.125H10.5c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h3.375c.621 0 1.125.504 1.125 1.125V18c0 .621-.504 1.125-1.125 1.125h-3.75c-.621 0-1.125-.504-1.125-1.125v-2.25"/>
    </svg>
  ),
  React: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
      <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 1 0 0-4.278zm-5.992 6.394l-.472-.425c-2.115-1.908-3.036-4.68-2.624-7.424a8.187 8.187 0 0 1 5.548-6.499c2.808-.868 5.645-.205 7.737 1.803a8.188 8.188 0 0 1 2.036 7.527c-.456 2.562-1.937 4.781-4.165 6.154-2.34 1.46-5.207 1.695-7.702.62L12 16.925l-1.415-1.404a.53.53 0 0 0-.757 0 .527.527 0 0 0 0 .757l1.678 1.678a.531.531 0 0 0 .757 0l1.678-1.678a.53.53 0 0 0 0-.757.527.527 0 0 0-.757 0l-1.415 1.404-1.07-1.067z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-700">
      <path d="M0 12v12h24V0H0zm19.341-.963c.353.18.646.408.897.676.1.115.247.312.247.312l-1.252 1.602c-.187-.285-.419-.53-.676-.732-.267-.211-.571-.397-.91-.531-.345-.136-.619-.196-1.044-.196-.411 0-.777.083-1.099.25-.32.166-.576.402-.767.707-.19.305-.285.665-.285 1.08 0 .413.095.765.285 1.058.19.293.454.536.792.727.338.192.747.344 1.227.457.333.08.714.16 1.144.24.43.08.854.184 1.274.312a4.242 4.242 0 0 1 1.19.584c.353.251.639.562.858.932.218.37.327.809.327 1.318 0 .512-.118.974-.355 1.387-.237.413-.57.753-1 1.02-.43.267-.938.453-1.526.557-.588.104-1.226.156-1.915.156a6.786 6.786 0 0 1-2.093-.302 5.972 5.972 0 0 1-1.738-.836l1.274-1.608c.261.231.555.422.88.574.326.152.68.266 1.063.342.383.076.747.114 1.09.114.48 0 .866-.081 1.158-.242.292-.161.438-.412.438-.753 0-.287-.124-.52-.371-.699-.248-.179-.655-.336-1.221-.472a15.383 15.383 0 0 1-1.167-.311 4.347 4.347 0 0 1-1.11-.532 2.399 2.399 0 0 1-.775-.854c-.2-.356-.3-.788-.3-1.295 0-.461.108-.88.325-1.26.217-.379.519-.683.908-.912.389-.229.84-.387 1.355-.473.515-.086 1.075-.129 1.68-.129a6.6 6.6 0 0 1 1.934.274c.583.183 1.1.457 1.55.822z"/>
    </svg>
  ),
  Docker: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
      <path d="M13.5 3c-2.914 0-5.527 1.171-7.627 3.045A13.94 13.94 0 0 0 2 12c0 3.875 1.857 7.297 4.688 9.563L7.25 21h9.5l.563-.438C20.143 19.297 22 15.875 22 12c0-3.203-1.277-6.047-3.373-8.045A11.684 11.684 0 0 0 13.5 3zm0 2c2.04 0 3.813.813 5.22 2.126a9.946 9.946 0 0 1 2.407 5.782c0 2.286-.79 4.348-2.095 6.022L18.75 19h-13.5l-.282-.07C3.383 16.65 2.5 14.43 2.5 12c0-2.375.895-4.542 2.376-6.188C6.358 5.155 8.46 4.5 13.5 5z"/>
    </svg>
  ),
  Kubernetes: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
      <path d="M10.5 14.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75zm3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75zm-6-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75zm9 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75zm-3-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75z"/>
    </svg>
  ),
  Node: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
      <path d="M12 2.252L1.902 8.442A.996.996 0 0 0 1.253 9.8l2.123 2.123a1 1 0 0 0 1.281.16l7.344-4.856v12.858a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7.23l7.343 4.855a1 1 0 0 0 1.281-.16l2.123-2.123a.996.996 0 0 0-.649-1.357L12 2.252z"/>
    </svg>
  ),
};

// Tech Stack Logo Card Component
const TechStackLogoCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 h-32 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center justify-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="w-20 h-20 mb-2">
        <Icon />
      </div>
      <figcaption className="text-sm font-medium dark:text-white text-center">
        {name}
      </figcaption>
    </figure>
  );
};

// Prepare tech stack data
const techStack = [
  { name: "GitHub", Icon: TechLogos.GitHub },
  { name: "Python", Icon: TechLogos.Python },
  { name: "React", Icon: TechLogos.React },
  { name: "TypeScript", Icon: TechLogos.TypeScript },
  { name: "Docker", Icon: TechLogos.Docker },
  { name: "Kubernetes", Icon: TechLogos.Kubernetes },
  { name: "Node.js", Icon: TechLogos.Node },
];

// Split tech stack into two rows
const firstRow = techStack.slice(0, Math.ceil(techStack.length / 2));
const secondRow = techStack.slice(Math.ceil(techStack.length / 2));

export function TechStackMarquee() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechStackLogoCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechStackLogoCard key={tech.name} {...tech} />
        ))}
      </Marquee>
    </div>
  );
}