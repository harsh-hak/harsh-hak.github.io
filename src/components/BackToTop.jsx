import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timeoutId = null;

        const toggleVisibility = () => {
            if (timeoutId) return;

            timeoutId = setTimeout(() => {
                if (window.scrollY > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }

                // Calculate scroll progress
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                setProgress(scrolled);

                timeoutId = null;
            }, 100); // Throttle to 100ms
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <svg className="progress-ring" width="44" height="44">
                <circle
                    className="progress-ring__circle"
                    stroke="#00ff41"
                    strokeWidth="2"
                    fill="transparent"
                    r="20"
                    cx="22"
                    cy="22"
                    style={{ strokeDashoffset: 125.6 - (125.6 * progress) / 100 }}
                />
            </svg>
            <FaArrowUp className="btt-icon" />
        </div>
    );
};

export default BackToTop;
