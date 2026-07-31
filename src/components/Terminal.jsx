import React from 'react';

const Terminal = ({ title = "Info", children, className = "" }) => {
    return (
        <div className={`terminal-window ${className}`} style={{
            border: '2px solid var(--secondary)',
            background: 'var(--surface)',
            color: 'var(--text)',
            boxShadow: '4px 4px 0px var(--secondary)',
            marginBottom: '2rem',
            borderRadius: '0px',
            overflow: 'hidden',
            maxWidth: '100%',
            transition: 'all 0.15s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div className="terminal-header" style={{
                background: '#000000', // Stark brutalist black header
                color: '#ffffff', // High contrast white text
                padding: '10px 15px',
                fontFamily: 'var(--font-main)',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                userSelect: 'none',
                borderBottom: '2px solid var(--secondary)'
            }}>
                <span style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>{title}</span>
            </div>
            <div className="terminal-body" style={{ 
                padding: '30px 20px 20px 20px', // Extra top padding to improve heading rhythm
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {children}
            </div>
        </div>
    );
}

export default Terminal;
