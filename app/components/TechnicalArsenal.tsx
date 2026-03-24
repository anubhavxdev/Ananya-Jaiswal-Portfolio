"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import powerAutomateIcon from "../assets/icons/microsoft-power-automate.svg";
import restApiIcon from "../assets/icons/rest-api-icon.svg";

type Category = "All" | "Languages" | "Frameworks" | "Databases" | "Tools";

interface Skill {
    name: string;
    category: Exclude<Category, "All">;
    icon?: string;
}

const skills: Skill[] = [
    // Languages
    { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python", category: "Languages", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "C", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "SQL", category: "Languages", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
    { name: "JavaScript", category: "Languages", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "HTML", category: "Languages", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },

    // Frameworks
    { name: "ReactJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "NodeJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "ExpressJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/express/eeeeee" },
    { name: "Tailwind CSS", category: "Frameworks", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },

    // Databases
    { name: "MongoDB", category: "Databases", icon: "https://cdn.simpleicons.org/mongodb/47A248" },

    // Tools / Platforms
    { name: "Git", category: "Tools", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", category: "Tools", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "VS Code", category: "Tools", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "Google Colab", category: "Tools", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
];

const categories: Category[] = [
    "All",
    "Languages",
    "Frameworks",
    "Databases",
    "Tools",
];

/* Simple abbreviation for the avatar circle inside each card */
function getInitials(name: string) {
    return name.slice(0, 2).toUpperCase();
}

export default function TechnicalArsenal() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All" ? skills : skills.filter((s) => s.category === active);

    return (
        <section className="arsenal-section" id="technical-arsenal">
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Skills</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                    <h1 className="section-title">
                        Technical <em>Skills</em>
                    </h1>
                </RevealOnScroll>

                {/* ── Filter bar ── */}
                <RevealOnScroll delay={0.25}>
                    <div className="arsenal-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`arsenal-filter-btn${active === cat ? " active" : ""}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* ── Skill grid ── */}
                <div className="arsenal-grid" key={active}>
                    {filtered.map((skill, i) => (
                        <RevealOnScroll key={skill.name} delay={i * 0.04}>
                            <div className="arsenal-card">
                                <div
                                    className="arsenal-card-icon"
                                    style={{
                                        overflow: "hidden",
                                        background: skill.icon ? "transparent" : "",
                                        color: skill.icon ? "transparent" : ""
                                    }}
                                >
                                    {skill.icon ? (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width="40"
                                            height="40"
                                            style={{ objectFit: "contain" }}
                                        />
                                    ) : (
                                        getInitials(skill.name)
                                    )}
                                </div>
                                <span className="arsenal-card-name">{skill.name}</span>
                                <span className="arsenal-card-cat">{skill.category}</span>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
