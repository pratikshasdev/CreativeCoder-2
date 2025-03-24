import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    
    const mouseEnterInteractive = () => setCursorVariant("interactive");
    const mouseLeaveInteractive = () => setCursorVariant("default");

    interactiveElements.forEach(element => {
      element.addEventListener("mouseenter", mouseEnterInteractive);
      element.addEventListener("mouseleave", mouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnterInteractive);
        element.removeEventListener("mouseleave", mouseLeaveInteractive);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#6C63FF",
      scale: 1
    },
    interactive: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#FF9F1C",
      scale: 1.5
    }
  };

  // Only show on large screens
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <motion.div
      className="cursor-dot fixed w-8 h-8 bg-primary rounded-full opacity-75 pointer-events-none hidden lg:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorEffect;
