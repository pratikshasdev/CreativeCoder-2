import React from 'react';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
}

interface FloatingTechProps {
  technologies: Technology[];
}

export default function FloatingTech({ technologies }: FloatingTechProps) {
  return (
    <div className="relative h-80 my-12 overflow-hidden">
      {technologies.map((tech, index) => {
        // Calculate random positions and delays for each tech icon
        const xPos = Math.floor(Math.random() * 80) + 10; // 10-90% of container width
        const yPos = Math.floor(Math.random() * 80) + 10; // 10-90% of container height
        const delay = Math.random() * 2; // 0-2s delay
        const duration = 3 + Math.random() * 4; // 3-7s duration
        
        return (
          <motion.div
            key={tech.name}
            className="absolute bg-white rounded-lg shadow-md p-3 flex items-center gap-2"
            style={{
              left: `${xPos}%`,
              top: `${yPos}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              delay: delay,
              duration: 0.5,
              y: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span className="font-medium text-sm text-gray-800">{tech.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}