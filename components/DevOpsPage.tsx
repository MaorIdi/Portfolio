import React from "react";
import styles from "@/styles/DevOpsPage.module.css";
import DevOpsNav from "@/components/DevOpsNav";
import Card from "@/components/Card";
import CustomMouse from "@/components/CustomMouse";
import TechButton from "@/components/TechButton";
import ProfileImage from "@/components/ProfileImage";
import ContactForm from "@/components/ContactForm";
import { CardsContent } from "@/utils/CardsContent";

const skillCategories = [
  {
    title: "Infrastructure & OS",
    skills: ["Linux (Ubuntu)", "Windows Server", "VMware", "Digital Ocean"],
  },
  {
    title: "CI/CD, Cloud & DevOps",
    skills: ["Docker", "Kubernetes (K8s)", "Terraform", "AWS", "Git / GitHub", "Monitoring Tools"],
  },
  {
    title: "Scripting & Languages",
    skills: ["Python", "PowerShell", "Node.js", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Automation & Testing",
    skills: ["Appium", "Android Studio", "Xcode", "OOP Architectures"],
  },
  {
    title: "Architecture & APIs",
    skills: ["REST API Integration", "Active Directory", "MySQL"],
  },
];

const educationItems = [
  {
    school: "John Bryce (By Matrix)",
    degree: "DevOps Engineering Course · 605 hours",
    year: "DevOps",
    honor: true,
  },
  {
    school: "Codecademy",
    degree: "Node.js (2024)  ·  Python (2021)",
    year: "Online",
    honor: false,
  },
  {
    school: "Holtz Air Force Technical School",
    degree: "Electronics & Computer Science · 5 study units each",
    year: "Military",
    honor: false,
  },
];

const DevOpsPage = () => {
  return (
    <>
      <link rel="stylesheet" href="fontawesome/css/all.min.css" />
      <div className={styles.mainDiv}>
        <CustomMouse />
        <div className={styles.left}>
          <div className={styles.firstLeft}>
            <h1>Maor Idi</h1>
            <h2>DevOps & Automation Engineer</h2>
            <p>Infrastructure · Automation · CI/CD</p>
          </div>
          <div className={styles.secondLeft}>
            <div className={styles.profileImage}>
              <ProfileImage />
            </div>
            <DevOpsNav />
            <div className={styles.techButton}>
              <TechButton
                title="Resume"
                englishPath="/resume-english.pdf"
                hebrewPath="/resume-hebrew.pdf"
              />
            </div>
            <div className={styles.links}>
              <ul>
                <li>
                  <a
                    href="https://github.com/MaorIdi"
                    aria-label="Github"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/maor-idi-99326b215/"
                    target="_blank"
                    aria-label="linkedin"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/maoridi_sw/"
                    target="_blank"
                    aria-label="instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <section className={styles.section} id="about">
            <h1>About me</h1>
            <div className={styles.description}>
              Passionate <span>DevOps and Automation Engineer</span> with a
              broad systemic vision and a proven ability to learn quickly.
              Experienced in <span>Python scripting</span>,{" "}
              <span>Linux server administration</span>, and building robust
              automation architectures from scratch to eliminate manual
              overhead.
              <br />
              <br />
              Adept at managing environments, configuring infrastructure, and
              bridging the gap between{" "}
              <span>testing, operations, and development</span>. Currently
              delivering QA automation at <span>Qualitest</span> on the Bank
              Hapoalim project — backed by freelance infrastructure experience
              across cloud platforms and a strong{" "}
              <span>military background</span> in high-availability systems
              serving thousands of users nationwide.
            </div>
          </section>

          <section className={styles.section} id="experience">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <div className={styles.cardContainer}>
                <Card
                  title="Qualitest · Bank Hapoalim"
                  description={CardsContent.qualitest}
                  tags={["Python", "Appium", "OOP", "REST API", "Mobile", "Web UI"]}
                  date="Aug 2025 — Present"
                  linkTo="https://www.qualitest.com/"
                />
                <Card
                  title="Freelance Infrastructure Engineer"
                  description={CardsContent.freelanceDevOps}
                  tags={["Ubuntu Linux", "Python", "REST API", "Cloud", "Monitoring"]}
                  date="Feb 2022 — Mar 2024"
                  linkTo="https://github.com/MaorIdi"
                />
                <Card
                  title="IDF · Communications Systems"
                  description={CardsContent.idf}
                  tags={["Windows Server", "Active Directory", "Automation", "RF Systems", "VOIP"]}
                  date="Military Service"
                  linkTo="https://www.idf.il/"
                />
              </div>
            </div>
          </section>

          <div className={styles.arrowDown}>
            <i className="fa-thin fa-arrow-down"></i>
          </div>

          <section className={styles.section} id="skills">
            <h1>Technical Skills</h1>
            <div className={styles.skillsGrid}>
              {skillCategories.map((cat) => (
                <div key={cat.title} className={styles.skillCategory}>
                  <p className={styles.skillCategoryTitle}>{cat.title}</p>
                  <div className={styles.skillTags}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section} id="education">
            <h1>Education</h1>
            <div className={styles.educationList}>
              {educationItems.map((item) => (
                <div key={item.school} className={styles.educationItem}>
                  <p className={styles.educationYear}>{item.year}</p>
                  <div className={styles.educationContent}>
                    <p className={styles.educationSchool}>{item.school}</p>
                    <p className={styles.educationDegree}>
                      {item.degree}
                      {item.honor && (
                        <span className={styles.honor}> · High Honors</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.contact}`}
            id="contact"
          >
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default DevOpsPage;
