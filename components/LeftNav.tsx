"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/LeftNav.module.css";

const LeftNav = () => {
  const [activeSection, setActiveSection] = useState("first");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current: string | null = null;

    sections.forEach((section) => {
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
        <li className={activeSection === "first" ? styles.active : ""}>
          <i onClick={() => handleClick("first")}>ABOUT</i>
        </li>
        <li className={activeSection === "second" ? styles.active : ""}>
          <i onClick={() => handleClick("second")}>EXPERIENCE</i>
        </li>
        <li className={activeSection === "third" ? styles.active : ""}>
          <i onClick={() => handleClick("third")}>PROJECTS</i>
        </li>
        <li className={activeSection === "fourth" ? styles.active : ""}>
          <i onClick={() => handleClick("fourth")}>CONTACT</i>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
