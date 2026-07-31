import React, { useState } from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleFeatures = (idx) => {
        setExpandedProjects(prev => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

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

                                {proj.features && (
                                    <div style={{ marginTop: '1rem' }}>
                                        <button
                                            onClick={() => toggleFeatures(idx)}
                                            className="terminal-command-btn"
                                            style={{ margin: 0 }}
                                            aria-expanded={!!expandedProjects[idx]}
                                        >
                                            <span style={{ color: '#888' }}>$</span> {expandedProjects[idx] ? 'clear' : 'cat features.txt'}
                                        </button>
                                    </div>
                                )}

                                {proj.features && expandedProjects[idx] && (
                                    <ul className="project-features-list" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                        {proj.features.map((feat, fIdx) => {
                                            const parts = feat.split(':');
                                            if (parts.length > 1) {
                                                return (
                                                    <li key={fIdx} style={{ marginBottom: '0.6rem', lineHeight: '1.4' }}>
                                                        <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>[+] {parts[0]}:</strong>
                                                        {parts.slice(1).join(':')}
                                                    </li>
                                                );
                                            }
                                            return (
                                                <li key={fIdx} style={{ marginBottom: '0.6rem', lineHeight: '1.4' }}>
                                                    <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>[+]</strong> {feat}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}

                                <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
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
