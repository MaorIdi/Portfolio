"use client";
import React from "react";
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
  const [loading, setLoading] = useState(true);
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
    if (!showPopUp) {
      setLoading(true); // Reset loading state when opening popup
      setShowTimeoutMessage(false); // Reset timeout message

      // Set timeout for 10 seconds
      setTimeout(() => {
        if (loading) {
          setShowTimeoutMessage(true);
        }
      }, 10000);
    }
  };
  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleSetLoading = () => {
    setLoading(false);
    setShowTimeoutMessage(false);
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
            {loading && (
              <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
                <p className={styles.loadingText}>Loading {props.title}...</p>
                {showTimeoutMessage && (
                  <div className={styles.timeoutMessage}>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p>
                      This is taking longer than expected. There might be a
                      hosting issue with the preview of this website.
                    </p>
                  </div>
                )}
              </div>
            )}
            <iframe
              onLoad={handleSetLoading}
              sandbox="allow-same-origin allow-scripts"
              src={props.linkTo}
              style={{ display: loading ? "none" : "block" }}
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
            <span className={styles.title}>
              {props.title} · <i className="fa-thin fa-arrow-up-right"></i>
            </span>
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
