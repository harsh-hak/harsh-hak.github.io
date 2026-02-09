import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const columns = Math.floor(width / 20);
        const drops = new Array(columns).fill(1);

        const charArray = ['0', '1', 'H', 'A', 'C', 'K', 'E', 'R', 'X', 'Z', 'S', 'E', 'C', 'µ', '¥', '€', '£'];

        const draw = () => {
            // Semi-transparent black to create fade trail - higher opacity means faster fade (less clutter)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = 'rgba(16, 185, 129, 0.15)'; // Subtle Emerald
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reset drop to top randomly or if it passes bottom
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 75); // Slower animation

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-initialize drops on resize to avoid gaps
            const newColumns = Math.floor(width / 20);
            if (newColumns > drops.length) {
                const diff = newColumns - drops.length;
                for (let j = 0; j < diff; j++) drops.push(1);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
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
                background: '#000'
            }}
        />
    );
};

export default MatrixBackground;
