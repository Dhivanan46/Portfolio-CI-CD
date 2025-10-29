import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Electrical and Electronics Engineering",
      institution: "Sri Shakthi Institute",
      location: "Coimbatore, TN",
      period: "2022 - 2026",
      gpa: "8.34/10.0",
      description: "Specialized in Software Development and Embedded Systems, Comprehensive study in Computer Science fundamentals, algorithms, and software development methodologies.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Jai Saradha Matriculation Higher Secondary School",
      location: "Tiruppur, TN",
      period: "2021 - 2022",
      gpa: "7.53/10.0",
      description: "Comprehensive study in Computer Science fundamentals, algorithms, and software development methodologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      degree: "Senior Secondary Leaving Certificate",
      institution: "Jai Saradha Matriculation Higher Secondary School",
      location: "Tiruppur, TN",
      period: "2019 - 2020",
      gpa: "7.0/10.0",
      description: "Focused on STEM subjects with advanced placement courses in Mathematics and Computer Science.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <FiCalendar size={14} />
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <FiMapPin size={16} />
                      {edu.institution}
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {edu.location}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        GPA: {edu.gpa}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;