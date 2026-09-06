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
    title: "Infrastructure & Cloud",
    skills: ["Linux (Ubuntu)", "Arch Linux", "DigitalOcean", "Windows Server", "AWS"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["Docker", "Kubernetes (K8s)", "Terraform", "OpenTofu", "Helm", "Jenkins", "Git"],
  },
  {
    title: "Languages & Scripting",
    skills: ["Python", "Bash", "Node.js", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Automation & Testing",
    skills: ["Appium", "Selenium", "Pytest", "REST API Testing", "OOP Architectures (POM)"],
  },
  {
    title: "GenAI & LLMs",
    skills: ["LLM APIs (OpenAI, Claude)", "LangChain", "RAG Architectures", "AI Agents"],
  },
];

const projectItems = [
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Provisioned a highly available and scalable cloud network on AWS utilizing Terraform, ensuring a fully reproducible cloud environment.",
    tags: ["AWS", "Terraform", "OpenTofu"],
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Packaged microservices utilizing Docker and orchestrated the deployment lifecycle across a Kubernetes (K8s) cluster, ensuring high availability and seamless load balancing.",
    tags: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "CI/CD Automation",
    description:
      "Engineered a fully automated integration and deployment pipeline utilizing Jenkins and Git, streamlining the code transition from development to the production cluster.",
    tags: ["Jenkins", "Git", "Bash"],
  },
];

const educationItems = [
  {
    school: "John Bryce Tel Aviv",
    degree: "DevOps Engineering Bootcamp",
    year: "DevOps",
    honor: true,
  },
  {
    school: "Amal Holtz Multidisciplinary Air Force High School",
    degree: "Electronics & Computer Science",
    year: "School",
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
            <p>CI/CD · IaC · Containers · Automation</p>
          </div>
          <div className={styles.secondLeft}>
            <div className={styles.profileImage}>
              <ProfileImage />
            </div>
            <DevOpsNav />
            <div className={styles.techButton}>
              <TechButton
                title="Resume"
                englishPath="/api/resume?file=devops"
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
                    href="https://www.linkedin.com/in/maoridi/"
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

        <a href="#contact" className={styles.floatingCTA} aria-label="Contact me">
          <span className={styles.floatingCTAIcon}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          <span className={styles.floatingCTAText}>Let&apos;s Connect</span>
        </a>

        <div className={styles.right}>
          <section className={styles.section} id="about">
            <h1>About me</h1>
            <div className={styles.description}>
              <span>DevOps & Automation Engineer</span> with hands-on
              experience building <span>CI/CD pipelines</span>, configuring{" "}
              <span>cloud infrastructure</span>, and automating complex
              environments. Proven ability to bridge development and operations
              leveraging <span>Infrastructure as Code (IaC)</span> and{" "}
              <span>container orchestration</span>.
              <br />
              <br />
              Strong background in <span>Linux administration</span>,{" "}
              <span>Python development</span>, and integrating{" "}
              <span>GenAI-driven architectures</span> to optimize workflows,
              accelerate delivery times, and ensure system reliability.
              Currently an automation engineer at <span>Qualitest</span> on the
              Bank Hapoalim project — backed by freelance infrastructure work
              and a <span>military background</span> in high-availability
              systems serving thousands of users nationwide.
            </div>
          </section>

          <section className={styles.section} id="experience">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <div className={styles.cardContainer}>
                <Card
                  title="Automation Engineer · Qualitest"
                  description={CardsContent.qualitest}
                  tags={["Python", "Selenium", "Appium", "POM", "CI/CD", "GenAI"]}
                  date="Aug 2025 — Present"
                  linkTo="https://www.qualitest.com/"
                />
                <Card
                  title="Freelance Infrastructure Engineer"
                  description={CardsContent.freelanceDevOps}
                  tags={["Linux", "DigitalOcean", "SSH", "Bash", "Python", "Networking"]}
                  date="Feb 2022 — Mar 2024"
                  linkTo="https://github.com/MaorIdi"
                />
                <Card
                  title="System Administrator · IDF Air Force"
                  description={CardsContent.idf}
                  tags={["Windows Server", "Active Directory", "Automation", "Monitoring", "Chatbot"]}
                  date="2019 — 2022"
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

          <section className={styles.section} id="projects">
            <h1>DevOps & Cloud Projects</h1>
            <p className={styles.sectionSubtitle}>
              End-to-End Cloud-Native Infrastructure Deployment · Independent
              Capstone Project
            </p>
            <div className={styles.projectsList}>
              {projectItems.map((project) => (
                <div key={project.title} className={styles.projectItem}>
                  <p className={styles.projectTitle}>{project.title}</p>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.skillTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.skillTag}>
                        {tag}
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
