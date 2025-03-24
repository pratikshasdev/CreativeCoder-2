import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };
  
  return (
    <div 
      className={`fixed top-8 right-8 z-50 theme-toggle cursor-link ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleTheme}
    >
      <motion.div 
        className="w-full h-full"
        initial={false}
        animate={{ backgroundColor: isDarkMode ? '#1F2937' : '#F9FAFB' }}
      >
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-primary"
          initial={false}
          animate={{ 
            x: isDarkMode ? 24 : 3,
            y: 3,
            backgroundColor: isDarkMode ? '#FF6584' : '#6C63FF'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </div>
  );
}
