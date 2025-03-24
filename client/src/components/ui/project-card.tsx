import { Project } from '@/types';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function ProjectCard({ project }: { project: Project }) {
  const completionDots = [];
  
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
  
  return (
    <motion.div 
      className="project-card bg-white rounded-xl overflow-hidden shadow-lg cursor-link"
      data-category={project.category.join(' ')}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/project/${project.id}`}>
        <div className="h-56 overflow-hidden">
          <motion.img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
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
