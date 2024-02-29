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
        {props.title} · <i className="fa-thin fa-arrow-up-right"></i>
      </button>
      {clicked ? (
        <div className={`${styles.popUp}`}>
          {/* <iframe
            src={props.document}
            height={window.innerHeight < 800 ? window.innerHeight - 100 : 800}
            width={window.innerWidth < 800 ? window.innerWidth - 100 : 800}
          ></iframe> */}
          <iframe
            src="https://fileurl.com/clean-code.pdf"
            width="500"
            height="800"
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TechButton;
