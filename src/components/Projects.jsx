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

                <div className="projects-grid">
                    {resumeData.projects.map((proj, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={proj.title}>
                                <div className="project-tech">
                                    {proj.tech}
                                </div>
                                <p className="project-desc">
                                    {proj.description}
                                </p>
                                <div className="project-links">
                                    {proj.demoLink && (
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">Live Demo &rarr;</a>
                                    )}
                                    <a href={proj.link || "#"} target="_blank" rel="noopener noreferrer" className="project-link">View Code &rarr;</a>
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
