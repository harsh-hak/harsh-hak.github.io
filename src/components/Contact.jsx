import React from 'react';
import { resumeData } from '../data';
import FadeInSection from './FadeInSection';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{ padding: '4rem 0', textAlign: 'center', marginBottom: '4rem' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>&gt;</span> CONNECT WITH ME
                </h2>

                <p style={{ color: '#888', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Always open to discussing new opportunities and collaborations.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href={`mailto:${resumeData.contact.email}`} className="contact-link" style={linkStyle}>
                        EMAIL
                    </a>
                    <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer" className="contact-link" style={linkStyle}>
                        LINKEDIN
                    </a>
                    <a href={`https://github.com/${resumeData.contact.github}`} target="_blank" rel="noreferrer" className="contact-link" style={linkStyle}>
                        GITHUB
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

const linkStyle = {
    padding: '15px 30px',
    border: '1px solid var(--primary)',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: 'rgba(5, 5, 5, 0.9)',
    transition: '0.3s'
};

export default Contact;
