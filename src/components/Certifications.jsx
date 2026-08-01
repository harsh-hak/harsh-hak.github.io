import React from 'react';
import { resumeData } from '../data';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';
import securityPlusBadge from '../assets/security-plus-badge.png';
import oracleBadge from '../assets/oracle-ai-badge.png';
import awsBadge from '../assets/aws-badge.png';

const badgeMap = {
    'CompTIA': securityPlusBadge,
    'Oracle': oracleBadge,
    'Amazon Web Services (AWS)': awsBadge,
};

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
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'nowrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '1 1 0', minWidth: 0 }}>
                                        <h3 className="pub-title" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginTop: 0 }}>
                                            {cert.title}
                                        </h3>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.6', margin: '15px 0' }}>
                                            {cert.candidateId && (
                                                <div style={{ color: 'var(--text)' }}>
                                                    <span style={{ color: 'var(--primary)' }}>&gt;</span> CANDIDATE_ID: {cert.candidateId}
                                                </div>
                                            )}
                                            <div style={{ color: 'var(--text)' }}>
                                                <span style={{ color: 'var(--primary)' }}>&gt;</span> DATE: {cert.date}
                                            </div>
                                            {cert.score && (
                                                <div style={{ color: 'var(--text)' }}>
                                                    <span style={{ color: 'var(--primary)' }}>&gt;</span> SCORE: {cert.score}
                                                </div>
                                            )}
                                            {cert.code && (
                                                <div style={{ color: 'var(--text)', wordBreak: 'break-all', marginTop: '10px' }}>
                                                    <span style={{ color: 'var(--primary)' }}>&gt;</span> CODE: {cert.code}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {badgeMap[cert.issuer] && (
                                        <div style={{
                                            flexShrink: 0,
                                            border: '2px solid var(--secondary)',
                                            background: '#ffffff',
                                            padding: '8px',
                                            boxShadow: '3px 3px 0px var(--secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '90px',
                                            height: '90px',
                                        }}>
                                            <img
                                                src={badgeMap[cert.issuer]}
                                                alt={`${cert.issuer} Badge`}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                                            />
                                        </div>
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

export default Certifications;
