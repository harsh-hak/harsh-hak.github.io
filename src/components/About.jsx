import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> ABOUT ME
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <Terminal title="Professional Summary">
                        <p style={{ lineHeight: '1.6', color: '#eee' }}>
                            {resumeData.summary}
                        </p>
                    </Terminal>

                    <Terminal title="Education">
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx} style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--secondary)', paddingLeft: '1rem' }}>
                                <div style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>{edu.degree}</div>
                                <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{edu.institution}</div>
                                <div style={{ fontSize: '0.85rem' }}>{edu.year} | {edu.notes}</div>
                            </div>
                        ))}
                    </Terminal>
                </div>
            </FadeInSection>
        </section>
    );
};

export default About;
