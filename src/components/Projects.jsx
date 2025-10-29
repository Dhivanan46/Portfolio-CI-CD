import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    
    {
      id: 1,
      title: "Job Portal Web Application",
      description: "Designed a MERN stack-based job portal website with features like job listing, user authentication, and application tracking.",
      image: "https://ucarecdn.com/54ba8b6e-09da-433b-aadd-65c4f053c4ce/job.png",
      technologies: ["React", "MongoDB Atlas", "Express", "node"],
      liveUrl: "https://jobify.live",
      codeUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Power Track | Java Console",
      description: "Designed a Home Energy Tracker that monitors and analyzes real-time power consumption of household appliances, generates summary reports, and provides suggestions to minimize energy usage.",
      image: "https://ucarecdn.com/2dbb2c0a-2e92-45eb-8f3a-a1cd082ffc08/power.png",
      technologies: ["Java", "C Programming", "MySQL", "API","IOT"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/Dhivanan46/Java-Console-Power-Track",
      featured: true
    },
    {
      id: 3,
      title: "Glow Guard | Smart Street Lamp",
      description: "Designed a IOT-based system for street lamp fault detection and location tracking.",
      image: "https://ucarecdn.com/4d86ec3d-d2c3-4488-b1d5-139e0f80dde3/street.jpg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/Dhivanan46/STREET-LAMP-FAULT-DETECTION-AND-LOCATION-TRACKING-",
      featured: false
    },
    {
      id: 4,
      title: "Recycle of DVD player into CNC plotter",
      description: "Designed a low-cost CNC plotter for precise 2D drawing and engraving tasks using stepper motors and Arduino control. Integrated G-code processing with motor drivers for accurate axis movement and real-time execution.",
      image: "https://ucarecdn.com/1e9a5278-b895-48e9-ae91-d540a9eb0908/cnc.png",
      technologies: ["Arduino", "G code", "C programming", "Motor driver software"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/Dhivanan46/Recycle-of-DVD-player-into-CNC-Plotter",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <FiStar size={14} />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
  {project.id === 1 && (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
    >
      <FiExternalLink size={16} />
      Live Demo
    </motion.a>
  )}

  <motion.a
    href={project.codeUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
    }`}
  >
    <FiGithub size={16} />
    View Code
  </motion.a>
</div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;