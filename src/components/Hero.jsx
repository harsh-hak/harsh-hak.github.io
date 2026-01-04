import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';
import FadeInSection from './FadeInSection';

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

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '60px',
            paddingBottom: '2rem'
        }}>
            <FadeInSection delay="200ms">
                <div style={{
                    width: 'min(220px, 50vw)',
                    height: 'min(220px, 50vw)',
                    marginBottom: '2rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--primary)',
                    boxShadow: '0 0 20px var(--primary-dim)',
                    margin: '0 auto 2rem auto'
                }}>
                    <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{
                    textAlign: 'center',
                    background: 'transparent',
                    color: '#fff',
                    padding: '1rem',
                    maxWidth: '800px',
                    width: '90%',
                    margin: '0 auto'
                }}>
                    <h1 className="hero-title" style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        textShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap'
                    }}>
                        HI, I'M {resumeData.name.toUpperCase()}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        color: '#ccc',
                        marginBottom: '0.5rem',
                        minHeight: '1.5em'
                    }}>
                        {text}<span className="cursor-blink">|</span>
                    </p>
                    <p style={{
                        marginTop: '1.5rem',
                        fontSize: '1.5rem',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: 'bold',
                            textShadow: '0 0 15px rgba(0, 255, 65, 0.5)',
                            letterSpacing: '1px'
                        }}>
                            Deakin University, India
                        </span>
                    </p>
                </div>
            </FadeInSection>

            <style>{`
                .cursor-blink { animation: blink 1s step-end infinite; }
                @keyframes blink { 50% { opacity: 0; } }

                @media (max-width: 768px) {
                    .hero-title {
                        white-space: normal !important;
                        font-size: 2.2rem !important;
                    }
                }
            `}</style>

            <FadeInSection delay="800ms">
                <div style={{ marginTop: '2rem', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#projects" style={{
                        display: 'inline-block',
                        padding: '12px 25px',
                        borderRadius: '30px',
                        border: '1px solid var(--primary)',
                        color: 'black',
                        background: 'var(--primary)',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                        textDecoration: 'none',
                        boxShadow: '0 0 15px rgba(0, 255, 65, 0.4)',
                        fontSize: '0.9rem'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 0 25px var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.4)';
                        }}
                    >
                        VIEW WORK
                    </a>

                    <a href={resumeData.contact.cv} target="_blank" rel="noreferrer" style={{
                        display: 'inline-block',
                        padding: '12px 25px',
                        borderRadius: '30px',
                        border: '1px solid var(--text)',
                        color: 'var(--text)',
                        background: 'transparent',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.1)';
                            e.target.style.borderColor = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = 'var(--text)';
                        }}
                    >
                        RESUME
                    </a>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <p style={{
                        color: 'var(--text)',
                        marginBottom: '1rem',
                        fontSize: '1.5rem',
                        letterSpacing: '1px',
                        opacity: 0.8
                    }}>
                        Connect With Me
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'var(--text)', fontSize: '2.5rem', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text)'}>
                            <FaLinkedin />
                        </a>
                        <a href={`https://github.com/${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'var(--text)', fontSize: '2.5rem', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text)'}>
                            <FaGithub />
                        </a>
                        <a href={`mailto:${resumeData.contact.email}`}
                            style={{ color: 'var(--text)', fontSize: '2.5rem', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text)'}>
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Hero;
