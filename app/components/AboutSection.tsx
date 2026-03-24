"use client";

import RevealOnScroll from "./RevealOnScroll";
import TechnicalArsenal from "./TechnicalArsenal";

const milestones = [
    { title: "Hackathon Winner", desc: "InnovateX Hackathon at IIIT Kalyani." },
    { title: "AWS Cloud Mentor", desc: "Guided 50+ students in cloud sessions." },
    { title: "Predictive Scaling Engine", desc: "ML-based infrastructure automation." },
    { title: "Warehouse Routing System", desc: "Shortest path optimization with Dijkstra." },
    { title: "Data Reconciliation", desc: "Ensuring accuracy for Deloitte datasets." },
    { title: "Full-Stack Developer", desc: "Actively building and deploying modern apps." },
];

export default function AboutSection() {
    return (
        <>
            {/* Fragments / Milestones Marquee */}
            <section className="marquee-section" id="milestones">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Milestones</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={1}>
                        <h1 className="section-title">
                            Fragments <em>of me.</em>
                        </h1>
                    </RevealOnScroll>
                </div>

                <div className="marquee-wrapper">
                    {[...milestones, ...milestones].map((m, i) => (
                        <div className="marquee-item" key={i}>
                            <h4>{m.title}</h4>
                            <p>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About / Personal Story */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <div className="about-grid">
                        <RevealOnScroll>
                            <div className="about-image-container">
                                <img src="/jaiswal456.png" alt="Ananya Jaiswal portrait" />
                            </div>
                        </RevealOnScroll>

                        <div>
                            <div className="about-highlights">
                                <RevealOnScroll>
                                    <div className="about-highlight-item">
                                        <h3>DSA Enthusiast</h3>
                                        <p>
                                            Mastering core data structures and algorithms to solve complex
                                            real-world problems with optimized performance.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={1}>
                                    <div className="about-highlight-item">
                                        <h3>Full-stack Developer</h3>
                                        <p>
                                            Building comprehensive solutions from React.js frontends to
                                            Node.js backends and MongoDB databases.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={2}>
                                    <div className="about-highlight-item">
                                        <h3>Community Mentor</h3>
                                        <p>
                                            Passionate about sharing knowledge, having guided 50+ students
                                            through AWS cloud computing and coding fundamentals.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={3}>
                                    <div className="about-highlight-item">
                                        <h3>Continuous Learner</h3>
                                        <p>
                                            Always adapting to new technologies, from ML-based infrastructure
                                            to advanced system integration and consulting workflows.
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            </div>

                            <RevealOnScroll delay={4}>
                                <p className="about-bio">
                                    I&apos;m a Computer Science student at Lovely Professional University
                                    with a deep focus on software engineering and innovative problem-solving.
                                    My experience ranges from engineering predictive autoscaling engines
                                    using Machine Learning to optimizing delivery routing systems with
                                    Dijkstra’s algorithm. I believe in the power of clean code and efficient
                                    data structures to drive meaningful digital transformation.
                                </p>
                                <p className="about-love">I love what I build!</p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technical Arsenal Section */}
            <TechnicalArsenal />

        </>
    );
}
