"use client";
import React from "react";
import styles from "@/styles/ProfileImage.module.css";
import Image from "next/image";
import defaultPicture from "@/public/body.webp";

type Props = {
  src?: string;
  imageStyle?: React.CSSProperties;
  bare?: boolean;
};

const ProfileImage = ({ src, imageStyle, bare }: Props) => {
  return (
    <>
      <div className={`${styles.imageCard} ${bare ? styles.bare : ""}`}>
        <Image
          className={styles.imgElement}
          src={src ?? defaultPicture}
          alt="profile picture"
          height={350}
          width={350}
          priority={true}
          style={imageStyle}
        ></Image>
      </div>
    </>
  );
};

export default ProfileImage;
