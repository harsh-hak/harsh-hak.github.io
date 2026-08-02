export const resumeData = {
  name: "Harsh Kanojia",
  role: "AI & Cybersecurity Researcher",
  contact: {
    linkedin: "harsh-kanojia369",
    github: "harsh-hak",
    email: "harsh.cyber@outlook.com",
    phone: "+91 8700158124",
    cv: "https://drive.google.com/file/d/1c5tuwwkcPsNyz0eEEKCYr835-tTGydc2/view?usp=sharing",
    topmate: "harsh_cyber",
    substack: "harshkanojia"
  },
  summary: "Results-driven Cyber Security Researcher and AI Security Enthusiast with hands-on experience in penetration testing, security automation, and AI-driven cybersecurity solutions. Experienced in developing and evaluating Large Language Models (LLMs) and Small Language Models (SLMs) for cybersecurity applications, including intelligent security automation and AI-assisted threat analysis. Skilled in vulnerability assessment, SOC operations, secure system design, and Python development, with a strong passion for offensive security, cybersecurity research, and building practical AI-powered defense solutions.",
  experience: [
    {
      role: "Junior Cybersecurity Lead",
      company: "Gopher Industry",
      location: "Remote, Australia",
      duration: "Nov 2025 - Present",
      description: [
        "Led vulnerability identification in infrastructure and applications using Nmap, Nessus, and Burp Suite, reducing exploitable weaknesses by 25%.",
        "Managed end-to-end incident response by validating SIEM alerts and mapping adversary behavior to MITRE ATT&CK framework."
      ]
    },
    {
      role: "Cyber Security Analyst",
      company: "BCA Labs",
      location: "Delhi, India",
      duration: "Jan 2025 - Present",
      description: [
        "Performed web application penetration testing using Burp Suite and OWASP methodologies.",
        "Identified high-risk vulnerabilities (SQLi, XSS, IDOR), reducing attack surface by 40%.",
        "Discovered and verified multiple web security bugs across production environments."
      ]
    },

  ],
  projects: [
    {
      title: "Sentry-AI",
      tech: "Wazuh SIEM, Ollama (Llama 3/Qwen), ChromaDB (RAG), Python",
      description: "An intelligent, offline cybersecurity copilot that integrates seamlessly with Wazuh SIEM. It ingests, normalizes, and analyzes security telemetry using local LLMs to eliminate alert fatigue, map threats to the MITRE ATT&CK framework, calculate dynamic risk scores, correlate temporal alerts, and generate reports.",
      features: [
        "Log Normalization Pipeline: Ingests and standardizes raw security events (Windows Event Logs, Linux Syslogs, Suricata, Sysmon, etc.) into a unified schema in real-time.",
        "Local Explainable AI Analysis: Evaluates logs using local Ollama models (e.g. Llama 3, Qwen) for threat analysis, providing human-readable explanations. Includes an automatic offline fallback simulator.",
        "MITRE ATT&CK Mapping: Translates ingested Wazuh events into specific MITRE Tactics & Techniques.",
        "Temporal Incident Correlation: Automatically groups related, discrete alerts (e.g. brute-force authentication followed by privilege escalation) occurring within specific timeframes into unified incidents.",
        "Dynamic Risk Scoring Engine: Computes risk scores from 0-100 by factoring in Wazuh rule severity, host asset weights, and historical attack frequencies.",
        "RAG-Powered Security Copilot Chat: An interactive conversational assistant utilizing Retrieval-Augmented Generation (RAG) over locally persisted threat intelligence databases (ChromaDB).",
        "Gateway Settings Cockpit: A real-time configuration manager to adjust, validate, and save API connections to Wazuh Managers, local Ollama hosts/models, and daemon simulators.",
        "Executive Reporting: Downloadable compliance and incident report summaries generated dynamically in PDF and DOCX formats."
      ],
      link: "https://github.com/harsh-hak/DPA-SOC-AI-Platform",
      demoLink: "https://harsh-hak.github.io/Sentry-AI/landing-page/"
    },
    {
      title: "ShadowScan",
      tech: "Asyncio, Python, OSI L4-L7, Recon Ops",
      description: "Advanced asynchronous reconnaissance engine architected for deep infrastructure auditing. Automates multi-vector service discovery and risk flagging across complex network topologies with high-concurrency scanning.",
      features: [
        "Asynchronous Architecture: High-concurrency network scanning utilizing Python's Asyncio library.",
        "Service Discovery: Automates service detection and protocol identification across OSI L4-L7 layers.",
        "Risk Flagging: Automatically highlights vulnerable services and configuration flaws during discovery."
      ],
      link: "https://github.com/harsh-hak/ShadowScan",
      demoLink: "https://harsh-hak.github.io/ShadowScan/"
    },
    {
      title: "Malware Analyzer X",
      tech: "Python, YARA, Heuristic Analysis, ELF Forensics",
      description: "Static forensics platform for automated Linux threat detection. Integrates YARA signature matching, entropy heuristic analysis, and VirusTotal intelligence to generate comprehensive behavioral scoring for ELF binaries.",
      features: [
        "Signature Matching: Direct integration with custom and community YARA rules for precise signature detection.",
        "Heuristic Scoring: Computes threat scores using entropy checks and header forensics for ELF binaries.",
        "Intel Integration: Combines local scan results with VirusTotal reputation APIs for enhanced validation."
      ],
      link: "https://github.com/harsh-hak/Malware-Analyzer-X",
      demoLink: "https://harsh-hak.github.io/Malware-Analyzer-X/"
    }
  ],
  education: [
    {
      degree: "Master of Cyber Security",
      institution: "Deakin University",
      notes: "WAM: 80%",
      year: "2025 - Present"
    },
    {
      degree: "Bachelor in Computer Applications (Cyber Security)",
      institution: "JIMS Engineering Management Technical Campus",
      notes: "CGPA: 8.2",
      year: "2022 - 2025"
    }
  ],
  skills: [
    "Malware Analysis", "Digital Forensics", "Threat Hunting", "Vulnerability Assessment",
    "Penetration Testing", "Incident Response", "SIEM/Log Analysis",
    "Python", "Bash", "Linux Administration",
    "Wireshark", "Nmap", "Nessus", "Burp Suite", "Metasploit",
    "Git", "YARA", "VirusTotal API", "AWS IAM",
    "Docker", "Privilege Escalation", "Red Teaming"
  ],
  publications: [
    {
      title: "A Python-Based Network Vulnerability Scanner Tool for Enhanced Cybersecurity",
      publisher: "IEEE",
      link: "https://ieeexplore.ieee.org/abstract/document/11115758",
      year: "2025"
    }
  ],
  certifications: [
    {
      title: "CompTIA Security+ (SY0-701)",
      issuer: "CompTIA",
      date: "June 2026",
      score: "834/900",
      candidateId: "COMP001023077268",
      code: "8113fb46c5f447cf94308689eeac98a7",
      verifyLink: "http://verify.CompTIA.org"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2026",
      verifyLink: "https://catalog-education.oracle.com/"
    },
    {
      title: "AWS Certifications",
      issuer: "Amazon Web Services (AWS)",
      date: "2026",
      verifyLink: "https://aws.amazon.com/verification"
    }
  ],
  researchAndPublications: [
    {
      type: "PAPER",
      title: "A Python-Based Network Vulnerability Scanner Tool for Enhanced Cybersecurity",
      publisher: "IEEE",
      conference: "International Conference on Computing for Sustainable Global Development (INDIACom)",
      link: "https://ieeexplore.ieee.org/abstract/document/11115758",
      year: "2025"
    },
    {
      type: "POSTER_PRESENTATION",
      title: "Packet by packet: navigating cybersecurity with wireshark (POSTER)",
      publisher: "AIMT",
      conference: "7th International Conference on Emerging Trends in Business Management and Cyber Security: The New Revolution of Industry 5.0",
      location: "Army Institute of Management & Technology, Greater Noida",
      year: "2024",
      date: "March 15-16, 2024"
    }
  ]
};
