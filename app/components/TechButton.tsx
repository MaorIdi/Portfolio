"use client";
import React, { useState } from "react";
import styles from "@/app/styles/TechButton.module.css";
type props = {
  title: string;
  document: string;
};

const TechButton = (props: props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setClicked(!clicked)}>
        {props.title} ·{" "}
        <i className={`fa-thin fa-arrow-up-right ${styles.arrow}`}></i>
      </button>
      {clicked ? (
        <div className={`${styles.popUp}`}>
          {/* <iframe
            src={props.document}
            height={window.innerHeight < 800 ? window.innerHeight - 100 : 800}
            width={window.innerWidth < 800 ? window.innerWidth - 100 : 800}
          ></iframe> */}
          <object
            data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            width="800"
            height="500"
          ></object>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TechButton;
