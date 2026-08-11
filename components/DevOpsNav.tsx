"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/LeftNav.module.css";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

const DevOpsNav = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = () => {
    const sectionEls = document.querySelectorAll("section");
    let current: string | null = null;

    sectionEls.forEach((section) => {
      const sectionTop = section.offsetTop - 250;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current || "about");
  };

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id} className={activeSection === id ? styles.active : ""} onClick={() => handleClick(id)}>
            <i>{label}</i>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DevOpsNav;
