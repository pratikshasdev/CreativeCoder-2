import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for animations and effects
const style = document.createElement('style');
style.innerHTML = `
  .bg-gradient {
    background: linear-gradient(135deg, rgba(108, 99, 255, 0.8) 0%, rgba(46, 196, 182, 0.8) 100%);
  }
  
  .project-card {
    transition: all 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .cursor-dot {
    transition: transform 0.2s ease, opacity 0.2s ease;
    transform-origin: center center;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Progress bar animation */
  .progress-bar {
    position: relative;
    height: 8px;
    border-radius: 8px;
    background-color: rgba(108, 99, 255, 0.2);
    overflow: hidden;
  }
  
  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #6C63FF;
    animation: progress 1.5s ease-out forwards;
    border-radius: 8px;
  }
  
  @keyframes progress {
    0% { width: 0; }
    100% { width: var(--progress, 85%); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes slideUp {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes waving {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out;
  }

  .animate-slideUp {
    animation: slideUp 0.5s ease-out;
  }

  .animate-waving {
    animation: waving 1.5s ease-in-out infinite;
  }

  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }

  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  .font-mono {
    font-family: 'Space Mono', monospace;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
