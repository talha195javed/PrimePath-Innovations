import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaGitAlt, FaDocker } from 'react-icons/fa';

const About = () => {
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

  const skills = [
    { icon: FaCode, name: "Full Stack Development", level: 90, color: "from-blue-400 to-blue-600" },
    { icon: FaDatabase, name: "PHP Development", level: 95, color: "from-green-400 to-green-600" },
    { icon: FaMobile, name: "Mobile Development", level: 85, color: "from-purple-400 to-purple-600" },
    { icon: FaCloud, name: "AI Integration", level: 80, color: "from-yellow-400 to-yellow-600" },
    { icon: FaGitAlt, name: "API Development", level: 90, color: "from-red-400 to-red-600" },
    { icon: FaDocker, name: "DevOps & CI/CD", level: 75, color: "from-cyan-400 to-cyan-600" },
  ];

  const techStack = [
    "PHP (Core PHP, Laravel, CodeIgniter)", "JavaScript (ES6+)", "TypeScript", "React.js", "Vue.js", "React Native", 
    "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Node.js", "Angular",
    "RESTful API Development", "GraphQL", "API Integration", "Authentication (JWT, OAuth)", "Payment Gateway Integration",
    "AI API Integration (OpenAI/NLP)", "Chatbot Development", "Intelligent Search Systems", "Prompt Engineering",
    "MySQL", "MongoDB", "Database Design", "Docker", "CI/CD Pipelines", "Git & GitHub", "Jenkins"
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
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
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Your Full Stack Development Partner
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                I provide comprehensive full-stack development services that transform your business ideas into powerful digital solutions. 
                With expertise spanning from frontend interfaces to backend APIs, AI integration, and mobile applications, 
                I deliver complete solutions that drive business growth and exceptional user experiences.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My services include custom web applications, AI-powered solutions, e-commerce platforms, API development, 
                and mobile apps. I've successfully delivered 10+ dynamic applications achieving 25% efficiency improvements 
                and 30% increases in user engagement for clients across various industries.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Combining technical excellence with business understanding, I ensure every project meets your specific requirements 
                while delivering measurable results. With 95% client satisfaction and proven track record of on-time, 
                on-budget project delivery, I'm your reliable partner for digital transformation.
              </p>

              {/* Service Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">8+</div>
                  <div className="text-sm text-gray-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">32+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                My Skills & Expertise
              </h3>
              
              {/* Skill Bars */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-lg text-gray-400" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-slate-700 hover:border-purple-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
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

export default About;
