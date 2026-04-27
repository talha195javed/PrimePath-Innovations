import React from 'react';
import Hero from '../components/portfolio/Hero';
import Services from '../components/portfolio/Services';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
