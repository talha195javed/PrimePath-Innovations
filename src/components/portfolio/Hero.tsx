import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/talha195javed", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/m-talha-javed-aa36b9ba/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:talha195javed@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/intro-1.jpg" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/80 to-slate-900/90"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-15 -bottom-32 -right-32 animate-pulse delay-1000"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="w-52 h-52 mx-auto mb-10 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: 3 }}
          >
            <img 
              src="/tj.png" 
              alt="M Talha Javed Profile"
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-7xl font-bold text-white">TJ</span>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4 tracking-tight">
              M Talha Javed
            </h1>
            <p className="text-3xl text-purple-300 font-semibold mb-2">
              Full Stack Development Services
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Available for Projects</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            Transform your ideas into powerful digital solutions with expert full-stack development, 
            AI integration, and cutting-edge web technologies tailored to your business needs.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Specializing in React, Node.js, AI/ML integration, and modern web development. 
            From concept to deployment, I deliver scalable, high-performance applications 
            that drive business growth and exceptional user experiences across all industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            variants={itemVariants}
          >
            <a
              href="#services"
              className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-10 py-4 border-2 border-purple-400 text-purple-300 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              <FaEnvelope className="text-base group-hover:animate-bounce" />
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
