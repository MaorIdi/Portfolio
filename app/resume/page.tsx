import React from "react";
import styles from "@/app/resume/page.module.css";
const page = () => {
  return (
    <div className={styles.resume}>
      <object>
        <embed src="resume.pdf" type="application/pdf" />
      </object>
    </div>
  );
};

export default page;
