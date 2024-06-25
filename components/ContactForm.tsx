"use client";
import React, { useState } from "react";
import styles from "@/styles/Form.module.css";
import { motion, useScroll } from "framer-motion";

const ContactForm = () => {
  const { scrollYProgress } = useScroll();
  const [Fname, setFname] = useState("");
  const [message, setMessage] = useState("");
  const [Gmail, setGmail] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    console.log(Fname, message, Gmail);
  };

  const resetForm = () => {
    setFname("");
    setMessage("");
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
        <input
          required
          type="text"
          id="Fname"
          placeholder="Full Name"
          onChange={(e) => setFname(e.target.value)}
          value={Fname}
        />

        <input
          required
          type="text"
          id="Gmail"
          placeholder="Email Address"
          value={Gmail}
          onChange={(e) => {
            setGmail(e.target.value);
          }}
        />
      </div>
      <textarea
        required
        id="message"
        placeholder="Please write down a job offer or a message here."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className={styles.submitDiv}>
        <button type="submit">Submit</button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
