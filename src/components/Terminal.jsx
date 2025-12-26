import React from 'react';

const Terminal = ({ title = "C:\\SYSTEM\\ROOT", children, className = "" }) => {
    return (
        <div className={`terminal-window ${className}`} style={{
            border: '1px solid var(--primary-dim)',
            background: 'rgba(5, 5, 5, 0.95)', // Dark, almost opaque for readability
            color: '#f0f0f0', // High contrast text
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.05)',
            marginBottom: '2rem',
            borderRadius: '4px',
            overflow: 'hidden',
            maxWidth: '100%'
        }}>
            <div className="terminal-header" style={{
                background: 'var(--primary-dim)',
                color: 'black',
                padding: '8px 15px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                userSelect: 'none'
            }}>
                <span style={{ fontSize: '0.9rem' }}>{title}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#333', borderRadius: '50%' }}></div>
                    <div style={{ width: '12px', height: '12px', background: '#333', borderRadius: '50%' }}></div>
                    <div style={{ width: '12px', height: '12px', background: '#ff3b3b', borderRadius: '50%' }}></div>
                </div>
            </div>
            <div className="terminal-body" style={{ padding: '20px' }}>
                {children}
            </div>
        </div>
    );
}

export default Terminal;
