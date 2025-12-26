import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ children, delay = '0ms' }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: delay }}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
