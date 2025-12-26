import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import GithubStats from './components/GithubStats';
import Community from './components/Community';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Background Effects */}
      <MatrixBackground />
      <div className="scanlines"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content" style={{ position: 'relative', zIndex: 1 }}>
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
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#444',
        borderTop: '1px solid #111',
        background: 'rgba(0,0,0,0.9)',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>
          SYSTEM_TERMINATED. © {new Date().getFullYear()} HARSH_KANOJIA
        </p>
      </footer>
    </>
  );
}

export default App;
