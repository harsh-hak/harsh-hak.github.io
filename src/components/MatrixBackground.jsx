import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 90;
const CONNECTION_DIST = 160;
const SPEED = 0.4;

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        canvas.width = width;
        canvas.height = height;

        // Initialise particles
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * SPEED,
            vy: (Math.random() - 0.5) * SPEED,
            r: Math.random() * 1.5 + 1,
            pulse: Math.random() * Math.PI * 2, // phase offset
        }));

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update + draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Pulsing glow radius
                const glowR = p.r + Math.sin(p.pulse) * 0.1;
                const alpha = 0.2 + Math.sin(p.pulse) * 0.1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
                ctx.shadowColor = '#00ff41';
                ctx.shadowBlur = 0;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DIST) {
                        const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.18;

                        // Alternate some lines to a blue tint for depth
                        const isBlue = (i + j) % 7 === 0;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = isBlue
                            ? `rgba(0, 184, 255, ${lineAlpha * 1.4})`
                            : `rgba(0, 255, 65, ${lineAlpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }, 100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
                background: '#000000',
            }}
        />
    );
};

export default MatrixBackground;
