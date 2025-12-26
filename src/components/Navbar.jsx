import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'HOME', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SKILLS', href: '#skills' },
        { label: 'EXPERIENCE', href: '#experience' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'PUBLICATIONS', href: '#publications' },
        { label: 'COMMUNITY', href: '#community' },
        // { label: 'CONTACT', href: '#contact' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: 'rgba(8, 8, 8, 0.95)',
            borderBottom: '1px solid var(--primary-dim)',
            backdropFilter: 'blur(5px)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>
                    Harsh Kanojia
                </div>

                {/* Mobile Toggle */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none', // Hidden on desktop by default via CSS
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        color: 'var(--primary)',
                        padding: '5px'
                    }}
                    className="mobile-toggle"
                >
                    {isOpen ? 'X' : '≡'}
                </div>

                {/* Nav Links */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '20px' }}>
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setIsOpen(false)} // Close menu on click
                            style={{
                                fontSize: '0.9rem',
                                letterSpacing: '1px',
                                position: 'relative'
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .mobile-toggle {
                        display: block !important;
                    }
                    .nav-links {
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        height: calc(100vh - 60px);
                        flex-direction: column;
                        background: rgba(8, 8, 8, 0.98);
                        border-bottom: 1px solid var(--primary-dim);
                        padding: 2rem 0;
                        gap: 2rem !important;
                        align-items: center;
                        justify-content: center;
                        display: none !important;
                        backdrop-filter: blur(10px);
                    }
                    .nav-links.open {
                        display: flex !important;
                    }
                    .nav-link {
                        font-size: 1.2rem !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
