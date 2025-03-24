import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProjectDetail from "@/pages/project-detail";
import CursorFollower from "@/components/ui/cursor-follower";
import { useEffect, useState } from "react";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CursorFollower />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
