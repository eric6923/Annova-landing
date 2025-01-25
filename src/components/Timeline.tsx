import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative">
      {/* Vertical line for desktop */}
      <div className="absolute left-8 top-4 bottom-4 w-0.5 hidden md:block">
        <div className="h-full bg-violet-500/10" />
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-violet-500 to-transparent blur-[1px]"
        />
      </div>

      <div className="space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-24"
          >
            {/* Mobile timeline line */}
            {index < data.length - 1 && (
              <div className="absolute left-[22px] top-14 bottom-0 w-0.5 md:hidden">
                <div className="h-full bg-violet-500/10" />
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{ y: '100%' }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-1 h-12 bg-gradient-to-b from-transparent via-violet-500 to-transparent blur-[1px]"
                />
              </div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-11 h-11 rounded-full bg-violet-500/10 flex items-center justify-center relative"
              >
                {/* Pulsing ring effect */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full border-2 border-violet-500/50"
                />
                <div className="w-3 h-3 rounded-full bg-violet-500" />
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <div className="text-gray-400">{item.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};