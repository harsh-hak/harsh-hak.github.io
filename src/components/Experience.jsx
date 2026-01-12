import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Experience = () => {
    return (
        <section id="experience" className="container experience-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> EXPERIENCE
                </h2>

                <div style={{ position: 'relative' }}>
                    {/* Vertical Connector Line */}
                    <div className="timeline-connector" />

                    {resumeData.experience.map((exp, idx) => (
                        <div key={idx} className="timeline-item">
                            {/* Dot */}
                            <div className="timeline-dot" />

                            <div className="interactive-card">
                                <Terminal title={`${exp.company}`}>
                                    <div className="experience-header">
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <span className="experience-duration">{exp.duration}</span>
                                    </div>
                                    <p className="experience-location">{exp.location}</p>
                                    <ul className="experience-list">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="experience-list-item">{desc}</li>
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
