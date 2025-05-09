import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden font-inter text-[#2D3047] bg-[#FAFAFF]"
    >
      <div className="absolute w-full h-full -z-10">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#2EC4B6] rounded-full opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#FF9F1C] rounded-full opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-primary font-medium mb-2">
            Hello there! <span className="inline-block animate-waving">👋</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 leading-tight">
            I'm <span className="text-primary">Pratiksha Shirsath</span>,<br />
            <span className="relative">
              Mobile and Web Application
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9F1C]"></span>
            </span>{" "}
            <span className="relative">
              Designer
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9F1C]"></span>
            </span>{" "}
            &{" "}
            <span className="relative">
              Developer
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9F1C]"></span>
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            I create beautiful, functional, and responsive digital experiences.
            Let's build something amazing together!
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              whileHover={{ y: -5 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              Contact Me
            </motion.a>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <a
              href="https://github.com/Pratiksha234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/pratiksha-shirsath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-2xl"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="https://res.cloudinary.com/dsthkuuxz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_blue,b_rgb:262c35/v1746806978/IMG_4053_fzn7xb.jpg"
              alt="Jane Doe profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover relative z-10 border-4 border-white shadow-lg"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-mono text-xs">Available for hire</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm mb-1">Scroll down</span>
          <i className="ri-arrow-down-line text-xl"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
