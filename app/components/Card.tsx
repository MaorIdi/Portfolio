"use client";
import React from "react";
import styles from "@/app/styles/Card.module.css";
import { useState } from "react";
type props = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  linkTo: string;
};

const Card = (props: props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <>
      {showPopUp ? (
        <>
          <div className={`${styles.popUp} ${showPopUp && styles.hide}`}>
            <i
              className={`fa-regular fa-x ${styles.xButton}`}
              onClick={handleShowPopUp}
            ></i>
            <iframe src={props.linkTo} height="800" width="1080"></iframe>
          </div>
        </>
      ) : (
        ""
      )}
      <div className={styles.outer} onClick={handleShowPopUp}>
        <p className={styles.date}>{props.date}</p>
        <div className={styles.inner}>
          <a className={styles.title}>
            {props.title} · <i className="fa-thin fa-arrow-up-right"></i>
          </a>
          <p>{props.description}</p>
          <div className={styles.tags}>
            {props.tags.map(
              (tag, index): React.ReactNode => (
                <p key={index} className={styles.tag}>
                  {tag}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
