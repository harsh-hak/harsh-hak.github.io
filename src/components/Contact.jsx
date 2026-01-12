import React from 'react';
import { resumeData } from '../data';
import FadeInSection from './FadeInSection';

const Contact = () => {
    return (
        <section id="contact" className="container contact-section">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>&gt;</span> CONNECT WITH ME
                </h2>

                <p className="contact-desc">
                    Always open to discussing new opportunities and collaborations.
                </p>

                <div className="contact-links">
                    <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
                        EMAIL
                    </a>
                    <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer" className="contact-link">
                        LINKEDIN
                    </a>
                    <a href={`https://github.com/${resumeData.contact.github}`} target="_blank" rel="noreferrer" className="contact-link">
                        GITHUB
                    </a>
                    <a href={`https://topmate.io/${resumeData.contact.topmate}`} target="_blank" rel="noreferrer" className="contact-link">
                        BOOK A 1:1 CALL
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Contact;
