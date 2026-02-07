import React, { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';
import Terminal from './Terminal';
import { FaDev } from 'react-icons/fa';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getOptimizedImageUrl = (url) => {
        if (!url) return 'https://via.placeholder.com/600x300/000000/00ff41?text=NO_IMAGE_FOUND';
        // DEV.to images often come with scale parameters.
        // We replace width=1000 with width=600 to reduce file size for the grid.
        return url.replace('width=1000', 'width=600');
    };

    useEffect(() => {
        // Optimization: Fetch only the 2 posts we need directly from the API
        fetch('https://dev.to/api/articles?username=harsh_hak&per_page=2')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blog posts:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="blog" className="container blog-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> LATEST_INTEL
                </h2>

                {loading ? (
                    <div className="terminal-loader">
                        <span className="blink">FETCHING_DATA_FROM_DEV.TO...</span>
                    </div>
                ) : (
                    <div className="blog-grid">
                        {posts.map(post => (
                            <div key={post.id} className="blog-card interactive-card">
                                <div className="blog-image-wrapper">
                                    <img
                                        src={getOptimizedImageUrl(post.social_image || post.cover_image)}
                                        alt={post.title}
                                        className="blog-image"
                                        loading="lazy"
                                        decoding="async"
                                        width="600"
                                        height="300"
                                    />
                                    <div className="blog-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    <div className="blog-meta">
                                        <span className="blog-date">{post.readable_publish_date}, {new Date(post.published_at).getFullYear()}</span>
                                        <span className="blog-read-time">{post.reading_time_minutes} min read</span>
                                    </div>
                                    <p className="blog-desc">
                                        {post.description}
                                    </p>
                                    <div className="blog-tags">
                                        {post.tag_list.map((tag, idx) => (
                                            <span key={idx} className="blog-tag">#{tag}</span>
                                        ))}
                                    </div>
                                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                                        <FaDev className="dev-icon" /> READ_FULL_ARTICLE
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="view-all-container">
                    <a href="https://dev.to/harsh_hak" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                        VIEW_ALL_ARTICLES_ON_DEV.TO &rarr;
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Blog;
