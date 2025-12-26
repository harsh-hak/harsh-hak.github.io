import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Experience = () => {
    return (
        <section id="experience" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> EXPERIENCE
                </h2>

                <div style={{ position: 'relative' }}>
                    {/* Vertical Connector Line */}
                    <div className="timeline-connector" />

                    {resumeData.experience.map((exp, idx) => (
                        <div key={idx} style={{ position: 'relative', paddingLeft: '60px', marginBottom: '3rem' }}>
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                background: 'var(--bg)',
                                border: '2px solid var(--primary)',
                                borderRadius: '50%',
                                zIndex: 1
                            }} />

                            <div className="interactive-card">
                                <Terminal title={`${exp.company}`}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', borderBottom: '1px dashed #333', paddingBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>{exp.role}</h3>
                                        <span style={{ color: '#ccc' }}>{exp.duration}</span>
                                    </div>
                                    <p style={{ color: '#aaa', fontStyle: 'italic', marginBottom: '1rem' }}>{exp.location}</p>
                                    <ul style={{ paddingLeft: '20px', color: '#eee' }}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                                        ))}
                                    </ul>
                                </Terminal>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Experience;
