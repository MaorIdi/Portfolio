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
  const [expand, setExpand] = useState(false);

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      {showPopUp ? (
        <>
          <div className={`${styles.popUp}`}>
            <div className={styles.buttons}>
              <i
                className={`fa-regular fa-arrow-up-right-and-arrow-down-left-from-center ${styles.expandButton}`}
                onClick={handleExpand}
              ></i>
              <i
                className={`fa-regular fa-x ${styles.xButton}`}
                onClick={handleShowPopUp}
              ></i>
            </div>
            <iframe
              src={props.linkTo}
              height={
                window.innerHeight < 1000
                  ? window.innerHeight - 180
                  : !expand
                  ? 800
                  : window.innerHeight - 100
              }
              width={
                window.innerWidth < 1080
                  ? window.innerWidth - 25
                  : !expand
                  ? 1080
                  : window.innerWidth - 25
              }
            ></iframe>
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
