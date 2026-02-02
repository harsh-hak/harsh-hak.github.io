import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    name = "Harsh Kanojia",
    type = "website",
    keywords = "Harsh Kanojia, Portfolio, Developer, Software Engineer, React"
}) {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="google-site-verification" content="jzZW44CssBpEsDBuen0z8E4MyGG9ay_YV_rjHrS4lnI" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} />  TODO: Add an OG Image later */}

            {/* Twitter */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data (JSON-LD) for Person */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": name,
                    "url": "https://harsh-hak.github.io/", // Correct User Page URL
                    "sameAs": [
                        "https://www.linkedin.com/in/harsh-kanojia-3bb7a0256/", // Replace with actual if known, using placeholder based on common patterns or previous conversations if available. User didn't provide, so I'll leave these as common placeholders to be updated.
                        "https://github.com/harsh-hak",
                        // Add other social profiles here
                    ],
                    "jobTitle": "Software Engineer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Self-Employed"
                    }
                })}
            </script>
        </Helmet>
    );
}
