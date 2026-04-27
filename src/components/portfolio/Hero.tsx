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
    { icon: FaTwitter, href: "https://twitter.com/talha195javed", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:talha@example.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 animate-pulse"></div>
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
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-400"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
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
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-6xl font-bold text-white">TJ</span>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              M Talha Javed
            </h1>
            <p className="text-2xl text-purple-300 font-medium">
              Full Stack Developer & Software Engineer
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            Passionate about building exceptional digital experiences with modern web technologies. 
            Specializing in React, TypeScript, Node.js, and creating scalable, performant applications 
            that solve real-world problems.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate about building exceptional digital experiences with modern web technologies. 
            Specializing in React, TypeScript, Node.js, and creating scalable, performant applications 
            that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
            >
              View My Work
            </a>
            <a
              href="/M_Talha_Javed_CV.pdf"
              download="M_Talha_Javed_CV.pdf"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaDownload className="text-sm" />
              Download CV
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
