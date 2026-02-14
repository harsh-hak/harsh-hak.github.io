import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Projects = () => {
    return (
        <section id="projects" className="container projects-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> PROJECTS
                </h2>

                <div className="projects-grid" itemScope itemType="https://schema.org/ItemList">
                    <meta itemProp="name" content="Cyber Security Projects" />
                    <meta itemProp="description" content="A collection of cyber security research tools, malware analysis scripts, and penetration testing projects." />

                    {resumeData.projects.map((proj, idx) => (
                        <div key={idx} className="interactive-card" itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareSourceCode">
                            <meta itemProp="position" content={idx + 1} />
                            <Terminal title={proj.title}>
                                <div className="project-tech" itemProp="programmingLanguage">
                                    {proj.tech}
                                </div>
                                <h3 itemProp="name" style={{ display: 'none' }}>{proj.title}</h3>
                                <p className="project-desc" itemProp="description">
                                    {proj.description}
                                </p>
                                <div className="project-links">
                                    {proj.demoLink && (
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo" itemProp="url">Live Demo &rarr;</a>
                                    )}
                                    <a href={proj.link || "#"} target="_blank" rel="noopener noreferrer" className="project-link" itemProp="codeRepository">View Code &rarr;</a>
                                </div>
                            </Terminal>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Projects;
