import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: "Smart Classic - Dubai Business Setup",
      description: "Dubai's best business setup company platform offering company formation services, freelance visa packages, and investor visa solutions with expert consultation.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "MongoDB", "WhatsApp Integration"],
      category: "fullstack",
      github: "https://github.com/talha195javed/smart-classic",
      live: "https://smartclassic.ae/",
      featured: true,
      icon: FaReact
    },
    {
      id: 2,
      title: "GoSmart AI - AI Sales Agents",
      description: "AI-powered platform that builds intelligent sales agents and smart business communication tools with advanced integrations for automated selling.",
      image: "/images/intro-3.jpg",
      technologies: ["React", "TypeScript", "AI/ML", "WebSocket"],
      category: "fullstack",
      github: "https://github.com/talha195javed/gosmart-ai",
      live: "https://gosmartai.com/",
      featured: true,
      icon: FaNodeJs
    },
    {
      id: 3,
      title: "MindSkiller - Mental Health Platform",
      description: "Enhanced mental health journey platform providing comprehensive wellness tools, therapy resources, and personalized mental health support services.",
      image: "/images/intro-4.webp",
      technologies: ["React", "Node.js", "PostgreSQL", "HIPAA Compliance"],
      category: "fullstack",
      github: "https://github.com/talha195javed/mindskiller",
      live: "https://www.mindskiller.com/",
      featured: true,
      icon: FaDatabase
    },
    {
      id: 4,
      title: "StableWire - P2P Currency Exchange",
      description: "Peer-to-peer currency exchange platform with live rates, multiple payment methods, verified agents, and non-custodial trading for fiat and stablecoins.",
      image: "/images/intro-5.jpg",
      technologies: ["React Native", "TypeScript", "Blockchain", "Secure APIs"],
      category: "fullstack",
      github: "https://github.com/talha195javed/stablewire",
      live: "https://stablewire.io/",
      featured: true,
      icon: FaMobile
    },
    {
      id: 5,
      title: "Royal Express - Logistics Platform",
      description: "Myanmar's pioneering express courier service with extensive delivery network, real-time tracking, and innovative logistics solutions for businesses.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "GPS Tracking", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/talha195javed/royal-express",
      live: "https://royalx.net/",
      featured: false,
      icon: FaReact
    },
    {
      id: 6,
      title: "Aletheia Integrative - Medical Platform",
      description: "Integrative medical practice platform for Dr. Jaime Dodge MD with patient management, appointment scheduling, and telemedicine capabilities.",
      image: "/images/intro-2.avif",
      technologies: ["React", "TypeScript", "Healthcare APIs", "HIPAA"],
      category: "fullstack",
      github: "https://github.com/talha195javed/aletheia",
      live: "https://aletheia.md/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 7,
      title: "Glass Assist UK - Windscreen Services",
      description: "24/7 windscreen replacement and car window repair service platform with nationwide coverage, instant quotes, and mobile technician dispatch.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Google Maps API", "Booking System"],
      category: "fullstack",
      github: "https://github.com/talha195javed/glass-assist",
      live: "https://glassassistuk.co.uk/",
      featured: false,
      icon: FaReact
    },
    {
      id: 8,
      title: "Team Hively - Customer Feedback Platform",
      description: "Real-time customer and employee feedback platform with satisfaction surveys, analytics dashboard, and actionable insights for business improvement.",
      image: "/images/intro-2.avif",
      technologies: ["React", "TypeScript", "Analytics", "Survey Engine"],
      category: "frontend",
      github: "https://github.com/talha195javed/team-hively",
      live: "https://teamhively.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 9,
      title: "Complily - AI Compliance Platform",
      description: "AI-powered compliance platform that analyzes and tracks marketing materials, ads, landing pages, and sales calls to ensure regulatory compliance.",
      image: "/images/intro-6.webp",
      technologies: ["React", "AI/ML", "Natural Language Processing", "Analytics"],
      category: "fullstack",
      github: "https://github.com/talha195javed/complily",
      live: "https://complily.com/",
      featured: true,
      icon: FaNodeJs
    },
    {
      id: 10,
      title: "Hybrid Ventures - Digital Agency",
      description: "Digital agency specializing in innovative web solutions, creative design, and cutting-edge technology implementations for modern businesses.",
      image: "/images/intro-7.webp",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/talha195javed/hybrid-ventures",
      live: "https://hybrid.ventures/",
      featured: false,
      icon: FaReact
    },
    {
      id: 11,
      title: "Kobac Dev - Development Platform",
      description: "Professional development platform showcasing innovative coding solutions, web applications, and software development services.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      github: "https://github.com/talha195javed/kobacdev",
      live: "https://kobacdev.org/",
      featured: false,
      icon: FaNodeJs
    },
    {
      id: 12,
      title: "Basmago - E-commerce Platform",
      description: "Modern e-commerce platform with advanced product management, secure payment processing, and seamless user shopping experience.",
      image: "/images/intro-2.avif",
      technologies: ["React", "TypeScript", "Node.js", "Payment Gateway"],
      category: "fullstack",
      github: "https://github.com/talha195javed/basmago",
      live: "https://basmago.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 13,
      title: "A Better Choice Care - Healthcare Services",
      description: "Healthcare services platform providing comprehensive care solutions, patient management, and medical service coordination.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Healthcare APIs", "Patient Management", "Secure Systems"],
      category: "frontend",
      github: "https://github.com/talha195javed/abetterchoicecare",
      live: "https://abetterchoicecare.com/",
      featured: false,
      icon: FaReact
    },
    {
      id: 14,
      title: "Moonlight BC - Business Consulting",
      description: "Professional business consulting platform offering strategic solutions, business analysis, and corporate development services.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Business Analytics", "CRM Integration", "Dashboard"],
      category: "frontend",
      github: "https://github.com/talha195javed/moonlightbc",
      live: "https://moonlightbc.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 15,
      title: "Smart Classic - Backend API System",
      description: "Robust backend API system for Dubai business setup platform with advanced data processing, user management, and integration services.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"],
      category: "backend",
      github: "https://github.com/talha195javed/smart-classic-backend",
      live: "https://api.smartclassic.ae/",
      featured: false,
      icon: FaNodeJs
    },
    {
      id: 16,
      title: "GoSmart AI - Backend Infrastructure",
      description: "Scalable backend infrastructure for AI sales agents platform with real-time data processing, machine learning integration, and API services.",
      image: "/images/intro-2.avif",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "WebSocket", "AI/ML"],
      category: "backend",
      github: "https://github.com/talha195javed/gosmart-ai-backend",
      live: "https://api.gosmartai.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 17,
      title: "MindSkiller - Healthcare Backend",
      description: "Secure healthcare backend system for mental health platform with HIPAA compliance, patient data management, and telemedicine services.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express", "PostgreSQL", "HIPAA Compliance", "Encryption"],
      category: "backend",
      github: "https://github.com/talha195javed/mindskiller-backend",
      live: "https://api.mindskiller.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 18,
      title: "StableWire - P2P Exchange Backend",
      description: "High-performance backend for peer-to-peer currency exchange with real-time rate processing, secure transactions, and blockchain integration.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express", "Blockchain", "WebSocket", "Security"],
      category: "backend",
      github: "https://github.com/talha195javed/stablewire-backend",
      live: "https://api.stablewire.io/",
      featured: false,
      icon: FaNodeJs
    },
    {
      id: 19,
      title: "Royal Express - Logistics Backend",
      description: "Comprehensive logistics backend system with GPS tracking, route optimization, fleet management, and real-time delivery monitoring.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "MongoDB", "GPS APIs", "Real-time Processing", "Analytics"],
      category: "backend",
      github: "https://github.com/talha195javed/royal-express-backend",
      live: "https://api.royalx.net/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 20,
      title: "Aletheia - Medical Backend System",
      description: "Advanced medical practice backend with patient management, appointment scheduling, telemedicine, and secure health data processing.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express", "PostgreSQL", "Healthcare APIs", "Security"],
      category: "backend",
      github: "https://github.com/talha195javed/aletheia-backend",
      live: "https://api.aletheia.md/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 21,
      title: "Glass Assist UK - Service Backend",
      description: "Backend system for windscreen services with booking management, technician dispatch, inventory tracking, and customer management.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express", "MySQL", "Google Maps API", "Booking System"],
      category: "backend",
      github: "https://github.com/talha195javed/glass-assist-backend",
      live: "https://api.glassassistuk.co.uk/",
      featured: false,
      icon: FaNodeJs
    },
    {
      id: 22,
      title: "Team Hively - Analytics Backend",
      description: "Real-time feedback analytics backend with survey processing, data visualization, reporting systems, and customer insights.",
      image: "/images/intro-2.avif",
      technologies: ["Node.js", "Express", "MongoDB", "Analytics Engine", "Data Processing"],
      category: "backend",
      github: "https://github.com/talha195javed/team-hively-backend",
      live: "https://api.teamhively.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 23,
      title: "Complily - AI Compliance Backend",
      description: "AI-powered compliance backend with text analysis, regulatory monitoring, automated reporting, and compliance tracking systems.",
      image: "/images/intro-2.avif",
      technologies: ["Python", "Django", "AI/ML", "NLP", "Compliance Engine"],
      category: "backend",
      github: "https://github.com/talha195javed/complily-backend",
      live: "https://api.complily.com/",
      featured: false,
      icon: FaNodeJs
    },
    {
      id: 24,
      title: "Smart Classic - Full Stack Business Platform",
      description: "Complete full-stack business setup platform for Dubai with frontend dashboard, backend APIs, database management, and integrated services.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Payment Integration"],
      category: "fullstack",
      github: "https://github.com/talha195javed/smart-classic-fullstack",
      live: "https://smartclassic.ae/",
      featured: true,
      icon: FaReact
    },
    {
      id: 25,
      title: "GoSmart AI - Full Stack AI Platform",
      description: "Complete AI-powered sales platform with frontend interface, backend AI services, real-time communication, and intelligent automation.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Python", "Django", "PostgreSQL", "WebSocket", "AI/ML", "OpenAI Integration"],
      category: "fullstack",
      github: "https://github.com/talha195javed/gosmart-ai-fullstack",
      live: "https://gosmartai.com/",
      featured: true,
      icon: FaNodeJs
    },
    {
      id: 26,
      title: "MindSkiller - Full Stack Mental Health Platform",
      description: "Complete mental health platform with frontend patient portal, backend healthcare system, HIPAA compliance, and telemedicine features.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "HIPAA", "Video Calling", "Secure Messaging"],
      category: "fullstack",
      github: "https://github.com/talha195javed/mindskiller-fullstack",
      live: "https://www.mindskiller.com/",
      featured: true,
      icon: FaDatabase
    },
    {
      id: 27,
      title: "StableWire - Full Stack P2P Exchange",
      description: "Complete peer-to-peer currency exchange platform with frontend trading interface, backend blockchain integration, and secure transaction processing.",
      image: "/images/intro-2.avif",
      technologies: ["React Native", "Node.js", "Express", "Blockchain", "WebSocket", "Security", "Real-time Rates"],
      category: "fullstack",
      github: "https://github.com/talha195javed/stablewire-fullstack",
      live: "https://stablewire.io/",
      featured: true,
      icon: FaMobile
    },
    {
      id: 28,
      title: "Royal Express - Full Stack Logistics Platform",
      description: "Complete logistics platform with frontend tracking dashboard, backend fleet management, GPS integration, and real-time delivery monitoring.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "MongoDB", "GPS APIs", "Real-time Tracking", "Analytics Dashboard"],
      category: "fullstack",
      github: "https://github.com/talha195javed/royal-express-fullstack",
      live: "https://royalx.net/",
      featured: false,
      icon: FaReact
    },
    {
      id: 29,
      title: "Aletheia - Full Stack Medical Platform",
      description: "Complete medical practice platform with frontend patient portal, backend management system, telemedicine, and secure health data processing.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Healthcare APIs", "Video Consultation", "Appointment System"],
      category: "fullstack",
      github: "https://github.com/talha195javed/aletheia-fullstack",
      live: "https://aletheia.md/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 30,
      title: "Glass Assist UK - Full Stack Service Platform",
      description: "Complete windscreen service platform with frontend booking system, backend dispatch management, technician tracking, and customer portal.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "MySQL", "Google Maps API", "Booking Engine", "Mobile Dispatch"],
      category: "fullstack",
      github: "https://github.com/talha195javed/glass-assist-fullstack",
      live: "https://glassassistuk.co.uk/",
      featured: false,
      icon: FaReact
    },
    {
      id: 31,
      title: "Team Hively - Full Stack Feedback Platform",
      description: "Complete customer feedback platform with frontend survey interface, backend analytics engine, reporting dashboard, and insights generation.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Analytics Engine", "Data Visualization", "Survey System"],
      category: "fullstack",
      github: "https://github.com/talha195javed/team-hively-fullstack",
      live: "https://teamhively.com/",
      featured: false,
      icon: FaDatabase
    },
    {
      id: 32,
      title: "Complily - Full Stack AI Compliance Platform",
      description: "Complete AI compliance platform with frontend dashboard, backend AI processing, regulatory monitoring, and automated compliance reporting.",
      image: "/images/intro-2.avif",
      technologies: ["React", "Python", "Django", "AI/ML", "NLP", "Compliance Engine", "Reporting Dashboard"],
      category: "fullstack",
      github: "https://github.com/talha195javed/complily-fullstack",
      live: "https://complily.com/",
      featured: true,
      icon: FaNodeJs
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my comprehensive portfolio of 32+ projects showcasing expertise across full-stack development, 
              AI integration, and cutting-edge web technologies
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="font-medium">32+ Projects Delivered</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2 text-blue-400">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span className="font-medium">Multiple Industries</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <project.icon className="text-6xl text-white opacity-50" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Live Demo Link */}
                    <div className="flex gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/talha195javed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
