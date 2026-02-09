import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // using counterapi.dev
        // namespace: harsh-hak.github.io, key: visits
        fetch('https://api.counterapi.dev/v1/harsh-hak.github.io/visits/up')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching visitor count:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="visitor-counter">
            <span className="visitor-text">...</span>
        </div>
    );

    return (
        <div className="visitor-counter">
            <span className="visitor-text">Visits: </span>
            <span className="visitor-number">{count}</span>
        </div>
    );
};

export default VisitorCounter;
