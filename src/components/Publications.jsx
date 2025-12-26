import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';

const Publications = () => {
    return (
        <section id="publications" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> RESEARCH_LOG
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {resumeData.publications.map((pub, idx) => (
                    <Terminal key={idx} title={`DOC: ${pub.publisher}`}>
                        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            {pub.title}
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>{pub.year}</span>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    fontSize: '0.9rem',
                                    borderBottom: '1px solid var(--primary)',
                                    paddingBottom: '2px',
                                    color: 'var(--primary)'
                                }}
                            >
                                READ_PAPER &gt;
                            </a>
                        </div>
                    </Terminal>
                ))}
            </div>
        </section>
    );
};

export default Publications;
