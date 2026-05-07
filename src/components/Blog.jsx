import React, { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';
import Terminal from './Terminal';
import { FaDev } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getOptimizedImageUrl = (url) => {
        if (!url) return 'https://via.placeholder.com/640x360/000000/00ff41?text=NO_IMAGE_FOUND';
        // Optimize sizes to reduce file sizes
        return url.replace('width=1000', 'width=600');
    };

    const normalizeDevToPost = (post) => ({
        id: `devto-${post.id}`,
        title: post.title,
        image: post.social_image || post.cover_image,
        publishedAt: new Date(post.published_at).getTime(),
        formattedDate: `${post.readable_publish_date}, ${new Date(post.published_at).getFullYear()}`,
        readingTime: `${post.reading_time_minutes} min read`,
        description: post.description,
        tags: post.tag_list || [],
        url: post.url,
        source: 'devto'
    });

    const normalizeSubstackPost = (post) => {
        // Calculate read time roughly (200 wpm)
        const wordCount = post.content ? post.content.split(/\s+/).length : 0;
        const readTime = Math.max(1, Math.ceil(wordCount / 200));
        
        // Strip HTML from description
        const tmp = document.createElement("DIV");
        tmp.innerHTML = post.description || '';
        let cleanDesc = tmp.textContent || tmp.innerText || "";
        if (cleanDesc.length > 150) cleanDesc = cleanDesc.substring(0, 147) + '...';

        const pubDate = new Date(post.pubDate);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        return {
            id: `substack-${post.guid || post.link}`,
            title: post.title,
            image: post.thumbnail,
            publishedAt: pubDate.getTime(),
            formattedDate: `${months[pubDate.getMonth()]} ${pubDate.getDate()}, ${pubDate.getFullYear()}`,
            readingTime: `${readTime} min read`,
            description: cleanDesc,
            tags: post.categories && post.categories.length > 0 ? post.categories : ['newsletter'],
            url: post.link,
            source: 'substack'
        };
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const [devToRes, substackRes] = await Promise.all([
                    fetch('https://dev.to/api/articles?username=harsh_hak&per_page=2'),
                    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://harshkanojia.substack.com/feed')
                ]);

                let devToData = [];
                if (devToRes.ok) {
                    devToData = await devToRes.json();
                }

                let substackData = { items: [] };
                if (substackRes.ok) {
                    substackData = await substackRes.json();
                }

                const normalizedDevTo = devToData.map(normalizeDevToPost);
                // Grab the 2 most recent from Substack
                const normalizedSubstack = (substackData.items || []).slice(0, 2).map(normalizeSubstackPost);

                // Combine and sort by publish date descending
                let combinedPosts = [...normalizedDevTo, ...normalizedSubstack].sort((a, b) => b.publishedAt - a.publishedAt);
                
                // Show up to 3 recent posts total
                combinedPosts = combinedPosts.slice(0, 3);

                setPosts(combinedPosts);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section id="blog" className="container blog-container">
            <FadeInSection>
                <h2 className="section-title">
                    <span style={{ color: 'var(--primary)' }}>//</span> LATEST_INTEL
                </h2>

                {loading ? (
                    <div className="terminal-loader">
                        <span className="blink">FETCHING_DATA_FROM_DEV.TO_AND_SUBSTACK...</span>
                    </div>
                ) : (
                    <div className="blog-grid" itemScope itemType="https://schema.org/Blog">
                        <meta itemProp="name" content="Harsh Kanojia's Cyber Security Blog" />
                        <meta itemProp="description" content="Latest insights on cyber security, malware analysis, and threat detection." />

                        {posts.map(post => (
                            <article key={post.id} className="blog-card interactive-card" itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting">
                                <meta itemProp="mainEntityOfPage" content={post.url} />
                                <div className="blog-image-wrapper">
                                    <img
                                        src={getOptimizedImageUrl(post.image)}
                                        alt={post.title}
                                        className="blog-image"
                                        loading="lazy"
                                        decoding="async"
                                        width="640"
                                        height="360"
                                        itemProp="image"
                                    />
                                    <div className="blog-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title" itemProp="headline">{post.title}</h3>
                                    <div className="blog-meta">
                                        <span className="blog-date" itemProp="datePublished" content={new Date(post.publishedAt).toISOString()}>
                                            {post.formattedDate}
                                        </span>
                                        <span className="blog-read-time">{post.readingTime}</span>
                                        <meta itemProp="author" content="Harsh Kanojia" />
                                    </div>
                                    <p className="blog-desc" itemProp="description">
                                        {post.description}
                                    </p>
                                    <div className="blog-tags">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="blog-tag">#{tag}</span>
                                        ))}
                                    </div>
                                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="read-more-btn" itemProp="url">
                                        {post.source === 'substack' ? <SiSubstack className="dev-icon" /> : <FaDev className="dev-icon" />} READ_FULL_ARTICLE
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                <div className="view-all-container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://dev.to/harsh_hak" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                        VIEW_ALL_ARTICLES_ON_DEV.TO &rarr;
                    </a>
                    <a href="https://harshkanojia.substack.com/" target="_blank" rel="noopener noreferrer" className="view-all-btn" style={{ background: 'var(--primary)', color: 'black' }}>
                        SUBSCRIBE_TO_SUBSTACK &rarr;
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Blog;

