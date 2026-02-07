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
        { label: 'BLOG', href: '#blog' },
        { label: 'COMMUNITY', href: '#community' },
        // { label: 'CONTACT', href: '#contact' }
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="nav-brand">
                    Harsh Kanojia
                </div>

                {/* Mobile Toggle */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="mobile-toggle"
                >
                    {isOpen ? 'X' : '≡'}
                </div>

                {/* Nav Links */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setIsOpen(false)} // Close menu on click
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
