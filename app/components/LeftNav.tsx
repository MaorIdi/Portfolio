"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/LeftNav.module.css";
import Link from "next/link";
const LeftNav = () => {
  const [activeSection, setActiveSection] = useState("first");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current || "first");
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
        <li className={activeSection === "first" ? "active" : ""}>
          <Link href="#first">ABOUT</Link>
        </li>
        <li className={activeSection === "second" ? "active" : ""}>
          <Link href="#second">EXPERIENCE</Link>
        </li>
        <li className={activeSection === "third" ? "active" : ""}>
          <Link href="#third">PROJECTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
