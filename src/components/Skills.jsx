import React from 'react';
import { resumeData } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> SKILLS_MATRIX
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {resumeData.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="skill-badge"
                        style={{
                            padding: '8px 16px',
                            background: 'rgba(255, 255, 255, 0.1)', // Glassmorphism white tint
                            border: '1px solid #333',
                            color: '#fff',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            cursor: 'default',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.background = 'rgba(0, 255, 65, 0.1)';
                            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.2)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = '#333';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
