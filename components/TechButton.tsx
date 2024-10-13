"use client";
import React from "react";
import styles from "@/styles/TechButton.module.css";

type props = {
  title: string;
  hebrewPath: string;
  englishPath: string;
};

const TechButton = (props: props) => {
  const openPdfHebrew = () => {
    window.open(props.hebrewPath, "_blank");
  };
  const openPdfEnglish = () => {
    window.open(props.englishPath, "_blank");
  };
  const [openResume, setOpenResume] = React.useState(false);

  return (
    <>
      <button
        className={`${styles.button}`}
        onClick={() => setOpenResume(!openResume)}
      >
        <span>
          {props.title} ·{" "}
          <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
        </span>
      </button>

      {openResume ? (
        <div
          className={styles.outClick}
          onClick={() => setOpenResume(false)}
        ></div>
      ) : (
        ""
      )}
      {openResume ? (
        <div className={styles.resumeDiv}>
          <ul className={styles.resumeUl}>
            <li onClick={openPdfHebrew}> 🇮🇱 Hebrew</li>
            <li onClick={openPdfEnglish}> 🇺🇸 English</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TechButton;
