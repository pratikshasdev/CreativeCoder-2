import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const categories = [
  { id: "all", name: "All" },
  { id: "mobile", name: "Mobile" },
  { id: "web", name: "Web" },
  { id: "ai", name: "AI & Data" }
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);

  const hasMultipleImages = project.images && project.images.length > 1;
  
  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
    scrollToImage(currentImageIndex + 1 === project.images.length ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
    scrollToImage(currentImageIndex - 1 < 0 ? project.images.length - 1 : currentImageIndex - 1);
  };

  const scrollToImage = (index) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * index;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    scrollToImage(index);
  };
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="project-card rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white"
    >
      <div className="relative overflow-hidden h-64">
        {/* Project image carousel */}
        <div className="w-full h-full relative">
          {project.images && project.images.length > 0 ? (
            <>
              <div 
                ref={carouselRef}
                className="w-full h-full overflow-x-auto scrollbar-hide flex snap-x snap-mandatory"
                onScroll={(e) => {
                  if (carouselRef.current) {
                    const scrollLeft = e.currentTarget.scrollLeft;
                    const itemWidth = e.currentTarget.offsetWidth;
                    const newIndex = Math.round(scrollLeft / itemWidth);
                    if (newIndex !== currentImageIndex) {
                      setCurrentImageIndex(newIndex);
                    }
                  }
                }}
              >
                {project.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="min-w-full h-full flex-shrink-0 snap-center">
                    <img
                      src={img}
                      alt={`${project.title} - image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Image navigation controls */}
              {hasMultipleImages && (
                <>
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 hover:bg-opacity-100"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 hover:bg-opacity-100"
                    aria-label="Next image"
                  >
                    →
                  </button>
                  
                  {/* Image navigation indicators */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {project.images.map((_, imgIndex) => (
                      <button 
                        key={imgIndex}
                        onClick={() => handleDotClick(imgIndex)}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === imgIndex 
                            ? 'bg-[var(--blue-primary)]' 
                            : 'bg-white bg-opacity-70'
                        }`}
                        aria-label={`Go to image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient flex items-center justify-center p-6">
              <span className="text-white text-2xl font-bold font-poppins text-center">
                {project.title}
              </span>
            </div>
          )}
        </div>
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
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium inline-flex items-center hover:underline"
          >
            View Project <i className="ri-arrow-right-line ml-1"></i>
          </a>
        )}
      </div>
    </motion.div>
  );
};

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
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/pratikshasdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline text-lg"
          >
            View All Projects on GitHub <i className="ri-arrow-right-line ml-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
