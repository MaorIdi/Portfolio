"use client";
import React from "react";
import styles from "@/app/styles/Card.module.css";
import { redirect } from "next/navigation";
type props = {
  title: string;
  description: string;
  tags: string[];
  date: string;
};

const Card = (props: props) => {
  const handleRedirect = () => {
    window.open("https://20.120.7.5/");
  };
  return (
    <div className={styles.outer} onClick={handleRedirect}>
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
  );
};

export default Card;
