import React, { useState, useEffect } from 'react';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';
import FadeInSection from './FadeInSection';

const Hero = () => {
    // Simplified Hero Content

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '60px'
        }}>
            <FadeInSection delay="200ms">
                <div style={{
                    width: '220px',
                    height: '220px',
                    marginBottom: '2rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--primary)',
                    boxShadow: '0 0 20px var(--primary-dim)',
                    margin: '0 auto 2rem auto' // Centering fix if needed
                }}>
                    <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{
                    textAlign: 'left',
                    background: 'rgba(5, 5, 5, 0.95)',
                    color: '#fff',
                    padding: '2rem',
                    border: '1px solid var(--primary)',
                    boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
                    maxWidth: '800px',
                    width: '90%',
                    margin: '0 auto'
                }}>
                    <pre style={{
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: '1.5',
                        fontSize: '1.2rem',
                        margin: 0
                    }}>
                        {text}
                        <span className="cursor-blink">_</span>
                    </pre>
                </div>
            </FadeInSection>

            <style>{`
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

            <FadeInSection delay="800ms">
                <div style={{ marginTop: '3rem', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#about" style={{
                        display: 'inline-block',
                        padding: '10px 30px',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        background: 'transparent',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                        textDecoration: 'none'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--primary)';
                            e.target.style.color = 'black';
                            e.target.style.boxShadow = '0 0 20px var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--primary)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        INITIALIZE
                    </a>

                    <a href={resumeData.contact.cv} target="_blank" rel="noreferrer" style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        border: '1px solid var(--text)',
                        color: 'var(--text)',
                        background: 'transparent',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                        textDecoration: 'none'
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
            </FadeInSection>
        </section>
    );
};

export default Hero;
