import { Technology } from '@/types';
import { motion } from 'framer-motion';

export default function Marquee({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="mt-20">
      <h3 className="text-xl font-bold text-center mb-8">Technologies I Work With</h3>
      <div className="marquee">
        <motion.div 
          className="marquee-content py-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center mx-8">
              <i className={`${tech.icon} text-4xl text-gray-700 mb-2`}></i>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
          
          {/* Duplicate for continuous animation */}
          {technologies.map((tech, index) => (
            <div key={`duplicate-${index}`} className="flex flex-col items-center mx-8">
              <i className={`${tech.icon} text-4xl text-gray-700 mb-2`}></i>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
