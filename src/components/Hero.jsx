import React, { useState, useEffect } from 'react';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';
import FadeInSection from './FadeInSection';

const Hero = () => {
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
                    margin: '0 auto 2rem auto'
                }}>
                    <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{
                    textAlign: 'center',
                    background: 'transparent',
                    color: '#fff',
                    padding: '2rem',
                    maxWidth: '800px',
                    width: '90%',
                    margin: '0 auto'
                }}>
                    <h1 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        textShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
                    }}>
                        HI, I'M {resumeData.name.toUpperCase()}
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#ccc',
                        marginBottom: '0.5rem'
                    }}>
                        {resumeData.role}
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {resumeData.contact.location || "Deakin University, India"}
                    </p>
                </div>
            </FadeInSection>

            <FadeInSection delay="800ms">
                <div style={{ marginTop: '2rem', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#projects" style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        border: '1px solid var(--primary)',
                        color: 'black',
                        background: 'var(--primary)',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                        textDecoration: 'none',
                        boxShadow: '0 0 15px rgba(0, 255, 65, 0.4)'
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
