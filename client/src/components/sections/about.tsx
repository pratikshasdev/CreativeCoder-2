import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative reveal bg-white">
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
                    <stop offset="0%" stopColor="var(--blue-primary)" />
                    <stop offset="100%" stopColor="var(--yellow-accent)" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" rx="20" fill="white" />
                <circle cx="200" cy="150" r="100" fill="url(#profileGrad)" opacity="0.1" />
                <circle cx="200" cy="150" r="80" fill="var(--blue-primary)" opacity="0.2" />
                <circle cx="200" cy="150" r="70" fill="var(--yellow-accent)" opacity="0.1" />
                <path d="M160,280 C160,230 240,230 240,280 L240,350 C240,370 160,370 160,350 L160,280 Z" fill="var(--blue-primary)" opacity="0.3" />
                <circle cx="200" cy="150" r="60" fill="#F4F4F4" />
                <circle cx="180" cy="140" r="10" fill="#333" />
                <circle cx="220" cy="140" r="10" fill="#333" />
                <path d="M170,180 Q200,210 230,180" stroke="#333" strokeWidth="4" fill="none" />
                <path d="M120,350 C120,270 280,270 280,350 L280,500 L120,500 L120,350 Z" fill="var(--blue-primary)" opacity="0.2" />
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
                  <span className="block text-3xl font-bold text-[var(--blue-primary)]">3+</span>
                  <span className="text-[var(--grey-dark)]">Years Experience</span>
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
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-[var(--grey-dark)]">About Me</h2>
            <p className="text-[var(--grey-dark)] mb-6">
              I'm Pratiksha Shirsath, a Mobile Application Developer with a Master's in Computer Science and 3+ years of experience creating high-performance, user-friendly mobile applications. I specialize in React Native, Flutter, and cross-platform development to build solutions that users love.
            </p>
            
            <p className="text-[var(--grey-dark)] mb-8">
              Currently working at <span className="text-[var(--blue-primary)] font-medium">Detroit Quality Staffing and Solutions</span> in Detroit, MI, where I led the development of the DQS Direct iOS and Android mobile app. Previously, I worked as an Android Developer at <span className="text-[var(--yellow-accent)] font-medium">The Research Foundation SUNY</span> in Buffalo, NY.
            </p>
            
            {/* Fun facts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-[var(--grey-light)] p-4 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className='bx bx-code-alt text-3xl text-[var(--blue-primary)] mb-2'></i>
                <p className="font-medium">Mobile Development</p>
                <p className="text-sm text-[var(--grey-dark)]">React Native & Flutter Expert</p>
              </motion.div>
              <motion.div 
                className="bg-[var(--grey-light)] p-4 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className='bx bx-bulb text-3xl text-[var(--yellow-accent)] mb-2'></i>
                <p className="font-medium">Problem Solver</p>
                <p className="text-sm text-[var(--grey-dark)]">Optimization & UX Specialist</p>
              </motion.div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/Pratiksha234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--grey-light)] flex items-center justify-center hover:bg-[var(--blue-primary)] hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-github'></i>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/pratiksha-shirsath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--grey-light)] flex items-center justify-center hover:bg-[var(--blue-primary)] hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-linkedin'></i>
              </motion.a>
              <motion.a 
                href="mailto:pratiksha.sdev@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--grey-light)] flex items-center justify-center hover:bg-[var(--blue-primary)] hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxs-envelope'></i>
              </motion.a>
              <motion.a 
                href="https://shirsath.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--grey-light)] flex items-center justify-center hover:bg-[var(--blue-primary)] hover:text-white transition-colors cursor-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bx-globe'></i>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
