import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';

const Experience = () => {
    return (
        <section id="experience" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> EXPERIENCE_LOG
            </h2>

            {resumeData.experience.map((exp, idx) => (
                <Terminal key={idx} title={`JOB_ID_${idx + 1}: ${exp.company.toUpperCase()}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', borderBottom: '1px dashed #333', paddingBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>{exp.role}</h3>
                        <span style={{ color: '#ccc' }}>{exp.duration}</span>
                    </div>
                    <p style={{ color: '#aaa', fontStyle: 'italic', marginBottom: '1rem' }}>Location: {exp.location}</p>
                    <ul style={{ paddingLeft: '20px', color: '#eee' }}>
                        {exp.description.map((desc, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                        ))}
                    </ul>
                </Terminal>
            ))}
        </section>
    );
};

export default Experience;
