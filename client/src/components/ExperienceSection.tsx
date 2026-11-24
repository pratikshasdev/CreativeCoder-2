import { motion } from "framer-motion";
import { experience, certifications } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            Experience
            <span className="absolute top-12 left-0 w-full h-1 bg-[#FF9F1C] transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Where I've built and shipped software, from automotive and
            healthcare to consumer mobile apps.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-primary opacity-20 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.dates}`}
                className="relative md:pl-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary hidden md:block"></div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-poppins">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 md:text-right shrink-0">
                      <p className="font-mono">{job.dates}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed">
                        {point.label && (
                          <span className="font-medium text-[#2D3047]">
                            {point.label}:{" "}
                          </span>
                        )}
                        {point.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold font-poppins mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <i className="ri-award-line text-2xl text-primary mr-3"></i>
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-500">
                    {cert.issuer} | {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
