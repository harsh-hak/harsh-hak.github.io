import React from 'react';
import { resumeData } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="container skills-container">
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> SKILLS_MATRIX
            </h2>

            <div className="skills-wrapper">
                {resumeData.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="skill-badge"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
