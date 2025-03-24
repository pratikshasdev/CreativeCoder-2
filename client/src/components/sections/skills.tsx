import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillProgress from '@/components/ui/skill-progress';
import Marquee from '@/components/ui/marquee';
import { Skill, Technology } from '@/types';

export default function Skills() {
  const [frontendSkills] = useState<Skill[]>([
    { name: 'React.js', percentage: 90 },
    { name: 'JavaScript/TypeScript', percentage: 85 },
    { name: 'HTML/CSS/SASS', percentage: 95 }
  ]);
  
  const [designSkills] = useState<Skill[]>([
    { name: 'Figma', percentage: 95 },
    { name: 'Wireframing & Prototyping', percentage: 90 },
    { name: 'User Research', percentage: 85 }
  ]);
  
  const [otherSkills] = useState<Skill[]>([
    { name: 'Git/GitHub', percentage: 90 },
    { name: 'Responsive Design', percentage: 95 },
    { name: 'Performance Optimization', percentage: 85 }
  ]);
  
  const [technologies] = useState<Technology[]>([
    { name: 'React', icon: 'bx bxl-react' },
    { name: 'TypeScript', icon: 'bx bxl-typescript' },
    { name: 'JavaScript', icon: 'bx bxl-javascript' },
    { name: 'HTML5', icon: 'bx bxl-html5' },
    { name: 'CSS3', icon: 'bx bxl-css3' },
    { name: 'Sass', icon: 'bx bxl-sass' },
    { name: 'Tailwind', icon: 'bx bxl-tailwind-css' },
    { name: 'Git', icon: 'bx bxl-git' },
    { name: 'Figma', icon: 'bx bxl-figma' }
  ]);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 relative reveal">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Skillset</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from design to frontend implementation.
          </p>
        </motion.div>
        
        {/* Skills categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <i className='bx bx-code-alt text-2xl text-primary'></i>
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillProgress key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          {/* UI/UX */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary bg-opacity-10 flex items-center justify-center mr-4">
                <i className='bx bx-palette text-2xl text-secondary'></i>
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
            </div>
            
            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <SkillProgress key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Others */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center mr-4">
                <i className='bx bx-wrench text-2xl text-accent'></i>
              </div>
              <h3 className="text-xl font-bold">Tools & Others</h3>
            </div>
            
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <SkillProgress key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tech stack marquee */}
        <Marquee technologies={technologies} />
      </div>
    </section>
  );
}
