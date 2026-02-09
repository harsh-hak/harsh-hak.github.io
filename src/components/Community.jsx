import React from 'react';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Community = () => {
    return (
        <section id="community" className="container community-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> COMMUNITY
                </h2>

                <div className="interactive-card community-card">
                    <Terminal title="community_invite.exe">
                        <div className="community-content">
                            <h3 className="community-header">
                                JOIN_CYBER_COMMUNITY
                            </h3>

                            <p className="community-desc">
                                Connect with security enthusiasts to share knowledge, discuss CVEs, and get job updates.
                            </p>

                            <div className="community-btn-wrapper">
                                <a
                                    href="https://cybersphere-community.github.io/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="community-invite-btn"
                                >
                                    INITIALIZE_UPLINK
                                </a>
                            </div>
                        </div>
                    </Terminal>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Community;
