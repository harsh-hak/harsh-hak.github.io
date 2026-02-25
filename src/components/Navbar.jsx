import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'HOME', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SKILLS', href: '#skills' },
        { label: 'EXPERIENCE', href: '#experience' },
        { label: 'COMMUNITY', href: '#community' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'PUBLICATIONS', href: '#publications' },
        { label: 'BLOG', href: '#blog' },
        // { label: 'CONTACT', href: '#contact' }
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const target = document.querySelector(href);
        if (!target) return;

        const navbarHeight = 64; // px — matches fixed navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({ top, behavior: 'smooth' });
    };

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
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    role="button"
                    tabIndex="0"
                >
                    {isOpen ? '✕' : '≡'}
                </div>

                {/* Nav Links */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, item.href)}
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
