import React from 'react';
import Terminal from './Terminal';

const Community = () => {
    return (
        <section id="community" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> COMMUNITY_UPLINK
            </h2>

            <Terminal title="MSG: OPEN_INVITATION">
                <div style={{ padding: '0 1rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                        🚀 JOIN_CYBER_COMMUNITY 🔒
                    </h3>

                    <p style={{ color: '#eee', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                        Connect with security enthusiasts to share knowledge, discuss CVEs, and get job updates.
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                        <a
                            href="https://forms.gle/xsLyYgHzMiYsp8zx6"
                            target="_blank"
                            rel="noreferrer"
                            style={buttonStyle}
                            onMouseEnter={e => {
                                e.target.style.background = 'var(--primary)';
                                e.target.style.color = '#000';
                                e.target.style.boxShadow = '0 0 20px var(--primary)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = 'rgba(5, 5, 5, 0.9)';
                                e.target.style.color = '#fff';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            👉 JOIN_PROTOCOL_INITIATED
                        </a>
                    </div>
                </div>
            </Terminal>
        </section>
    );
};

const buttonStyle = {
    display: 'inline-block',
    padding: '12px 25px',
    border: '1px solid var(--primary)',
    background: 'rgba(5, 5, 5, 0.9)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: '0.3s',
    borderRadius: '2px'
};

export default Community;
