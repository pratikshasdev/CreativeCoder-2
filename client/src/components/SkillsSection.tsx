import { motion } from "framer-motion";
import { skillGroups, techStack } from "@/data/skills";
import FloatingTech from "./ui/floating-tech";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[var(--grey-light)]">
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
            <span className="absolute top-12 left-0 w-full h-1 bg-[var(--yellow-accent)] transform -translate-y-2"></span>
          </h2>
          <p className="text-[var(--grey-dark)] text-center max-w-2xl">
            Here's my technical toolkit - the skills and technologies I use to
            bring ideas to life.
          </p>
        </motion.div>

        {/* Floating Tech Skills */}
        <FloatingTech technologies={techStack} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-[var(--grey-medium)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h4 className="text-xl font-medium font-poppins mb-4 text-[var(--blue-secondary)] flex items-center">
                <i className={`${group.icon} text-primary mr-2`}></i>
                {group.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-black bg-opacity-5 text-[var(--grey-dark)] px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
