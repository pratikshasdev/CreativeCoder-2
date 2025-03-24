const Footer = () => {
  return (
    <footer className="bg-[#2D3047] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#home" className="text-2xl font-bold font-poppins tracking-tighter mb-6 md:mb-0">
            <span className="text-primary">&lt;</span>
            Jane<span className="text-[#FF9F1C]">Doe</span>
            <span className="text-primary">/&gt;</span>
          </a>
          
          <div className="flex flex-wrap space-x-4 md:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-300 hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-primary transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors duration-300" 
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors duration-300" 
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors duration-300" 
              aria-label="Twitter"
            >
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors duration-300" 
              aria-label="Dribbble"
            >
              <i className="ri-dribbble-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
