import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import profilePic from "@/images/profilePic.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.nav_div}>
      <ul className={styles.nav_ul}>
        <li>
          <Link href="#">
            <Image
              src={profilePic}
              alt=""
              width={38}
              height={38}
              quality={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
