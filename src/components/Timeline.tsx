import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.8"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={ref} className="relative">
        {/* Main timeline line */}
        <div
        style={{ height: height + "px" }}
        className="absolute left-5 md:left-5 top-0 w-[2px] bg-violet-500/10"
      />

      <div
        style={{ height: height + "px" }}
        className="absolute left-5 md:left-5 top-0 w-[2px] overflow-hidden"
      >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-violet-600 via-violet-500 to-transparent"
          />
        </div>

        <div className="relative space-y-12 md:space-y-24">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-16 md:pl-24 pb-10 md:pb-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center"
                >
                  {/* Inner dot */}
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                  
                  {/* Pulsing ring effect */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-violet-500/30"
                  />
                </motion.div>
              </div>

              {/* Content */}
              {/* Content */}
              <div className="relative">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-6"
                >
                  {item.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="text-gray-400 relative z-10"
                >
                  {item.content}
                </motion.div>
              </div>
              {/* Connector line for mobile */}
              {index < data.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-[2px] md:hidden">
                  <div className="h-full bg-violet-500/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};