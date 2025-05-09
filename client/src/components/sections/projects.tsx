import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ui/project-card';
import { Project, ProjectCategory } from '@/types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'DQS Direct Mobile App',
      description: 'Led the development of a job-seeking app enabling users to swipe through job listings, upload resumes, and apply for positions, resulting in 50% increase in engagement.',
      imageUrl: 'https://res.cloudinary.com/dsthkuuxz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1746813349/Screenshot_2025-05-09_at_1.55.16_PM_wesrgh.png',
      images: [
        'https://res.cloudinary.com/dsthkuuxz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1746813349/Screenshot_2025-05-09_at_1.55.16_PM_wesrgh.png',
        'https://res.cloudinary.com/dsthkuuxz/image/upload/v1746813394/Screenshot_2025-05-09_at_1.55.33_PM_qbxlzj.png',
        'https://res.cloudinary.com/dsthkuuxz/image/upload/v1746813427/Screenshot_2025-05-09_at_1.56.58_PM_d0kkty.png'
      ],
      category: ['ui-ux', 'frontend'],
      technologies: ['React Native', 'Redux', 'TypeScript', 'NestJS', 'Azure'],
      completionLevel: 3,
      link: 'https://apps.apple.com/no/app/dqs-direct/id6446716583'
    },
    {
      id: '2',
      title: 'Collaborative Care Android App',
      description: 'Created an app revolutionizing behavioral and mental health care, featuring AES-256 encrypted messaging, WebSockets for real-time updates, and Firebase Cloud Messaging.',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576671414121-aa2d60f2d2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      category: ['ui-ux', 'frontend'],
      technologies: ['Flutter', 'Dart', 'Android', 'Java', 'Firebase', 'WebSockets'],
      completionLevel: 2,
      link: 'https://play.google.com/store/apps/details?id=com.ub.colab_care&hl=en_US'
    },
    {
      id: '3',
      title: 'AI Institute Web App',
      description: 'Led the design of a React.js frontend for The National AI Institute for Exceptional Education, improving accessibility by 40% for users with speech disabilities.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      category: ['frontend', 'fullstack'],
      technologies: ['React.js', 'Next.js', 'FastAPI', 'Python', 'Solr'],
      completionLevel: 3,
      link: '/project/3'
    }
  ]);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };
  
  return (
    <section id="projects" className="py-20 relative reveal">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my design and development skills.
          </p>
        </motion.div>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'ui-ux', 'frontend', 'fullstack'] as ProjectCategory[]).map((filter) => (
            <motion.button 
              key={filter}
              className={`px-6 py-2 rounded-full shadow-md filter-btn cursor-link ${
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilterChange(filter)}
            >
              {filter === 'all' ? 'All' : 
               filter === 'ui-ux' ? 'UI/UX Design' : 
               filter === 'frontend' ? 'Frontend' : 'Full Stack'}
            </motion.button>
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="/projects" 
            className="btn-hover-effect inline-flex items-center bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <i className='bx bx-right-arrow-alt ml-2'></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
