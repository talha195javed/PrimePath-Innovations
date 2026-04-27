import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/talha195javed', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/m-talha-javed-aa36b9ba/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:talha195javed@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TJ</span>
              </div>
              <span className="text-white font-bold text-xl">M Talha Javed</span>
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  Mobile App Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  API Development
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:talha@example.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  talha@example.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-purple-400">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} M Talha Javed. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> by M Talha Javed
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
