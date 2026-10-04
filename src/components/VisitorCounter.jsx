import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        // Skip counting on localhost — only track real visitors
        const isLocal = window.location.hostname === 'localhost'
            || window.location.hostname === '127.0.0.1';

        // Only count once per browser session (not every page refresh)
        const alreadyCounted = sessionStorage.getItem('visit_counted');

        const fetchCount = (increment) => {
            const endpoint = increment
                ? 'https://api.counterapi.dev/v1/harsh-hak.github.io/visits/up'
                : 'https://api.counterapi.dev/v1/harsh-hak.github.io/visits';

            fetch(endpoint)
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    return res.json();
                })
                .then(data => {
                    if (typeof data?.count === 'number') {
                        setCount(data.count);
                        if (increment) sessionStorage.setItem('visit_counted', 'true');
                    } else {
                        setCount(null);
                    }
                })
                .catch(() => setCount(null));
        };

        if (!isLocal && !alreadyCounted) {
            // New real visitor — increment and record
            fetchCount(true);
        } else {
            // Dev environment or already counted — just read the count
            fetchCount(false);
        }
    }, []);

    if (typeof count !== 'number') return null;

    return (
        <div className="visitor-counter">
            <span className="visitor-text">Visitors: </span>
            <span className="visitor-number">{count.toLocaleString()}</span>
        </div>
    );
};

export default VisitorCounter;
