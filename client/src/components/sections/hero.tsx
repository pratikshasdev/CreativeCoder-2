import { motion } from 'framer-motion';

// Define the smoothScrollTo function locally since it's missing from utils
const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  }
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="w-full lg:w-1/2 mb-10 lg:mb-0 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--yellow-accent)] font-mono text-lg mb-4">Hello there, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight text-[var(--grey-dark)]">
            Pratiksha Shirsath
            <motion.span 
              className="block text-[var(--blue-primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mobile Application Developer
            </motion.span>
          </h1>
          <p className="text-[var(--grey-dark)] text-lg mb-8 max-w-lg">
            Masters in Computer Science with 3+ years of experience in Mobile Application Development, specializing in React Native, Flutter, and cross-platform solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects" 
              className="btn-hover-effect bg-[var(--blue-primary)] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('projects');
              }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-hover-effect border-2 border-[var(--yellow-accent)] text-[var(--yellow-accent)] px-8 py-3 rounded-full hover:bg-[var(--yellow-accent)] hover:text-white transition-all cursor-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('contact');
              }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <svg 
              className="w-full h-full rounded-full border-4 border-[var(--blue-primary)] shadow-2xl"
              viewBox="0 0 400 400" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--blue-primary)" />
                  <stop offset="100%" stopColor="var(--yellow-accent)" />
                </linearGradient>
                <clipPath id="circleClip">
                  <circle cx="200" cy="200" r="200" />
                </clipPath>
              </defs>
              <circle cx="200" cy="200" r="200" fill="url(#grad1)" opacity="0.2" />
              <circle cx="200" cy="200" r="195" fill="white" />
              <g clipPath="url(#circleClip)">
                <path d="M0,400 L400,400 L400,200 C400,200 300,350 200,300 C100,250 0,300 0,200 L0,400 Z" fill="url(#grad1)" />
                <circle cx="200" cy="150" r="50" fill="url(#grad1)" opacity="0.5" />
                <circle cx="150" cy="220" r="10" fill="var(--blue-primary)" />
                <circle cx="250" cy="220" r="10" fill="var(--blue-primary)" />
                <path d="M150,280 Q200,320 250,280" stroke="var(--yellow-accent)" strokeWidth="8" fill="none" />
              </g>
            </svg>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <i className='bx bxl-react text-3xl text-[var(--blue-primary)]'></i>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -left-8 bg-white rounded-xl shadow-lg p-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <i className='bx bxl-flutter text-3xl text-[var(--blue-secondary)]'></i>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 right-10 bg-white rounded-xl shadow-lg p-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            >
              <i className='bx bxl-android text-3xl text-[var(--yellow-accent)]'></i>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-32 left-10 w-48 h-48 bg-[var(--blue-primary)] bg-opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--yellow-accent)] bg-opacity-10 rounded-full blur-3xl"></div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-link"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => smoothScrollTo('about')}
      >
        <p className="text-sm text-[var(--grey-dark)] mb-2">Scroll Down</p>
        <i className='bx bx-chevron-down text-2xl text-[var(--blue-primary)]'></i>
      </motion.div>
    </section>
  );
}
