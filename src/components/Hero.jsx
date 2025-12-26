import React, { useState, useEffect } from 'react';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = `> PORTFOLIO LOADING...\n> CONNECTING TO SERVER...\n> AUTHENTICATED AS: ${resumeData.name}\n> ROLE: ${resumeData.role}\n> LOCATION: ${resumeData.contact.location || "Deakin University, India"}\n> STATUS: READY_TO_WORK...`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, []);

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
            <div style={{
                width: '220px',
                height: '220px',
                marginBottom: '2rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--primary)',
                boxShadow: '0 0 20px var(--primary-dim)'
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
                width: '90%'
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

            <style>{`
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

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
                    padding: '10px 30px',
                    border: '1px solid var(--secondary)',
                    color: 'var(--secondary)',
                    background: 'transparent',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: '0.3s',
                    textDecoration: 'none'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--secondary)';
                        e.target.style.color = 'black';
                        e.target.style.boxShadow = '0 0 20px var(--secondary)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--secondary)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    ACCESS_RESUME
                </a>
            </div>
        </section>
    );
};

export default Hero;
