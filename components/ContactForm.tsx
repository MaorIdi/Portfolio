"use client";
import React, { useState } from "react";
import styles from "@/styles/Form.module.css";
import { motion, useScroll } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
  const { scrollYProgress } = useScroll();
  const [Fname, setFname] = useState("");
  const [message, setMessage] = useState("");
  const [Gmail, setGmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const response = await axios.post("/api/contact", {
      name: Fname,
      email: Gmail,
      message: message,
    });

    if (response.status === 200) {
      setLoading(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 2000);
    } else {
      toast.error("Failed to send email");
    }

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
        <div className={styles.inputWrapper}>
          <label htmlFor="Fname">Full Name</label>
          <input
            required
            type="text"
            id="Fname"
            placeholder="John Doe"
            onChange={(e) => setFname(e.target.value)}
            value={Fname}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="Gmail">Email Address</label>
          <input
            required
            type="email"
            id="Gmail"
            placeholder="john@example.com"
            value={Gmail}
            onChange={(e) => {
              setGmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.inputWrapper} style={{ width: "85%" }}>
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          placeholder="Please write down a job offer or a message here."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div className={styles.submitDiv}>
        <button type="submit">
          {loading ? (
            <p>
              <i className="fa-duotone fa-spinner-third fa-spin"></i> Sending...
            </p>
          ) : sent ? (
            <p>
              <i className="fa-regular fa-check"></i> Sent!
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
