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
