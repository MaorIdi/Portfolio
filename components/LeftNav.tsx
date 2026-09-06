"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/LeftNav.module.css";

const sections = [
  { id: "first", label: "ABOUT", short: "ABOUT" },
  { id: "second", label: "EXPERIENCE", short: "WORK" },
  { id: "third", label: "PROJECTS", short: "PROJ" },
  { id: "fourth", label: "CONTACT", short: "CONTACT" },
];

const LeftNav = () => {
  const [activeSection, setActiveSection] = useState("first");

  const handleScroll = () => {
    const sectionEls = document.querySelectorAll("section");
    let current: string | null = null;

    sectionEls.forEach((section) => {
      const sectionTop = section.offsetTop - 250;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current || "none");
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul>
        {sections.map(({ id, label, short }) => (
          <li key={id} className={activeSection === id ? styles.active : ""} onClick={() => handleClick(id)}>
            <i>
              <span className={styles.fullLabel}>{label}</span>
              <span className={styles.shortLabel}>{short}</span>
            </i>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNav;
