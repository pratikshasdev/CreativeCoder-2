import { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ThemeToggle from '@/components/ui/theme-toggle';
import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Demo projects for the portfolio
  const demoProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Dashboard',
      description: 'A responsive admin dashboard for e-commerce platforms with analytics, inventory management, and order processing. The dashboard was designed with a focus on usability and clear data visualization, allowing store owners to track sales, manage inventory, and process orders efficiently.',
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: ['ui-ux', 'frontend'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Redux'],
      completionLevel: 1,
      link: 'https://example.com/ecommerce-dashboard'
    },
    {
      id: '2',
      title: 'Health Tracker App',
      description: 'A mobile app design for tracking health metrics, exercises, and nutrition with personalized insights. This project involved extensive user research to identify key features that would help users maintain healthy habits. The app includes activity tracking, meal planning, and progress visualization to keep users motivated.',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: ['ui-ux'],
      technologies: ['Figma', 'Prototyping', 'UI Design', 'User Research', 'Interaction Design'],
      completionLevel: 2,
      link: 'https://example.com/health-tracker'
    },
    {
      id: '3',
      title: 'Financial Advisory Platform',
      description: 'A comprehensive web application for financial advisors to manage clients, investments, and generate reports. The platform streamlines client management, automates investment tracking, and provides powerful reporting tools to help advisors serve their clients better.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: ['frontend', 'fullstack'],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'D3.js'],
      completionLevel: 3,
      link: 'https://example.com/financial-platform'
    }
  ];
  
  useEffect(() => {
    // Simulate API call to get project details
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProject = demoProjects.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">Project Not Found</h1>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button className="w-full">Back to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="font-inter text-gray-800 overflow-x-hidden">
      <ThemeToggle />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/#projects">
              <button className="flex items-center text-primary mb-8 hover:underline">
                <i className='bx bx-left-arrow-alt mr-2'></i> Back to Projects
              </button>
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mb-12 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The main challenge was to create a user-friendly interface that allows users to easily navigate through complex data and functionality. The goal was to simplify the experience while maintaining all the necessary features.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">My Approach</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I started with extensive user research to understand the needs and pain points. Then, I created wireframes and prototypes to test different navigation patterns and layouts. After several iterations based on user feedback, I developed the final solution using {project.technologies.join(', ')}.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-xl font-bold mb-6">Project Details</h2>
                
                <div className="mb-6">
                  <h3 className="text-gray-500 mb-2">Category</h3>
                  <p className="font-medium">{project.category.map(cat => 
                    cat === 'ui-ux' ? 'UI/UX Design' : 
                    cat === 'frontend' ? 'Frontend Development' :
                    'Full Stack Development'
                  ).join(', ')}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-gray-500 mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-white px-3 py-1 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-gray-500 mb-2">Completion Status</h3>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <span 
                        key={level}
                        className={`inline-block w-3 h-3 rounded-full ${
                          level <= project.completionLevel ? 'bg-primary' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {project.completionLevel === 1 ? 'In Progress' : 
                       project.completionLevel === 2 ? 'Beta' : 'Completed'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-hover-effect w-full inline-block text-center bg-primary text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all cursor-link"
                  >
                    Visit Project <i className='bx bx-link-external ml-2'></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
