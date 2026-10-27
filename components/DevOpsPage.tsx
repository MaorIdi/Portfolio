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
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes (k3d)", "Helm", "Terraform", "OpenTofu"],
  },
  {
    title: "CI/CD & GitOps",
    skills: ["GitHub Actions", "Argo CD", "Jenkins", "Git", "GHCR", "CI/CD Pipelines"],
  },
  {
    title: "Programming",
    skills: ["Python", "Bash", "PowerShell", "JavaScript", "TypeScript", "Node.js", "SQL"],
  },
  {
    title: "Systems",
    skills: ["Linux", "Ubuntu", "Windows Server", "Active Directory", "Networking", "Nginx", "Cloudflare Tunnel"],
  },
  {
    title: "Backend & Data",
    skills: ["REST APIs", "FastAPI", "PostgreSQL", "MySQL"],
  },
  {
    title: "Automation & AI",
    skills: ["Pytest", "Selenium", "Appium", "Playwright", "OOP/POM", "LLM APIs", "LangChain"],
  },
];

const projectItems = [
  {
    title: "Yesh Avoda — Job Auto-Apply Web App",
    meta: "Personal project · Self-hosted · 2026 — Present",
    link: "https://yeshavoda.co.il/",
    linkLabel: "yeshavoda.co.il",
    bullets: [
      "Built a web app that finds job openings and applies to them automatically, using Python (FastAPI), PostgreSQL, and Playwright.",
      "Self-hosted on my home Linux server in a Kubernetes cluster (k3d), with separate pods for the website, background workers, and database.",
      "Built a CI/CD pipeline with GitHub Actions that runs tests, builds the Docker image, and pushes it to GHCR.",
      "Deployed with Argo CD (GitOps): every change merged to Git is synced to the cluster automatically.",
      "Made it public with a Cloudflare Tunnel and Nginx Ingress, without opening ports on my home network.",
      "Set up autoscaling (HPA), nightly database backups with a CronJob, and 300+ Pytest tests.",
    ],
    tags: ["Kubernetes", "Argo CD", "GitHub Actions", "Docker", "FastAPI", "PostgreSQL", "Cloudflare Tunnel"],
  },
  {
    title: "End-to-End Cloud-Native Infrastructure Deployment",
    meta: "Independent / John Bryce Final Project",
    bullets: [
      "Provisioned AWS infrastructure with Terraform.",
      "Containerized services with Docker and deployed workloads to Kubernetes.",
      "Built a Jenkins/Git CI/CD pipeline.",
    ],
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins"],
  },
];

const educationItems = [
  {
    school: "John Bryce (Matrix)",
    degree: "DevOps Engineering Program · 605 hours / 12 months",
    year: "Mar 2025 — Mar 2026",
    honor: true,
  },
  {
    school: "Holtz Air Force Technical School",
    degree: "Electronics & Computer Science",
    year: "School",
    honor: false,
  },
  {
    school: "Languages",
    degree: "Hebrew: Native · English: Fluent",
    year: "Lang",
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
            <h2>Software & DevOps Engineer</h2>
            <p>Automation · Kubernetes · CI/CD · GitOps</p>
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
              <span>Software and infrastructure engineer</span> with hands-on
              experience building <span>Python automation</span>,
              administering <span>Linux and Windows</span> environments,
              integrating <span>APIs</span>, and working with{" "}
              <span>cloud-native DevOps tooling</span>.
              <br />
              <br />
              Currently a <span>QA Automation Engineer</span> at{" "}
              <span>QualityAI</span>, developing mobile and web test automation
              and CI/CD integrations. Completed military service and a 12-month{" "}
              <span>DevOps Engineering program</span> with high honors. Seeking{" "}
              <span>DevOps, Backend, Platform, or Software Engineering</span>{" "}
              roles focused on reliable automation, infrastructure, and software
              systems.
            </div>
          </section>

          <section className={styles.section} id="experience">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <div className={styles.cardContainer}>
                <Card
                  title="QA Automation Engineer · QualityAI"
                  description={CardsContent.qualitest}
                  tags={["Python", "Appium", "Selenium", "REST APIs", "CI/CD", "LLM APIs"]}
                  date="Aug 2025 — Present"
                  linkTo="https://www.quality-ai.com/"
                />
                <Card
                  title="Reserve Duty · IDF Air Force"
                  description={CardsContent.reserveDuty}
                  tags={["Classified Operational Unit"]}
                  date="Mar 2024 — Mar 2025"
                  linkTo="https://www.idf.il/"
                  openInNewTab
                />
                <Card
                  title="Freelance Infrastructure & Automation Engineer"
                  description={CardsContent.freelanceDevOps}
                  tags={["Linux", "Ubuntu", "SSH", "Networking", "Bash", "Python", "REST APIs"]}
                  date="Feb 2022 — Mar 2024"
                  linkTo="https://github.com/MaorIdi"
                  openInNewTab
                />
                <Card
                  title="Systems Administrator · IDF Air Force"
                  description={CardsContent.idf}
                  tags={["Windows Server", "Active Directory", "Automation", "Monitoring", "Team Lead"]}
                  date="2019 — 2022"
                  linkTo="https://www.idf.il/"
                  openInNewTab
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
            <div className={styles.projectsList}>
              {projectItems.map((project) => (
                <div key={project.title} className={styles.projectItem}>
                  <p className={styles.projectTitle}>{project.title}</p>
                  <p className={styles.sectionSubtitle}>{project.meta}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {project.linkLabel} ·{" "}
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  )}
                  <ul className={styles.projectBullets}>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
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
