import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Skill } from '@/types';

export default function SkillProgress({ skill }: { skill: Skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const progressControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      progressControls.start({
        width: `${skill.percentage}%`,
        transition: { duration: 1.5, ease: "easeOut" }
      });
    }
  }, [isInView, progressControls, skill.percentage]);
  
  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div 
          className="progress"
          initial={{ width: 0 }}
          animate={progressControls}
        />
      </div>
    </div>
  );
}
