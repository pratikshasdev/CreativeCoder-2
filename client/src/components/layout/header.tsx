import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const scrollToSection = (sectionId: string) => {
    closeMenu();
    smoothScrollTo(sectionId);
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-40 transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'shadow-md h-[70px]' : 'h-auto'}`}>
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-poppins text-primary cursor-link">
          Jane<span className="text-secondary">.</span>Doe
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none cursor-link" 
          onClick={toggleMenu}
        >
          <i className='bx bx-menu text-3xl'></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="nav-link text-gray-600 hover:text-primary transition-colors cursor-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="nav-link text-gray-600 hover:text-primary transition-colors cursor-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="nav-link text-gray-600 hover:text-primary transition-colors cursor-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="nav-link text-gray-600 hover:text-primary transition-colors cursor-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
          <a 
            href="/resume.pdf" 
            className="nav-link btn-hover-effect bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        id="mobileMenu" 
        className={`md:hidden bg-white fixed inset-0 z-50 flex flex-col justify-center items-center space-y-8 text-2xl ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button 
          className="absolute top-4 right-6 text-3xl" 
          onClick={closeMenu}
        >
          <i className='bx bx-x'></i>
        </button>
        <a 
          href="#about" 
          className="mobile-nav-link text-gray-800 hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a 
          href="#skills" 
          className="mobile-nav-link text-gray-800 hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}
        >
          Skills
        </a>
        <a 
          href="#projects" 
          className="mobile-nav-link text-gray-800 hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className="mobile-nav-link text-gray-800 hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
        <a 
          href="/resume.pdf" 
          className="mobile-nav-link bg-primary text-white px-8 py-3 rounded-full"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </motion.div>
    </header>
  );
}
