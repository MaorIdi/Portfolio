import React from "react";
import styles from "@/styles/HomePage.module.css";
import LeftNav from "@/components/LeftNav";
import Card from "@/components/Card";
import CustomMouse from "@/components/CustomMouse";
import TechButton from "@/components/TechButton";
import ProfileImage from "@/components/ProfileImage";
import { CardsContent } from "@/utils/CardsContent";
import ContactForm from "@/components/ContactForm";
const HomePage = () => {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
      /> */}
      <link rel="stylesheet" href="fontawesome/css/all.min.css" />

      <div className={styles.mainDiv}>
        <CustomMouse />
        <div className={styles.left}>
          <div className={styles.firstLeft}>
            <h1>Maor Idi</h1>
            <h2>Full-Stack Developer</h2>
            <p>
              I create perfect web-experiences, <br></br>not web-sites.
            </p>
          </div>
          <div className={styles.secondLeft}>
            <div className={styles.profileImage}>
              <ProfileImage></ProfileImage>
            </div>
            <LeftNav></LeftNav>
            <div className={styles.techButton}>
              <TechButton title="Resume" path="/resume-english.pdf" />
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
                <li>
                  <a href="" target="_blank" aria-label="x-twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <section className={styles.section} id="first">
            <h1>About me</h1>

            <div className={styles.description}>
              I&apos;m a tech enthusiast based in Israel. With a flair for
              problem-solving, I&apos;ve navigated{" "}
              <span>project management</span> and programming realms in{" "}
              <span>freelance roles</span> at Ghost Squawk and Kovach
              Technologies, handling everything from{" "}
              <span>server maintenance</span> to <span>Python scripting</span>.
              Collaborating with international teams, I led projects from start
              to finish. In the Netherlands, with &quot;Busy with AI,&quot; I
              delved into creating Python scripts for data extraction and
              managing <span>Linux servers</span>. My military service showcased
              my innovation with two streamlined proposals,{" "}
              <span>earning praise</span> from a Brigadier General. Notably, I
              built a closed network website featuring an automated
              problem-solving chatbot and real-time malfunction monitoring.
              I&apos;m a full <span>Online</span> graduate and committed to
              continuous learning. <br /> <br />
              Join me in exploring the limitless possibilities of technology,
              where every project is a chance to make a meaningful impact.
              Let&apos;s innovate together!
            </div>
          </section>
          <br />
          <section className={styles.section} id="second">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <div className={styles.cardContainer}>
                <Card
                  title="Kovach Technologies"
                  description={CardsContent.kovachTech}
                  tags={[
                    "Project Manager",
                    "Server Manager",
                    "HTML/CSS",
                    "Javascript",
                    "Python",
                    "PHP",
                    "MySQL",
                  ]}
                  date="July — Dec 2022"
                  linkTo="https://kovach.tech/"
                />
                <Card
                  title="Ghost Squawk"
                  description={CardsContent.ghostSquawk}
                  tags={[
                    "Project Manager",
                    "Server Manager",
                    "HTML/CSS",
                    "Javascript",
                    "Python",
                    "PHP",
                    "MySQL",
                  ]}
                  date="2021 — 2022"
                  linkTo="https://ghost-squawk.000webhostapp.com/"
                />
                <Card
                  title="Busy With Ai"
                  description={CardsContent.busyWithAi}
                  tags={["Server Manager", "Python", "MySQL", "Excel"]}
                  date="Jan — Feb 2024"
                  linkTo="https://www.busywith.ai/"
                />
              </div>
            </div>
          </section>
          <div className={styles.arrowDown}>
            <i className="fa-thin fa-arrow-down"></i>
          </div>
          <section
            className={`${styles.section} ${styles.projects}`}
            id="third"
          >
            <h1>Projects</h1>
            <div className={styles.cardContainer}>
              <Card
                title="Steamly"
                description={CardsContent.steamly}
                tags={[
                  "HTML/CSS",
                  "Javascript",
                  "Node.js",
                  "MySQL",
                  "Linux server",
                ]}
                date="Oct — Dec 2023"
                linkTo="https://taupe-cannoli-0dc034.netlify.app/"
              />
              <Card
                title="Ghost Squawk v1"
                description={CardsContent.ghostSquawkv1}
                tags={[
                  "Project Manager",
                  "Server Manager",
                  "HTML/CSS",
                  "Javascript",
                  "Python",
                  "PHP",
                  "MySQL",
                ]}
                date="June — July 2020"
                linkTo="https://ghost-squawk-v1.000webhostapp.com/"
              />
              <Card
                title="Spotify Cheap"
                description={CardsContent.cheapSpotify}
                tags={["Next.js", "HTML/CSS", "MySQL", "API", "Javascript"]}
                date="June — July 2020"
                linkTo="https://startling-hotteok-7caad7.netlify.app/"
              />
            </div>
          </section>
          {/* <section
            className={`${styles.section} ${styles.contact}`}
            id="fourth"
          >
            <ContactForm></ContactForm>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
