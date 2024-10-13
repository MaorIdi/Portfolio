"use client";
import React from "react";
import styles from "@/styles/TechButton.module.css";

type props = {
  title: string;
  path: string;
};

const TechButton = (props: props) => {
  const openPDF = () => {
    window.open(props.path, "_blank");
  };

  const [openResume, setOpenResume] = React.useState(false);

  return (
    <>
      {/* <button className={`${styles.button}`} onClick={openPDF}>
        <span>
          {props.title} ·{" "}
          <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
        </span>
      </button> */}

      <button
        className={`${styles.button}`}
        onClick={() => setOpenResume(!openResume)}
      >
        <span>
          {props.title} ·{" "}
          <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
        </span>
      </button>

      <div className={styles.resumeDiv}></div>
    </>
  );
};

export default TechButton;
