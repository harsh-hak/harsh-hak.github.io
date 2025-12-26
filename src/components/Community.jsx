import React from 'react';
import Terminal from './Terminal';

const Community = () => {
    return (
        <section id="community" className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span style={{ color: 'var(--primary)' }}>&gt;</span> COMMUNITY_UPLINK
            </h2>

            <Terminal title="MSG: OPEN_INVITATION">
                <div style={{ padding: '0 1rem' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                        🚀 You’re Invited to Join Our Cyber Security Community! 🔒
                    </h3>

                    <p style={{ color: '#eee', marginBottom: '1rem', lineHeight: '1.6' }}>
                        Hey there 👋,<br />
                        If you’re passionate about Cyber Security, this is the place for you!
                        We’ve created a WhatsApp community where we:
                    </p>

                    <ul style={{ color: '#eee', lineHeight: '1.8', marginBottom: '2rem', listStyle: 'none', paddingLeft: '10px' }}>
                        <li>💡 Share knowledge, tips & tools</li>
                        <li>📢 Discuss the latest cyber threats & CVEs</li>
                        <li>🛠️ Help each other with resources & guidance</li>
                        <li>🤝 Network with fellow security enthusiasts</li>
                        <li>💼 Jobs and Internships Updates</li>
                    </ul>

                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
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
                            👉 JOIN_PROTOCOL_INITiATED
                        </a>
                    </div>

                    <p style={{ color: '#aaa', fontSize: '0.9rem', textAlign: 'center', marginTop: '1.5rem' }}>
                        Let’s learn, connect, and grow together in the world of cybersecurity.
                    </p>
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
