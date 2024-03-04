"use client";
import React, { useEffect } from "react";
import styles from "@/app/styles/Image.module.css";
import Image from "next/image";
import picture from "@/app/images/body.svg";

const ProfileImage = () => {
  return (
    <>
      {innerWidth > 1330 ? (
        <div className={styles.imageCard}>
          <Image
            className={styles.imgElement}
            src={picture}
            alt=""
            height={350}
            width={350}
            quality={100}
            priority={true}
          ></Image>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileImage;
