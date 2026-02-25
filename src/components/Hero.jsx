import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaVideo } from 'react-icons/fa';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';
import FadeInSection from './FadeInSection';
import VisitorCounter from './VisitorCounter';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = resumeData.role;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    const handleMagneticObj = (e) => {
        if (window.matchMedia("(pointer: coarse)").matches) return; // Disable on mobile
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetMagneticObj = (e) => {
        e.currentTarget.style.transform = 'translate(0px, 0px)';
    };

    return (
        <section id="hero" className="hero-section">
            <FadeInSection delay="200ms">
                <div className="profile-container" itemScope itemType="https://schema.org/Person">
                    <img
                        src={profileImg}
                        alt="Harsh Kanojia - Cyber Security Researcher and Malware Analyst"
                        className="profile-img"
                        itemProp="image"
                        width="220"
                        height="220"
                        loading="eager"
                        fetchpriority="high"
                    />
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        HI, I'M {resumeData.name.toUpperCase()}
                    </h1>
                    <p className="hero-desc">
                        {text}<span className="cursor-blink">|</span>
                    </p>
                    <p className="hero-uni">
                        <span className="uni-highlight">
                            Deakin University, India
                        </span>
                    </p>
                </div>
            </FadeInSection>

            <style>{`
                .cursor-blink { animation: blink 1s step-end infinite; }
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>

            <FadeInSection delay="800ms">
                <div className="hero-actions">
                    <a href="#projects" className="hero-btn" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                        VIEW WORK
                    </a>

                    <a href={`https://topmate.io/${resumeData.contact.topmate}`} target="_blank" rel="noopener noreferrer" className="hero-btn" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                        BOOK A 1:1 CALL
                    </a>

                    <a href={resumeData.contact.cv} target="_blank" rel="noreferrer" className="hero-btn" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                        RESUME
                    </a>
                </div>

                <div className="connect-section">
                    <p className="connect-text">
                        Connect With Me
                    </p>
                    <div className="connect-icons">
                        <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer"
                            className="connect-icon" aria-label="LinkedIn Profile" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                            <FaLinkedin />
                        </a>
                        <a href={`https://github.com/${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer"
                            className="connect-icon" aria-label="GitHub Profile" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                            <FaGithub />
                        </a>
                        <a href={`mailto:${resumeData.contact.email}`}
                            className="connect-icon" aria-label="Send Email" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                            <FaEnvelope />
                        </a>
                        <a href={`https://topmate.io/${resumeData.contact.topmate}`} target="_blank" rel="noopener noreferrer"
                            className="connect-icon" aria-label="Topmate 1:1 Call" onMouseMove={handleMagneticObj} onMouseLeave={resetMagneticObj}>
                            <FaVideo />
                        </a>
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <VisitorCounter />
                </div>
            </FadeInSection>
        </section>
    );
};

export default Hero;
