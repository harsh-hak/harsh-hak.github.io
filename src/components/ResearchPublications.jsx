import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const ResearchPublications = () => {
    return (
        <section id="research" className="container publications-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> RESEARCH & PUBLICATIONS
                </h2>

                <div className="publications-grid">
                    {resumeData.researchAndPublications.map((item, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={item.publisher.toUpperCase()}>
                                <h3 className="pub-title">
                                    {item.title}
                                </h3>
                                
                                {item.type === 'POSTER_PRESENTATION' ? (
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.5', margin: '15px 0', color: 'var(--text-secondary)' }}>
                                        <div style={{ marginBottom: '8px', color: 'var(--text)' }}>
                                            <span style={{ color: 'var(--primary)' }}>[!]</span> Presenter at Army Institute of Management & Technology (AIMT), Greater Noida
                                        </div>
                                        <div>
                                            <span style={{ color: 'var(--primary)' }}>[~]</span> Conference: {item.conference}
                                        </div>
                                    </div>
                                ) : null}

                                <div className="pub-meta">
                                    <span className="pub-year">
                                        {item.type === 'POSTER_PRESENTATION' ? item.date : item.year}
                                    </span>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="pub-link"
                                        >
                                            Read Paper
                                        </a>
                                    ) : (
                                        <span className="pub-tag" style={{
                                            fontSize: '0.85rem',
                                            padding: '4px 10px',
                                            border: '1px solid var(--secondary)',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--primary)'
                                        }}>
                                            PRESENTED
                                        </span>
                                    )}
                                </div>
                            </Terminal>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default ResearchPublications;
