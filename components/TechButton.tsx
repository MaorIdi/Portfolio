"use client";
import React, { useState } from "react";
import styles from "@/styles/TechButton.module.css";
type props = {
  title: string;
  document: string;
};

const TechButton = (props: props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <a href="/resume" target="_blank" className={styles.buttonA}>
        <button className={styles.button} onClick={() => setClicked(!clicked)}>
          <span>
            {props.title} ·{" "}
            <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
          </span>
        </button>
      </a>
    </>
  );
};

export default TechButton;
