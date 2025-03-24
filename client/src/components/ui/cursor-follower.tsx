import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    // Add event listeners for cursor interactions
    const cursorLinks = document.querySelectorAll('.cursor-link');
    
    const mouseEnterHandler = () => setCursorVariant("hover");
    const mouseLeaveHandler = () => setCursorVariant("default");
    
    cursorLinks.forEach(link => {
      link.addEventListener("mouseenter", mouseEnterHandler);
      link.addEventListener("mouseleave", mouseLeaveHandler);
    });
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener('resize', checkDevice);
      
      cursorLinks.forEach(link => {
        link.removeEventListener("mouseenter", mouseEnterHandler);
        link.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "rgba(108, 99, 255, 0)",
      border: "2px solid #6C63FF",
      scale: 1
    },
    hover: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: "rgba(108, 99, 255, 0.1)",
      border: "2px solid #FF6584",
      scale: 1
    }
  };
  
  if (isMobile) return null;
  
  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
