import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Publications = () => {
    return (
        <section id="publications" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> PUBLICATIONS
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {resumeData.publications.map((pub, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={pub.publisher}>
                                <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.4' }}>
                                    {pub.title}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                                    <span style={{ color: '#888', fontSize: '0.9rem' }}>{pub.year}</span>
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            fontSize: '0.9rem',
                                            padding: '5px 15px',
                                            borderRadius: '15px',
                                            background: 'var(--primary-dim)',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Read Paper
                                    </a>
                                </div>
                            </Terminal>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Publications;
