import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const Internships = () => {
  const internshipData = [
    {
      id: 1,
      position: "Embedded System Intern",
      company: "Enthu Tech",
      location: "Coimbatore, TN",
      period: "Jun 2023",
      type: "On-site",
      description: "Developed foundational embedded systems skills by working with microcontrollers and real-time sensor data.Implemented C-based control logic for hardware interaction and actuator automation.Collaborated on projects involving real-world data acquisition and low-level device control.",
      achievements: [
        "Learned C programming for hardware-level control.",
        "Worked with microcontrollers for embedded applications.",
        "Interfaced various sensors for real-time data acquisition.",
        "Controlled actuators to automate physical processes."
      ],
      technologies: ["C", "Micro-controllers", "Embedded devices","Communication Protocols"],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      position: "Robotics & Automation Intern",
      company: "Robo Miracle",
      location: "Coimbatore, TN",
      period: "OCT 2023",
      type: "On-site",
      description: "Worked on integrating IoT with robotics to enable smart automation workflows. Gained hands-on experience with device networking, embedded OS, and system-level communication. Controlled robotic systems using microcontrollers and real-time sensor feedback.",
      achievements: [
        "Explored IoT integration in robotics for smart automation.",
        "Understood networking concepts for device communication.",
        "Studied operating systems used in embedded robotics.",
        "Worked with microcontrollers for controlling robotic systems"
      ],
      technologies: ["OS", "Networking", "Sensors & Actuators", "IOT", "Cloud"],
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      position: "Semi-conductor Devices",
      company: "ManFree Technologies",
      location: "Coimbatore, TN",
      period: "OCT 2023",
      type: "On-site",
      description: "Explored the role of microprocessors in electronics and embedded device design. Designed and simulated circuits using tools like Proteus and Arduino for semiconductor testing. Applied foundational electronics and IoT concepts to build hardware-driven prototypes.",
      achievements: [
        "Explored IoT integration in robotics for smart automation.",
        "Understood networking concepts for device communication.",
        "Studied operating systems used in embedded robotics.",
        "Worked with microcontrollers for controlling robotic systems"
      ],
      technologies: ["Electronics", "Proteus", "Arduino", "Micro-processors"],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Internship 
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical experience gained through internships at leading tech companies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {internshipData.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${internship.color}`}></div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {internship.position}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <FiBriefcase size={16} />
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {internship.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin size={16} />
                        <span>{internship.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        <span>{internship.period}</span>
                      </div>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                        {internship.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {internship.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-3">
                      <FiTrendingUp size={16} />
                      What I Worked On
                    </h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;