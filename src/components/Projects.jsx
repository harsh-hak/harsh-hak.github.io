import React, { useState, useMemo } from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Projects = () => {
    const [filter, setFilter] = useState('ALL');

    const allTech = useMemo(() => {
        const techs = new Set(['ALL']);
        resumeData.projects.forEach(p => {
            // Split "Python, CLI" into ["Python", " CLI"] -> trim -> ["Python", "CLI"]
            p.tech.split(',').forEach(t => techs.add(t.trim()));
        });
        return Array.from(techs);
    }, []);

    const filteredProjects = resumeData.projects.filter(proj => {
        if (filter === 'ALL') return true;
        return proj.tech.includes(filter);
    });

    return (
        <section id="projects" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>&gt;</span> PROJECT_DIRECTORY
                </h2>

                <div style={{ marginBottom: '2rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {allTech.map(tech => (
                        <button
                            key={tech}
                            className={`filter-btn ${filter === tech ? 'active' : ''}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {filteredProjects.map((proj, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={`EXEC: ${proj.title}`}>
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
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Projects;
