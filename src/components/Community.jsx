import React from 'react';
import FadeInSection from './FadeInSection';

const stats = [
    { value: '5K+', label: 'Active Members' },
    { value: '100+', label: 'Meetups Hosted' },
    { value: '500+', label: 'CTFs Played' },
    { value: '100%', label: 'Open Source' },
];

const Community = () => {
    return (
        <section id="community" className="container community-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> COMMUNITY
                </h2>

                {/* Founder Header */}
                <div className="community-founder-header">
                    <div className="community-founder-meta">
                        <span className="community-founder-badge">⚡ FOUNDER</span>
                        <h3 className="community-org-name">CYBER SPHERE</h3>
                        <p className="community-tagline">
                            An open collective for hackers, researchers, and defenders.
                            No corporate agenda. Just pure security research and knowledge sharing.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="community-stats">
                    {stats.map((stat, i) => (
                        <div key={i} className="community-stat-item">
                            <span className="community-stat-value">{stat.value}</span>
                            <span className="community-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="community-cta-row">
                    <a
                        href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                        target="_blank"
                        rel="noreferrer"
                        className="community-join-btn"
                    >
                        ⚡ JOIN COMMUNITY
                    </a>
                    <a
                        href="https://cybersphere-community.github.io/#/"
                        target="_blank"
                        rel="noreferrer"
                        className="community-visit-btn"
                    >
                        VISIT WEBSITE →
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Community;
