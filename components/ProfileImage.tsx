"use client";
import React from "react";
import styles from "@/styles/ProfileImage.module.css";
import Image from "next/image";
import picture from "@/public/body.webp";

const ProfileImage = () => {
  return (
    <>
      <div className={styles.imageCard}>
        <Image
          className={styles.imgElement}
          src={picture}
          alt="profile picture"
          height={350}
          width={350}
          quality={100}
          priority={true}
        ></Image>
      </div>
    </>
  );
};

export default ProfileImage;
