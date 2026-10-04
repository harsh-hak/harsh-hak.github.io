import React, { useState } from 'react';
import { resumeData } from '../data';

const Skills = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="skills" className="container skills-container">
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> SKILLS_MATRIX
            </h2>

            {/* Desktop View */}
            <div className="skills-wrapper desktop-skills">
                <div className="skills-track">
                    {resumeData.skills.map((skill, idx) => (
                        <div key={idx} className="skill-badge">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="skills-mobile-dropdown-container mobile-skills">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="skills-dropdown-trigger"
                    aria-expanded={isOpen}
                >
                    <span className="trigger-text">
                        {isOpen ? '> HIDE_SKILLSET' : '> KNOW_MY_SKILLSET'}
                    </span>
                    <span className="trigger-arrow">{isOpen ? '▲' : '▼'}</span>
                </button>
                
                <div className={`skills-dropdown-content ${isOpen ? 'open' : ''}`}>
                    <div className="skills-track-mobile">
                        {resumeData.skills.map((skill, idx) => (
                            <div key={idx} className="skill-badge-mobile">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
