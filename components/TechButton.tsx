"use client";
import React from "react";
import styles from "@/styles/TechButton.module.css";

type props = {
  title: string;
  englishPath: string;
};

const TechButton = (props: props) => {
  const openPdf = () => {
    window.open(props.englishPath, "_blank");
  };

  return (
    <>
      <button
        className={`${styles.button}`}
        onClick={openPdf}
      >
        <span>
          {props.title} ·{" "}
          <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
        </span>
      </button>
    </>
  );
};

export default TechButton;
