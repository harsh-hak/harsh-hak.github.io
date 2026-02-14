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
                        <div itemScope itemType="https://schema.org/ItemList">
                            <meta itemProp="name" content="Education" />
                            {resumeData.education.map((edu, idx) => (
                                <div key={idx} className="edu-item" itemProp="itemListElement" itemScope itemType="https://schema.org/EducationalOrganization">
                                    <div className="edu-degree" itemProp="name">{edu.degree}</div>
                                    <div className="edu-inst" itemProp="alumniOf">{edu.institution}</div>
                                    <div className="edu-year"><span itemProp="startDate">{edu.year.split(' - ')[0]}</span> - <span itemProp="endDate">{edu.year.split(' - ')[1]}</span> | {edu.notes}</div>
                                </div>
                            ))}
                        </div>
                    </Terminal>
                </div>
            </FadeInSection>
        </section>
    );
};

export default About;
