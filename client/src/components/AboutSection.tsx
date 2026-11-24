import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            About Me
            <span className="absolute top-12 left-0 w-full h-1 bg-[#FF9F1C] transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Get to know me a little better: who I am, what I build, and how I
            work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-full absolute top-4 left-4 border-2 border-primary rounded-lg -z-10"></div>
            <img
              src="https://res.cloudinary.com/dsthkuuxz/image/upload/v1746811307/ChatGPT_Image_May_9_2025_01_17_50_PM_cdgib2.png"
              alt="Pratiksha Shirsath at work"
              className="rounded-lg shadow-lg w-full object-cover h-96 md:h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Mobile App Developer: iOS, Android and React Native
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a mobile app developer with 4+ years of experience designing,
              building, testing and shipping iOS, Android and React Native apps
              across automotive, healthcare and consumer products.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today I'm a Senior Software Engineer at Sumitomo Corporate
              Automotive Engineering (SCAE) in Novi, MI, building Python test
              automation for Yamaha embedded displays. Before that I built
              Kotlin and Jetpack Compose infotainment apps for North American
              Subaru, and earlier shipped 6+ App Store and Google Play releases
              with Swift, SwiftUI and React Native.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I care about modular architecture, clean state management,
              test-driven development and CI/CD.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="flex items-center mb-2">
                  <i className="ri-user-3-line text-primary mr-2"></i>
                  <span className="font-medium">Experience:</span>
                </div>
                <p className="text-gray-600 ml-6">4+ Years</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <i className="ri-mail-line text-primary mr-2"></i>
                  <span className="font-medium">Email:</span>
                </div>
                <p className="text-gray-600 ml-6">pratiksha.sdev@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <i className="ri-map-pin-line text-primary mr-2"></i>
                  <span className="font-medium">Location:</span>
                </div>
                <p className="text-gray-600 ml-6">Canton, MI</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <i className="ri-briefcase-line text-primary mr-2"></i>
                  <span className="font-medium">Fulltime/Contract:</span>
                </div>
                <p className="text-gray-600 ml-6">Available</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                Kotlin
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                Jetpack Compose
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                Swift
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                SwiftUI
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                React Native
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                Flutter
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                Android
              </span>
              <span className="bg-black bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm">
                iOS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
