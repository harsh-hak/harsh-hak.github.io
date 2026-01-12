import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const About = () => {
    return (
        <section id="about" className="container about-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> ABOUT ME
                </h2>

                <div className="about-grid">
                    <Terminal title="Professional Summary">
                        <p className="about-text">
                            {resumeData.summary}
                        </p>
                    </Terminal>

                    <Terminal title="Education">
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx} className="edu-item">
                                <div className="edu-degree">{edu.degree}</div>
                                <div className="edu-inst">{edu.institution}</div>
                                <div className="edu-year">{edu.year} | {edu.notes}</div>
                            </div>
                        ))}
                    </Terminal>
                </div>
            </FadeInSection>
        </section>
    );
};

export default About;
