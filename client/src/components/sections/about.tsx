import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative reveal">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="w-full md:w-2/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <svg 
                className="w-full h-auto rounded-2xl shadow-xl"
                viewBox="0 0 400 500" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#FF6584" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" rx="20" fill="white" />
                <circle cx="200" cy="150" r="100" fill="url(#profileGrad)" opacity="0.1" />
                <circle cx="200" cy="150" r="80" fill="#6C63FF" opacity="0.2" />
                <circle cx="200" cy="150" r="70" fill="#FF6584" opacity="0.1" />
                <path d="M160,280 C160,230 240,230 240,280 L240,350 C240,370 160,370 160,350 L160,280 Z" fill="#6C63FF" opacity="0.3" />
                <circle cx="200" cy="150" r="60" fill="#F4F4F4" />
                <circle cx="180" cy="140" r="10" fill="#333" />
                <circle cx="220" cy="140" r="10" fill="#333" />
                <path d="M170,180 Q200,210 230,180" stroke="#333" strokeWidth="4" fill="none" />
                <path d="M120,350 C120,270 280,270 280,350 L280,500 L120,500 L120,350 Z" fill="#6C63FF" opacity="0.2" />
              </svg>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-center">
                  <span className="block text-3xl font-bold text-primary">5+</span>
                  <span className="text-gray-600">Years Experience</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate UI/UX and Frontend Developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative design thinking to build products that people love to use.
            </p>
            
            <p className="text-gray-600 mb-8">
              Previously, I worked at <span className="text-primary font-medium">Tech Innovators Inc.</span> and <span className="text-secondary font-medium">Creative Digital Agency</span>, where I developed web applications and collaborated with cross-functional teams to deliver exceptional user experiences.
            </p>
            
            {/* Fun facts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-gray-50 p-4 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className='bx bx-coffee text-3xl text-primary mb-2'></i>
                <p className="font-medium">Coffee Enthusiast</p>
                <p className="text-sm text-gray-500">80% code, 20% caffeine</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-4 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className='bx bx-headphone text-3xl text-secondary mb-2'></i>
                <p className="font-medium">Music Lover</p>
                <p className="text-sm text-gray-500">Coding to beats since 2018</p>
              </motion.div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-github'></i>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-linkedin'></i>
              </motion.a>
              <motion.a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-dribbble'></i>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-twitter'></i>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
