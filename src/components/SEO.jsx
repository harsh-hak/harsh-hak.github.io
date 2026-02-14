import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    name = "Harsh Kanojia",
    type = "website",
    keywords = "Harsh Kanojia, Cyber Security Researcher, Malware Analyst, Security Specialist, Penetration Testing, Python, Digital Forensics"
}) {
    const siteUrl = "https://harsh-hak.github.io/";
    // profileImg is used in JSON-LD but defined there directly if needed, or we can use the variable if we pass it into the JSON.
    // The previous edit defined it but didn't use it in the JSON-LD correctly or it was shadowed.
    // Let's check the previous file content. 
    // Ah, I see in my previous edit I used "https://harsh-hak.github.io/assets/profile.jpg" directly in the JSON-LD. 
    // I should use the variable or remove it. I'll remove it to keep it clean, as I hardcoded it in the JSON-LD.


    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={name} />
            <link rel="canonical" href={siteUrl} />
            <meta name="theme-color" content="#00ff41" />

            <meta name="google-site-verification" content="jzZW44CssBpEsDBuen0z8E4MyGG9ay_YV_rjHrS4lnI" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://harsh-hak.github.io/og-image.jpg" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content={name} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:creator" content="@harsh_hak" /> {/* Add specific handle if exists */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://harsh-hak.github.io/og-image.jpg" />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify([
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Harsh Kanojia - Cyber Security Portfolio",
                        "url": siteUrl,
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": `${siteUrl}?q={search_term_string}`,
                            "query-input": "required name=search_term_string"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": name,
                        "url": siteUrl,
                        "image": "https://harsh-hak.github.io/assets/profile.jpg",
                        "sameAs": [
                            "https://www.linkedin.com/in/harsh-kanojia-3bb7a0256/",
                            "https://github.com/harsh-hak",
                            "https://topmate.io/harsh_kanojia"
                        ],
                        "jobTitle": "Cyber Security Researcher",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Self-Employed"
                        },
                        "description": "Cyber Security Researcher and Malware Analyst specializing in threat detection, digital forensics, and secure development.",
                        "knowsAbout": ["Cyber Security", "Malware Analysis", "Digital Forensics", "Network Security", "Penetration Testing"]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": siteUrl
                            }
                        ]
                    }
                ])}
            </script>
        </Helmet>
    );
}
