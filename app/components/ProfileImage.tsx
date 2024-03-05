"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/ProfileImage.module.css";
import Image from "next/image";
import picture from "@/app/images/body.svg";

const ProfileImage = () => {
  return (
    <>
      <div className={styles.imageCard}>
        <Image
          className={styles.imgElement}
          src={picture}
          alt=""
          height={350}
          width={350}
          priority={true}
        ></Image>
      </div>
    </>
  );
};

export default ProfileImage;
