import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import GithubStats from './components/GithubStats';
import Community from './components/Community';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <>
      <SEO
        title="Harsh Kanojia - Software Engineer & Full Stack Developer"
        description="Harsh Kanojia is a skilled Software Engineer and Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio to see my projects and skills."
        keywords="Harsh Kanojia, Software Engineer, Full Stack Developer, React Developer, Portfolio, Web Development, Programming"
      />
      {/* Background Effects */}
      <MatrixBackground />
      <div className="scanlines"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content main-layout">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <GithubStats />
        <Community />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          SYSTEM_TERMINATED. © {new Date().getFullYear()} HARSH_KANOJIA
        </p>
        <VisitorCounter />
      </footer>
    </>
  );
}

export default App;
