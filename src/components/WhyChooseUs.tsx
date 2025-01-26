import React, { useEffect, useRef, useState } from 'react';
import { Shield, Rocket, Users, Target } from 'lucide-react';
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const content = [
  {
    title: "Proven Expertise",
    description: "Over a decade of experience delivering cutting-edge digital solutions across industries.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-violet-600/20 to-violet-800/20 flex items-center justify-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Shield className="w-24 h-24 text-violet-400" />
          <p className="text-xl text-center text-violet-200 font-medium">
            Trusted by industry leaders for over a decade
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Innovation First",
    description: "We stay ahead of technological trends to give your business a competitive edge.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-violet-600/20 to-violet-800/20 flex items-center justify-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Rocket className="w-24 h-24 text-violet-400" />
          <p className="text-xl text-center text-violet-200 font-medium">
            Cutting-edge solutions for tomorrow's challenges
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand and achieve your goals.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-violet-600/20 to-violet-800/20 flex items-center justify-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Users className="w-24 h-24 text-violet-400" />
          <p className="text-xl text-center text-violet-200 font-medium">
            Dedicated to your success story
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Results Driven",
    description: "We focus on delivering measurable results that drive your business forward.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-violet-600/20 to-violet-800/20 flex items-center justify-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Target className="w-24 h-24 text-violet-400" />
          <p className="text-xl text-center text-violet-200 font-medium">
            Measurable impact, tangible growth
          </p>
        </div>
      </div>
    ),
  },
];

const ScrollStackCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });

  return (
    <div ref={containerRef} className="lg:hidden min-h-screen relative">
      {/* Static header section */}
      <div className="sticky top-0 pt-20 pb-10 px-4 bg-black">
        <div className="flex justify-center mb-8">
          <div className="relative rounded-full border-2 border-violet-500 px-6 py-2 text-sm font-medium bg-black/20 backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl animate-glow-slow">
            Why Choose Us
          </div>
        </div>

        <h2 className="text-center font-display text-3xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent mb-10 px-4">
          Your Success, Our Priority
        </h2>
      </div>

      {/* Cards container */}
      <div className="h-[300vh] relative mr-4">
        {content.map((card, index) => {
          const CARD_OFFSET = 200;
          const INITIAL_Y = 20;
          const SEGMENT_SIZE = 0.2;
          const START_POINT = index * SEGMENT_SIZE;

          const y = useTransform(
            scrollYProgress,
            [
              START_POINT,
              START_POINT + (SEGMENT_SIZE * 0.8),
              1
            ],
            [
              index === 0 ? INITIAL_Y : INITIAL_Y + (index * CARD_OFFSET),
              INITIAL_Y + (index * 2),
              INITIAL_Y + (index * 2)
            ]
          );

          return (
            <motion.div
              key={index}
              style={{ 
                position: 'sticky',
                top: '250px',
                y,
                zIndex: index
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[90%] p-6 rounded-xl shadow-lg 
                         bg-gradient-to-br from-black via-violet-950 to-violet-900 
                         border border-violet-500/20 transition-shadow hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  {index === 0 && <Shield className="w-full h-full text-violet-400" />}
                  {index === 1 && <Rocket className="w-full h-full text-violet-400" />}
                  {index === 2 && <Users className="w-full h-full text-violet-400" />}
                  {index === 3 && <Target className="w-full h-full text-violet-400" />}
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{card.title}</h2>
                <p className="text-gray-200 text-center">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength + 2));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section className="relative min-h-screen w-full bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),rgba(0,0,0,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[90rem] pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        {/* Desktop-only header */}
        <div className="hidden lg:block">
          <div className="flex justify-center mb-8 md:mb-16">
            <div className="relative rounded-full border-2 border-violet-500 px-6 sm:px-8 py-2 text-sm sm:text-base font-medium bg-black/20 backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl animate-glow-slow">
              Why Choose Us
            </div>
          </div>

          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent mb-10 md:mb-20 px-4">
            Your Success, Our Priority
          </h2>
        </div>

        {/* Mobile View (< 1024px) */}
        <div className="lg:hidden">
          <ScrollStackCards />
        </div>

        {/* Desktop View (≥ 1024px) */}
        <motion.div
          animate={{
            backgroundColor: backgroundColors[activeCard % backgroundColors.length],
          }}
          className="hidden lg:flex h-[50rem] overflow-y-auto justify-center relative space-x-10 rounded-md p-10 scrollbar-hide"
          ref={ref}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="relative flex items-start px-4">
            <div className="max-w-3xl">
              {content.map((item, index) => (
                <div 
                  key={item.title + index} 
                  className="my-32"
                  style={{ 
                    height: index === content.length - 1 ? 'calc(100vh - 20rem)' : 'auto' 
                  }}
                >
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-4xl font-bold text-slate-100"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-xl text-slate-300 max-w-xl mt-6"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
              <div className="h-40" />
            </div>
          </div>
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              "h-96 w-[28rem] rounded-xl bg-white sticky top-10 overflow-hidden",
              "bg-black border border-violet-500/20 shadow-lg shadow-violet-500/10"
            )}
          >
            {content[activeCard].content ?? null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}