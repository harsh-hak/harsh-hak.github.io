import React, { useState } from 'react';
import { resumeData } from '../data';

const GithubStats = () => {
    const [ghState, setGhState] = useState({ loading: true, error: false });
    const [thmState, setThmState] = useState({ loading: true, error: false });

    return (
        <section id="github-stats" className="container gh-stats-container">
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                <span style={{ color: 'var(--primary)' }}>&gt;</span> GITHUB_COMMITS
            </h2>

            {/* GitHub Graph */}
            <div className="gh-chart-container" style={{ position: 'relative', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {ghState.loading && !ghState.error && (
                    <div className="terminal-placeholder" style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary)', fontSize: '0.9rem', textAlign: 'center', padding: '20px', border: '1px dashed var(--secondary)' }}>
                        [~] FETCHING CONTRIBUTIONS FROM API.GITHUB.COM...
                    </div>
                )}
                {ghState.error && (
                    <div className="terminal-error" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9rem', textAlign: 'center', padding: '20px', border: '1px dashed rgba(245, 51, 44, 0.3)' }}>
                        [!] OFFLINE: FAILED TO RETRIEVE GITHUB TELEMETRY
                    </div>
                )}
                <img
                    src={`https://ghchart.rshah.org/f5332c/${resumeData.contact.github}`}
                    alt="Github Contributions"
                    className="gh-chart-img"
                    style={{ display: ghState.loading || ghState.error ? 'none' : 'block' }}
                    onLoad={() => setGhState({ loading: false, error: false })}
                    onError={() => setGhState({ loading: false, error: true })}
                />
                {!ghState.loading && !ghState.error && (
                    <div className="gh-chart-caption">
                        Data from GitHub
                    </div>
                )}
            </div>

            {/* TryHackMe Badge */}
            <h3 className="gh-label thm">// TRYHACKME_RANK</h3>
            <div className="thm-badge-container" style={{ position: 'relative', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {thmState.loading && !thmState.error && (
                    <div className="terminal-placeholder" style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary)', fontSize: '0.9rem', textAlign: 'center', padding: '20px', border: '1px dashed var(--secondary)', maxWidth: '300px' }}>
                        [~] RETRIEVING RANK FROM S3.AMAZONAWS.COM...
                    </div>
                )}
                {thmState.error && (
                    <div className="terminal-error" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9rem', textAlign: 'center', padding: '20px', border: '1px dashed rgba(255, 0, 60, 0.3)', maxWidth: '300px' }}>
                        [!] OFFLINE: FAILED TO RETRIEVE TRYHACKME BADGE
                    </div>
                )}
                <img
                    src="https://tryhackme-badges.s3.amazonaws.com/iamharshkanojiya.png"
                    alt="TryHackMe Badge"
                    className="thm-badge-img"
                    style={{ display: thmState.loading || thmState.error ? 'none' : 'block', maxWidth: '100%', height: 'auto' }}
                    onLoad={() => setThmState({ loading: false, error: false })}
                    onError={() => setThmState({ loading: false, error: true })}
                />
            </div>
        </section>
    );
};

export default GithubStats;
