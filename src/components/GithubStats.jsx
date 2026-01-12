import React from 'react';
import { resumeData } from '../data';

const GithubStats = () => {
    return (
        <section id="github-stats" className="container gh-stats-container">
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
                <span style={{ color: 'var(--primary)' }}>&gt;</span> ACTIVITY_LOG
            </h2>

            {/* GitHub Graph */}
            <h3 className="gh-label commits">// GITHUB_COMMITS</h3>
            <div className="gh-chart-container">
                <img
                    src={`https://ghchart.rshah.org/00ff41/${resumeData.contact.github}`}
                    alt="Github Contributions"
                    className="gh-chart-img"
                />
                <div className="gh-chart-caption">
                    Data from GitHub
                </div>
            </div>

            {/* TryHackMe Badge */}
            <h3 className="gh-label thm">// TRYHACKME_RANK</h3>
            <div className="thm-badge-container">
                <img
                    src="https://tryhackme-badges.s3.amazonaws.com/iamharshkanojiya.png"
                    alt="TryHackMe Badge"
                    className="thm-badge-img"
                />
            </div>
        </section>
    );
};

export default GithubStats;
