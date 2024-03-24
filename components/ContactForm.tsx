"use client";
import React, { useState } from "react";
import styles from "@/styles/Form.module.css";
import { motion, useScroll } from "framer-motion";

const ContactForm = () => {
  const { scrollYProgress } = useScroll();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Gmail, setGmail] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    console.log(Fname, Lname, Gmail);
  };

  const resetForm = () => {
    setFname("");
    setLname("");
    setGmail("");
  };

  return (
    <motion.form
      style={{ scaleX: scrollYProgress }}
      onSubmit={submitForm}
      className={styles.form}
    >
      <h1>Contact me</h1>
      <div className={styles.formRow}>
        <div>
          <input
            type="text"
            id="Fname"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            value={Fname}
          />
        </div>
        <div>
          <input
            type="text"
            id="Lname"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
            value={Lname}
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          id="Gmail"
          placeholder="Email Address"
          value={Gmail}
          onChange={(e) => {
            setGmail(e.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </motion.form>
  );
};

export default ContactForm;
