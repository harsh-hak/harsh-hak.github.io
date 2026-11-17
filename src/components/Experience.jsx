import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const renderFormattedText = (text) => {
    if (typeof text !== 'string') return text;
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'var(--primary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px'
                }}
            >
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

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
                                    {exp.mentor && (
                                        <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <span style={{ color: 'var(--primary)' }}>// Mentor: </span>
                                            {exp.mentorLink ? (
                                                <a
                                                    href={exp.mentorLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                                                >
                                                    {exp.mentor}
                                                </a>
                                            ) : (
                                                exp.mentor
                                            )}
                                        </p>
                                    )}
                                    <ul className="experience-list">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="experience-list-item">{renderFormattedText(desc)}</li>
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
