import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { designSkills, devSkills, designTools, techStack } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF9F1C] transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Here's my technical toolkit - the skills and technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-6 flex items-center">
              <i className="ri-palette-line text-primary mr-2"></i> Design Skills
            </h3>
            
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <ProgressBar percentage={skill.percentage} />
                </div>
              ))}
            </div>
            
            <h4 className="text-xl font-medium font-poppins mt-10 mb-4">Design Tools</h4>
            <div className="flex flex-wrap gap-4">
              {designTools.map((tool) => (
                <div key={tool.name} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <img src={tool.icon} alt={tool.name} className="w-6 h-6 mr-2" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-6 flex items-center">
              <i className="ri-code-s-slash-line text-primary mr-2"></i> Development Skills
            </h3>
            
            <div className="space-y-6">
              {devSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <ProgressBar percentage={skill.percentage} />
                </div>
              ))}
            </div>
            
            <h4 className="text-xl font-medium font-poppins mt-10 mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
