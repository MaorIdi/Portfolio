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
    title: "Cloud Provisioning & IaC",
    description:
      "Provisioned scalable cloud infrastructure on AWS utilizing Terraform to establish highly reproducible environments.",
    tags: ["AWS", "Terraform", "OpenTofu"],
  },
  {
    title: "Container Orchestration",
    description:
      "Containerized application environments using Docker and orchestrated deployments with Kubernetes (K8s) to manage microservices.",
    tags: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "CI/CD Pipeline Design",
    description:
      "Built and maintained automated integration and deployment pipelines using Jenkins and Git to streamline the development lifecycle.",
    tags: ["Jenkins", "Git", "Bash"],
  },
];

const educationItems = [
  {
    school: "John Bryce Tel Aviv",
    degree: "DevOps Engineering Course · 605 hours",
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
            <h2>DevOps & Platform Engineer</h2>
            <p>Infrastructure · Containers · IaC · CI/CD</p>
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
              Junior <span>DevOps & Platform Engineer</span> with a broad
              systemic vision, strong technical aptitude, and a proven ability
              to learn quickly. Experienced in <span>Python development</span>,{" "}
              <span>Linux server administration</span>, and building robust
              automation architectures from scratch.
              <br />
              <br />
              Hands-on experience with <span>container orchestration</span>,{" "}
              <span>infrastructure-as-code (IaC)</span>, and{" "}
              <span>GenAI integrations</span>. Adept at bridging the gap between{" "}
              <span>infrastructure, operations, and development</span> to
              accelerate time-to-market and ensure system reliability.
              Currently delivering QA automation at <span>Qualitest</span> on
              the Bank Hapoalim project — backed by freelance infrastructure
              experience and a <span>military background</span> in
              high-availability systems serving thousands of users nationwide.
            </div>
          </section>

          <section className={styles.section} id="experience">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <div className={styles.cardContainer}>
                <Card
                  title="Qualitest · Bank Hapoalim"
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
                  title="IDF Air Force · Communications Systems"
                  description={CardsContent.idf}
                  tags={["Windows Server", "Active Directory", "Automation", "Monitoring", "Chatbot"]}
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

          <section className={styles.section} id="projects">
            <h1>DevOps Projects</h1>
            <p className={styles.sectionSubtitle}>John Bryce Tel Aviv</p>
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
