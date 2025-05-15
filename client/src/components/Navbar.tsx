import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import useScrollPosition from "@/hooks/useScrollPosition";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Pratiksha_SM.pdf";
    link.download = "Pratiksha-Shirsath-Resume.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 100 ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl font-bold font-poppins tracking-tighter"
        >
          <span className="text-primary">&lt;</span>
          Pratiksha<span className="text-[#FF9F1C]">Shirsath</span>
          <span className="text-primary">/&gt;</span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Contact
          </a>
          <button
            onClick={handleDownloadCV}
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center"
          >
            <span>Resume</span>
            <i className="ri-download-line ml-2"></i>
          </button>
        </div>

        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <i
            className={`${mobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}
          ></i>
        </button>
      </div>

      {/* Mobile navigation */}
      <motion.div
        className={`md:hidden bg-white py-4 px-4 shadow-lg absolute w-full ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#home"
            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Contact
          </a>
          <button
            onClick={handleDownloadCV}
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center w-max"
          >
            <span>Resume</span>
            <i className="ri-download-line ml-2"></i>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
