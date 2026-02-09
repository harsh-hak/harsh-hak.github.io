import React from 'react';

const Terminal = ({ title = "Info", children, className = "" }) => {
    return (
        <div className={`terminal-window ${className}`} style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 15, 15, 0.7)', // Glassmorphism
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: '#f0f0f0', // High contrast text
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.05)',
            marginBottom: '2rem',
            borderRadius: '15px',
            overflow: 'hidden',
            maxWidth: '100%',
            transition: 'all 0.3s ease'
        }}>
            <div className="terminal-header" style={{
                background: 'var(--primary-dim)',
                color: 'black',
                padding: '8px 15px',
                fontFamily: 'var(--font-main)',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                userSelect: 'none'
            }}>
                <span style={{ fontSize: '0.9rem' }}>{title}</span>
            </div>
            <div className="terminal-body" style={{ padding: '20px' }}>
                {children}
            </div>
        </div>
    );
}

export default Terminal;
