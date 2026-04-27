import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaBrain, FaShieldAlt, FaRocket, FaChartLine, FaUsers, FaCog, FaBolt, FaGlobe } from 'react-icons/fa';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using React, Node.js, and modern technologies. From frontend interfaces to backend APIs and database design.",
      icon: FaCode,
      features: ["React/Vue/Angular", "Node.js/Express", "REST APIs/GraphQL", "MongoDB/PostgreSQL", "Authentication & Security"],
      color: "from-blue-500 to-cyan-500",
      pricing: "Starting at $2,000"
    },
    {
      id: 2,
      title: "AI & Machine Learning Integration",
      description: "Integrate cutting-edge AI capabilities into your applications including chatbots, recommendation systems, and automated workflows.",
      icon: FaBrain,
      features: ["OpenAI/GPT Integration", "Chatbot Development", "Predictive Analytics", "NLP Solutions", "Custom AI Models"],
      color: "from-purple-500 to-pink-500",
      pricing: "Starting at $3,000"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter. Native performance with single codebase for iOS and Android.",
      icon: FaMobile,
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment", "Push Notifications"],
      color: "from-green-500 to-emerald-500",
      pricing: "Starting at $2,500"
    },
    {
      id: 4,
      title: "Cloud & DevOps Solutions",
      description: "Complete cloud infrastructure setup, CI/CD pipelines, and deployment automation for scalable applications.",
      icon: FaCloud,
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Logging", "Auto-scaling"],
      color: "from-orange-500 to-red-500",
      pricing: "Starting at $1,500"
    },
    {
      id: 5,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment processing, inventory management, and customer experience optimization.",
      icon: FaGlobe,
      features: ["Payment Gateway Integration", "Shopping Cart Systems", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      color: "from-indigo-500 to-purple-500",
      pricing: "Starting at $3,500"
    },
    {
      id: 6,
      title: "API Development & Integration",
      description: "Robust RESTful and GraphQL APIs with third-party service integrations, data synchronization, and real-time communication.",
      icon: FaDatabase,
      features: ["REST/GraphQL APIs", "Third-party Integrations", "Real-time Communication", "Data Migration", "API Documentation"],
      color: "from-pink-500 to-rose-500",
      pricing: "Starting at $1,800"
    },
    {
      id: 7,
      title: "Performance Optimization",
      description: "Comprehensive performance analysis and optimization for faster loading times, better user experience, and improved search rankings.",
      icon: FaRocket,
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "CDN Implementation", "Performance Monitoring"],
      color: "from-yellow-500 to-orange-500",
      pricing: "Starting at $1,200"
    },
    {
      id: 8,
      title: "Security & Compliance",
      description: "Security audits, vulnerability assessments, and compliance implementation for data protection and regulatory requirements.",
      icon: FaShieldAlt,
      features: ["Security Audits", "HIPAA Compliance", "Data Encryption", "Authentication Systems", "Penetration Testing"],
      color: "from-red-500 to-pink-500",
      pricing: "Starting at $2,000"
    }
  ];

  const processSteps = [
    { step: "1", title: "Discovery & Planning", description: "Understand your requirements and create a detailed project plan" },
    { step: "2", title: "Design & Prototyping", description: "Create wireframes, mockups, and interactive prototypes" },
    { step: "3", title: "Development", description: "Build your application using best practices and modern technologies" },
    { step: "4", title: "Testing & Quality Assurance", description: "Comprehensive testing to ensure quality and performance" },
    { step: "5", title: "Deployment & Launch", description: "Deploy your application and ensure smooth launch" },
    { step: "6", title: "Support & Maintenance", description: "Ongoing support and maintenance for optimal performance" }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6 tracking-tight">
              Professional Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development solutions tailored to transform your business ideas into powerful digital realities. 
              From concept to deployment, I deliver scalable, high-performance applications that drive growth.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-green-400">
                <FaBolt className="text-xl" />
                <span className="font-semibold">Fast Delivery</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2 text-blue-400">
                <FaShieldAlt className="text-xl" />
                <span className="font-semibold">Secure Solutions</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2 text-purple-400">
                <FaChartLine className="text-xl" />
                <span className="font-semibold">Proven Results</span>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">{service.pricing}</span>
                      <a
                        href="#contact"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">Development Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help transform your ideas into powerful digital solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
