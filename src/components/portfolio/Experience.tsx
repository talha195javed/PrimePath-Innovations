import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Software Developer',
      company: 'Smart Global AI Solutions',
      location: 'Dubai, UAE',
      period: 'February 2025 - Present',
      description: [
        'Designing and developing scalable web applications using React.js, Laravel, and modern JavaScript frameworks',
        'Building and maintaining RESTful APIs and GraphQL services for optimal performance',
        'Optimizing backend systems for improved efficiency and scalability',
        'Creating cross-platform mobile applications using React Native',
        'Integrating third-party APIs for enhanced functionality and data synchronization',
        'Implementing AI-powered features including intelligent search, recommendation systems, and workflow automation',
        'Developing chatbot solutions and AI/NLP API integrations (OpenAI) for text generation, summarization, and smart suggestions',
        'Designing backend logic for AI-driven decision-making systems',
        'Providing AI-based analytics and reporting for business intelligence',
        'Deploying and managing applications using Docker and CI/CD pipelines',
        'Maintaining code quality following SOLID principles and PSR standards',
        'Collaborating effectively in agile development teams'
      ],
      technologies: ['React.js', 'Laravel', 'Node.js', 'React Native', 'GraphQL', 'REST APIs', 'AI/ML', 'OpenAI', 'Docker', 'CI/CD', 'MySQL', 'MongoDB']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: '3Amigos',
      location: 'Lahore, Pakistan',
      period: 'April 2021 - January 2025',
      description: [
        'Developed scalable web applications using Laravel, Symfony, ReactJS, and VueJS, reducing page load times by 30%',
        'Ensured code quality through SOLID principles and PSR coding standards, reducing debugging time by 20%',
        'Designed and managed MySQL databases with optimized ERDs, enhancing query performance by 25%',
        'Integrated APIs for data synchronization, improving efficiency by 40%',
        'Deployed applications using Jenkins, Docker, and CI/CD pipelines, reducing deployment time by 50%',
        'Optimized cross-browser compatibility achieving 98% responsiveness across all devices',
        'Implemented modern frontend frameworks for enhanced user experience',
        'Maintained version control and collaborative development workflows'
      ],
      technologies: ['Laravel', 'Symfony', 'ReactJS', 'VueJS', 'MySQL', 'Jenkins', 'Docker', 'CI/CD', 'REST APIs', 'SOLID Principles', 'PSR Standards']
    },
    {
      id: 3,
      type: 'work',
      title: 'PHP Developer',
      company: 'Inertia',
      location: 'Lahore, Pakistan',
      period: 'February 2020 - April 2021',
      description: [
        'Developed and deployed over 10 dynamic web applications using Core PHP, HTML, CSS, jQuery, and Bootstrap',
        'Enhanced system efficiency by 25% through optimized code architecture and implementation',
        'Converted over 50 PSD designs into fully responsive, pixel-perfect websites',
        'Increased user engagement by 30% and reduced bounce rates through improved UX/UI',
        'Implemented new features and guided website architecture design decisions',
        'Wrote clean, testable, and efficient code following best practices, reducing error rates by 15%',
        'Streamlined development workflows and optimized debugging processes'
      ],
      technologies: ['PHP', 'Core PHP', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'MySQL', 'AJAX', 'REST APIs']
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University',
      location: 'Pakistan',
      period: '2016 - 2020',
      description: [
        'Comprehensive studies in Computer Science with specialization in Software Engineering',
        'Advanced coursework in Web Development, Database Systems, and Software Architecture',
        'Practical experience through multiple full-stack development projects using PHP, JavaScript, and modern frameworks',
        'Strong foundation in algorithms, data structures, and system design principles',
        'Research and implementation of scalable web applications and database optimization techniques'
      ],
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Outstanding Performance in Software Engineering Courses',
        'Lead Developer in University Web Development Projects',
        'Technical Workshop Presenter on Modern Web Technologies'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Advanced PHP & Laravel Development',
      issuer: 'Professional Training Institute',
      date: '2020',
      credential: 'PHP-LARAVEL-ADV-2020',
      description: 'Advanced certification in Laravel framework, RESTful APIs, and enterprise PHP development'
    },
    {
      id: 2,
      name: 'Modern JavaScript & React Development',
      issuer: 'Tech Academy',
      date: '2021',
      credential: 'REACT-DEV-2021',
      description: 'Comprehensive training in React.js, ES6+, Redux, and modern JavaScript development practices'
    },
    {
      id: 3,
      name: 'AI & Machine Learning Integration',
      issuer: 'AI Innovation Center',
      date: '2022',
      credential: 'AI-ML-INT-2022',
      description: 'Specialized certification in AI API integration, chatbot development, and machine learning implementation'
    },
    {
      id: 4,
      name: 'Project Management Professional (PMP) Fundamentals',
      issuer: 'Project Management Institute',
      date: '2021',
      credential: 'PMP-FUND-2021',
      description: 'Foundational project management certification covering agile methodologies, budget management, and team leadership'
    },
    {
      id: 5,
      name: 'Cloud Architecture & DevOps',
      issuer: 'Cloud Solutions Institute',
      date: '2022',
      credential: 'CLOUD-DEVOPS-2022',
      description: 'Training in cloud deployment, CI/CD pipelines, Docker, and infrastructure as code'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              My professional journey and educational background in software development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FaBriefcase className="text-purple-400" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-8 pb-8 border-l-2 border-slate-700 last:border-l-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                    
                    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 sm:mt-0">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-xs" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-xs" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-purple-400" />
                  Education
                </h3>
                
                {education.map((edu) => (
                  <div key={edu.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                    <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-xs" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-1 mb-3">
                      {edu.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded text-xs"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Professional Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-purple-500 transition-colors">
                      <h5 className="text-white font-medium mb-1">{cert.name}</h5>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-300 text-xs mb-2">{cert.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-xs">{cert.date}</span>
                        <span className="text-purple-400 text-xs font-mono">{cert.credential}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
