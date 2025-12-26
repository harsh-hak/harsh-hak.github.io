import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';

const Projects = () => {
    return (
        <section id="projects" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> PROJECT_DIRECTORY
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {resumeData.projects.map((proj, idx) => (
                    <Terminal key={idx} title={`EXEC: ${proj.title}`}>
                        <div style={{ marginBottom: '1rem', color: 'var(--primary-dim)', fontSize: '0.9rem' }}>
                            [{proj.tech}]
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#eee' }}>
                            {proj.description}
                        </p>
                        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                            <a href="#" style={{
                                fontSize: '0.8rem',
                                borderBottom: '1px solid var(--primary)',
                                paddingBottom: '2px'
                            }}>VIEW_SOURCE &gt;</a>
                        </div>
                    </Terminal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
