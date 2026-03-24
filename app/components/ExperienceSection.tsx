"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

import reactCert from "../assets/certificates/reactjs.png";
import cloudCert from "../assets/certificates/nptelcloudananya.png";
import llmCert from "../assets/certificates/LLm.png";
import oracleCert from "../assets/certificates/oracle.png";



const education = [
    {
        school: "Lovely Professional University",
        degree: "Bachelor of Technology",
        major: "Computer Science and Engineering",
        location: "Punjab, India",
        duration: "Aug. 2023 — Present",
    },
    {
        school: "DAV Public School",
        degree: "Intermediate",
        major: "Science",
        location: "Uttar Pradesh, India",
        duration: "2021 — 2023",
    },
];

const internships = [
    {
        role: "Summer Trainee – Data Structures and Algorithms",
        company: "Center of Professional Enhancement",
        location: "Punjab, IN",
        duration: "Jun. 2025 – Jul. 2025",
        points: [
            "Built a Warehouse Routing System implementing Dijkstra’s Algorithm to compute shortest paths and optimize delivery efficiency.",
            "Implemented core data structures including graphs, stacks, queues and trees to solve real-world problems.",
            "Applied Object-Oriented Programming principles to design modular and scalable system components.",
            "Solved structured coding assignments and algorithmic challenges demonstrating strong problem-solving ability.",
        ],
    },
    {
        role: "Deloitte Experience Program",
        company: "Deloitte",
        location: "Remote",
        duration: "Apr. 2025 - Jun. 2025",
        points: [
            "Performed data reconciliation for large datasets to ensure accuracy and consistency across Deloitte platforms.",
            "Analyzed business requirements for digital transformation projects and proposed scalable tech solutions.",
            "Collaborated with cross-functional teams in consulting workflows to streamline client deliverables.",
        ],
    },
];

const tools = [
    "Java",
    "Node.js",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Express.js",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Git",
    "Linux",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Nginx",
    "Sequelize",
    "Prisma",
    "Framer Motion",
    "Three.js",
    "Tailwind CSS",
    "Figma",
];

const awards = [
    {
        title: "AWS Cloud Mentor",
        org: "Guided 50+ students during hands-on AWS cloud computing and coding sessions.",
        year: "Mentorship",
    },
    {
        title: "Hackathon Winner",
        org: "Winner of a Hackathon at IIIT Kalyani, competing against top student developers with innovative AI solutions.",
        year: "Winner",
    },
    {
        title: "Full-Stack Developer",
        org: "Actively developing and deploying modern full-stack applications with optimal performance.",
        year: "Active",
    },
];


const certifications = [
    {
        title: "Oracle AI Vector Search",
        org: "Certified Professional",
        year: "September 2025",
        image: oracleCert,
        issuedBy: "Oracle University",
        monthYear: "September 2025",
        skills: ["AI Vector Search", "Oracle Database", "Machine Learning Infrastructure"],
        link: "https://education.oracle.com/oracle-ai-vector-search-certified-professional/pP_OAVSCP"
    },
    {
        title: "Cloud Computing",
        org: "Elite Certificate",
        year: "April 2025",
        image: cloudCert,
        issuedBy: "NPTEL / IIT Kharagpur",
        monthYear: "Jan-Apr 2025",
        skills: ["Cloud Architecture", "Deployment Strategies", "Distributed Systems"],
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS107S145870078310493199"
    },
    {
        title: "Frontend Developer (React)",
        org: "Role Certification",
        year: "February 2026",
        image: reactCert,
        issuedBy: "HackerRank",
        monthYear: "February 2026",
        skills: ["React.js", "Frontend Development", "JavaScript", "Problem Solving"],
        link: "https://www.hackerrank.com/certificates/5534DAA6DD6F"
    },
    {
        title: "LLM Prompt Engineering",
        org: "Course Completion",
        year: "August 2025",
        image: llmCert,
        issuedBy: "Infosys Springboard",
        monthYear: "August 2025",
        skills: ["Prompt Engineering", "Generative AI", "LLMs", "ChatGPT-4"],
        link: "https://verify.onwingspan.com"
    },
];

const CertificateCard = ({ cert, index }: any) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <RevealOnScroll delay={index * 0.12}>
            <div 
                className={`cert-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="cert-card-inner">
                    <div className="cert-card-front">
                        <div className="cert-card-img">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="cert-card-content">
                            <div className="cert-card-header">
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <span className="cert-card-year">{cert.year}</span>
                            </div>
                            <p className="cert-card-org">{cert.org}</p>
                        </div>
                    </div>
                    <div className="cert-card-back">
                        <h3 className="cert-card-back-title">{cert.title}</h3>
                        <p className="cert-card-back-issued">Issued by: {cert.issuedBy}</p>
                        <p className="cert-card-back-date">{cert.monthYear}</p>
                        <div className="cert-card-back-skills">
                            {cert.skills.map((skill: string, idx: number) => (
                                <span key={idx}>{skill}</span>
                            ))}
                        </div>
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cert-card-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Optional: logic to open link if valid
                            }}
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default function ExperienceSection() {
    return (
        <>
            {/* Certifications */}
            <section className="certs-section" id="certifications">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Certifications</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Certifications.
                        </h1>
                    </RevealOnScroll>

                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <CertificateCard key={i} cert={cert} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards & Achievements */}
            <section className="awards-section" id="awards">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Recognition</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Awards & <em>achievements.</em>
                        </h1>
                    </RevealOnScroll>

                    <div className="awards-list">
                        {awards.map((award, i) => (
                            <RevealOnScroll key={i} delay={i * 0.12}>
                                <div className="awards-row">
                                    <span className="awards-row-year">{award.year}</span>
                                    <div className="awards-row-body">
                                        <h3 className="awards-row-title">{award.title}</h3>
                                        <p className="awards-row-desc">{award.org}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            {/* Internships */}
            <section className="internships-section" id="internships">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Professional Experience</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Internships.
                        </h1>
                    </RevealOnScroll>

                    <div className="internships-list">
                        {internships.map((job, i) => (
                            <RevealOnScroll key={i} delay={i * 0.12}>
                                <div className="internship-item">
                                    <div className="internship-header">
                                        <div className="internship-title-group">
                                            <h3 className="internship-role">{job.role}</h3>
                                            <p className="internship-company">{job.company}</p>
                                        </div>
                                        <div className="internship-meta">
                                            <span className="internship-duration">{job.duration}</span>
                                            <span className="internship-location">{job.location}</span>
                                        </div>
                                    </div>
                                    <ul className="internship-points">
                                        {job.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>



            {/* <hr className="section-divider" /> */}

        </>
    );
}
