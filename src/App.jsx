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
import Blog from './components/Blog';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';
import { resumeData } from './data';

function App() {
  return (
    <>
      <SEO
        title="Harsh Kanojia - Cyber Security Researcher & Malware Analyst"
        description="Harsh Kanojia is a Cyber Security Researcher and Malware Analyst specializing in threat detection, digital forensics, and secure development. Explore my portfolio to see my security research and tools."
        keywords="Harsh Kanojia, Cyber Security Researcher, Malware Analyst, Information Security, Penetration Testing, Digital Forensics, Python, Network Security"
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
        <Blog />
        <Contact />
      </main>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">

          {/* Brand Column */}
          <div className="footer-col">
            <h3>Harsh Kanojia</h3>
            <p style={{ color: '#888', lineHeight: '1.6' }}>
              Cyber Security Researcher & Malware Analyst.<br />
              Securing the digital frontier, one exploit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#blog" className="footer-link">Blog</a>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h3>Connect</h3>
            <div className="footer-links">
              <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href={`https://github.com/${resumeData.contact.github}`} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href={`mailto:${resumeData.contact.email}`} className="footer-link">Email</a>
              <a href={`https://topmate.io/${resumeData.contact.topmate}`} target="_blank" rel="noreferrer" className="footer-link">Topmate</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} HARSH_KANOJIA. ALL RIGHTS RESERVED.
          </p>
          <VisitorCounter />
        </div>
      </footer>
    </>
  );
}

export default App;
