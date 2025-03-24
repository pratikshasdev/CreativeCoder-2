import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function Home() {
  // Add classes for CSS effects  
  useEffect(() => {
    // Add custom styles for cursor follower, progress bar, and other interactive elements
    const style = document.createElement('style');
    style.textContent = `
      /* Custom cursor */
      .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid #6C63FF;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        z-index: 9999;
        display: none;
      }
      
      @media (min-width: 768px) {
        .custom-cursor {
          display: block;
        }
      }
      
      .cursor-grow {
        transform: translate(-50%, -50%) scale(2.5);
        background: rgba(108, 99, 255, 0.1);
        border-color: #FF6584;
      }
      
      /* Progress bar */
      .progress-bar {
        width: 100%;
        height: 10px;
        background-color: #e0e0e0;
        border-radius: 5px;
        overflow: hidden;
      }
      
      .progress {
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(90deg, #6C63FF, #FF6584);
        transition: width 1.5s ease-in-out;
      }
      
      /* Scroll reveal animation */
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Project card hover effects */
      .project-card {
        transition: all 0.3s ease;
      }
      
      .project-card:hover {
        transform: translateY(-10px);
      }
      
      /* Dark mode toggle */
      .theme-toggle {
        position: relative;
        width: 50px;
        height: 26px;
        border-radius: 15px;
        background: #F9FAFB;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      
      .theme-toggle.dark {
        background: #1F2937;
      }
      
      .dark-mode {
        background-color: #121212;
        color: #E5E7EB;
      }
      
      .dark-mode .bg-white {
        background-color: #1F2937;
      }
      
      .dark-mode .border {
        border-color: #374151;
      }
      
      .dark-mode .text-gray-800 {
        color: #E5E7EB;
      }
      
      .dark-mode .text-gray-600 {
        color: #9CA3AF;
      }
      
      /* Button hover effect */
      .btn-hover-effect {
        position: relative;
        overflow: hidden;
        z-index: 1;
      }
      
      .btn-hover-effect::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.7s ease;
        z-index: -1;
      }
      
      .btn-hover-effect:hover::before {
        left: 100%;
      }
      
      /* Marquee animation */
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .marquee {
        display: flex;
        overflow: hidden;
        width: 100%;
      }
      
      .marquee-content {
        display: flex;
        min-width: 100%;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="font-inter text-gray-800 overflow-x-hidden">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
