import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const categories = [
  { id: "all", name: "All" },
  { id: "ux-design", name: "UX Design" },
  { id: "ui-design", name: "UI Design" },
  { id: "development", name: "Development" }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF9F1C] transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Check out some of my recent work. Each project represents unique challenges and solutions.
          </p>
        </motion.div>
        
        <div className="mb-8 flex justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-primary">
                    {project.categoryLabel}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium inline-flex items-center hover:underline"
                  >
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline text-lg"
            onClick={(e) => e.preventDefault()}
          >
            View All Projects <i className="ri-arrow-right-line ml-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
