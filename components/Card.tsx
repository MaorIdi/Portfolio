"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [loading, setLoading] = useState(true);

  const handleSetLoading = () => {
    setLoading(false);
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
            {loading ? "" : <></>}
            <iframe
              onLoad={handleSetLoading}
              sandbox="allow-same-origin allow-scripts"
              src={props.linkTo}
              height={
                window.innerWidth < 1330
                  ? window.innerHeight - 180
                  : !expand
                  ? 800
                  : window.innerHeight - 100
              }
              width={
                window.innerWidth < 1330
                  ? window.innerWidth - 25
                  : !expand
                  ? 1330
                  : window.innerWidth - 100
              }
            ></iframe>
          </div>
        </>
      ) : (
        ""
      )}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
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
      </motion.div>
    </>
  );
};

export default Card;
