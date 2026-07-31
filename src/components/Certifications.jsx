import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';
import securityPlusBadge from '../assets/security-plus-badge.png';

const Certifications = () => {
    return (
        <section id="certifications" className="container certifications-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> CERTIFICATIONS
                </h2>

                <div className="publications-grid">
                    {resumeData.certifications.map((cert, idx) => (
                        <div key={idx} className="interactive-card">
                            <Terminal title={cert.issuer.toUpperCase()}>
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '1 1 250px' }}>
                                        <h3 className="pub-title" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginTop: 0 }}>
                                            {cert.title}
                                        </h3>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.6', margin: '15px 0' }}>
                                            <div style={{ color: 'var(--text)' }}>
                                                <span style={{ color: 'var(--primary)' }}>&gt;</span> CANDIDATE_ID: {cert.candidateId}
                                            </div>
                                            <div style={{ color: 'var(--text)' }}>
                                                <span style={{ color: 'var(--primary)' }}>&gt;</span> DATE: {cert.date}
                                            </div>
                                            <div style={{ color: 'var(--text)' }}>
                                                <span style={{ color: 'var(--primary)' }}>&gt;</span> EXPIRE_DATE: {cert.expiry}
                                            </div>
                                            <div style={{ color: 'var(--text)', wordBreak: 'break-all', marginTop: '10px' }}>
                                                <span style={{ color: 'var(--primary)' }}>&gt;</span> CODE: {cert.code}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {cert.title.includes("Security+") && (
                                        <div style={{
                                            border: '2px solid var(--secondary)',
                                            background: '#ffffff',
                                            padding: '8px',
                                            boxShadow: '3px 3px 0px var(--secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            maxWidth: '110px',
                                            margin: '0 auto 10px auto'
                                        }}>
                                            <img
                                                src={securityPlusBadge}
                                                alt="CompTIA Security+ Badge"
                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="pub-meta" style={{ marginTop: '1rem', paddingTop: '1rem' }}>
                                    <span className="pub-year">{cert.date.split(' ').pop()}</span>
                                    <a
                                        href={cert.verifyLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pub-link"
                                    >
                                        Verify
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

export default Certifications;
