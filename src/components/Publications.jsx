import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Publications = () => {
    return (
        <section id="publications" className="container publications-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> PUBLICATIONS
                </h2>

                <div className="publications-grid">
                    {resumeData.publications.map((pub, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={pub.publisher}>
                                <h3 className="pub-title">
                                    {pub.title}
                                </h3>
                                <div className="pub-meta">
                                    <span className="pub-year">{pub.year}</span>
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pub-link"
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
