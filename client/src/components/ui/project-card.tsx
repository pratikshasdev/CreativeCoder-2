import { Project } from '@/types';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useState } from 'react';

export default function ProjectCard({ project }: { project: Project }) {
  const completionDots = [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Create images array, falling back to imageUrl if images array is empty
  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.imageUrl];
  
  for (let i = 0; i < 3; i++) {
    completionDots.push(
      <span 
        key={i}
        className={`inline-block w-3 h-3 rounded-full ${
          i < project.completionLevel ? 'bg-primary' : 'bg-gray-200'
        }`}
      />
    );
  }
  
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <motion.div 
      className="project-card bg-white rounded-xl overflow-hidden shadow-lg cursor-link"
      data-category={project.category.join(' ')}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/project/${project.id}`}>
        <div className="h-56 overflow-hidden relative">
          <motion.img 
            src={projectImages[currentImageIndex]} 
            alt={`${project.title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Image navigation controls - only show if there are multiple images */}
          {projectImages.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex gap-1">
              {completionDots}
            </div>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center text-primary font-medium">
            View Project <i className='bx bx-right-arrow-alt ml-2'></i>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
