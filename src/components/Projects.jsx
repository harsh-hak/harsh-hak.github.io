import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Projects = () => {
    return (
        <section id="projects" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> PROJECTS
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {resumeData.projects.map((proj, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={proj.title}>
                                <div style={{ marginBottom: '1rem', color: 'var(--primary-dim)', fontSize: '0.9rem' }}>
                                    {proj.tech}
                                </div>
                                <p style={{ lineHeight: '1.6', color: '#eee' }}>
                                    {proj.description}
                                </p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                    {proj.demoLink && (
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: '0.9rem',
                                            borderBottom: '1px solid var(--primary)',
                                            paddingBottom: '2px',
                                            textDecoration: 'none',
                                            marginRight: 'auto'
                                        }}>Live Demo &rarr;</a>
                                    )}
                                    <a href={proj.link || "#"} target="_blank" rel="noopener noreferrer" style={{
                                        fontSize: '0.9rem',
                                        borderBottom: '1px solid var(--primary)',
                                        paddingBottom: '2px',
                                        textDecoration: 'none'
                                    }}>View Code &rarr;</a>
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
