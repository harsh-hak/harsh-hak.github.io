import React from 'react';
import { resumeData } from '../data';

const GithubStats = () => {
    return (
        <section id="github-stats" className="container" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                <span style={{ color: 'var(--primary)' }}>&gt;</span> ACTIVITY_LOG
            </h2>

            {/* GitHub Graph */}
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', alignSelf: 'flex-start' }}>// GITHUB_COMMITS</h3>
            <div style={{
                padding: '1.5rem',
                background: 'rgba(5, 5, 5, 0.95)',
                border: '1px solid var(--primary-dim)',
                borderRadius: '4px',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.05)',
                maxWidth: '100%',
                overflowX: 'auto',
                textAlign: 'center',
                marginBottom: '4rem',
                width: '100%'
            }}>
                <img
                    src={`https://ghchart.rshah.org/00ff41/${resumeData.contact.github}`}
                    alt="Github Contributions"
                    style={{ width: '100%', minWidth: '800px', height: 'auto' }}
                />
                <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.8rem' }}>
                    Data from GitHub
                </div>
            </div>

            {/* TryHackMe Badge */}
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', alignSelf: 'flex-start' }}>// TRYHACKME_RANK</h3>
            <div style={{
                padding: '1rem',
                background: 'rgba(5, 5, 5, 0.95)',
                border: '1px solid var(--accent)',
                borderRadius: '4px',
                boxShadow: '0 0 20px rgba(255, 0, 60, 0.1)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <img
                    src="https://tryhackme-badges.s3.amazonaws.com/iamharshkanojiya.png"
                    alt="TryHackMe Badge"
                    style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                />
            </div>
        </section>
    );
};

export default GithubStats;
