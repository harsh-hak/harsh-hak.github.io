import React from 'react';
import Terminal from './Terminal';
import FadeInSection from './FadeInSection';

const Community = () => {
    return (
        <section id="community" className="container" style={{ padding: '4rem 0' }}>
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> COMMUNITY
                </h2>

                <div className="interactive-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Terminal title="community_invite.exe">
                        <div style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(rgba(0,0,0,0), rgba(0, 255, 65, 0.05))' }}>
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                                background: 'linear-gradient(to right, #fff, var(--primary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 'bold'
                            }}>
                                JOIN_CYBER_COMMUNITY
                            </h3>

                            <p style={{ color: '#ccc', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                Connect with security enthusiasts to share knowledge, discuss CVEs, and get job updates.
                            </p>

                            <div style={{ marginBottom: '1rem' }}>
                                <a
                                    href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={buttonStyle}
                                    onMouseEnter={e => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 0 30px var(--primary-dim)';
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.2)';
                                    }}
                                >
                                    CLICK_HERE_TO_JOIN
                                </a>
                            </div>
                        </div>
                    </Terminal>
                </div>
            </FadeInSection>
        </section>
    );
};

const buttonStyle = {
    display: 'inline-block',
    padding: '15px 40px',
    background: 'var(--primary)',
    color: '#000',
    textDecoration: 'none',
    fontWeight: '900',
    letterSpacing: '1px',
    transition: '0.3s',
    borderRadius: '30px',
    boxShadow: '0 0 15px rgba(0, 255, 65, 0.2)',
    fontSize: '1rem',
    textTransform: 'uppercase'
};

export default Community;
