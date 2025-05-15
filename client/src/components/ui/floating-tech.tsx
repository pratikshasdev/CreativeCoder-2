import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface FloatingTechProps {
  technologies: Technology[];
}

interface PositionedTech extends Technology {
  xPos: number;
  yPos: number;
  delay: number;
  duration: number;
}

export default function FloatingTech({ technologies }: FloatingTechProps) {
  const positionedTechs = useMemo(() => {
    const usedPositions: { x: number; y: number }[] = [];

    const isTooClose = (x: number, y: number) => {
      return usedPositions.some(
        (pos) => Math.abs(pos.x - x) < 15 && Math.abs(pos.y - y) < 15,
      );
    };

    return technologies.map((tech) => {
      let xPos = 0;
      let yPos = 0;
      let attempts = 0;

      // Try to find a non-overlapping position
      do {
        xPos = Math.floor(Math.random() * 80) + 10; // 10-90
        yPos = Math.floor(Math.random() * 80) + 10;
        attempts++;
      } while (isTooClose(xPos, yPos) && attempts < 20);

      usedPositions.push({ x: xPos, y: yPos });

      return {
        ...tech,
        xPos,
        yPos,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4,
      };
    });
  }, [technologies]);

  return (
    <div className="relative h-80 my-12 overflow-hidden">
      {positionedTechs.map((tech) => (
        <motion.div
          key={tech.name}
          className="absolute bg-white rounded-lg shadow-md p-3 flex items-center gap-2"
          style={{
            left: `${tech.xPos}%`,
            top: `${tech.yPos}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            delay: tech.delay,
            duration: 0.5,
            y: {
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
          <span className="font-medium text-sm text-gray-800">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
