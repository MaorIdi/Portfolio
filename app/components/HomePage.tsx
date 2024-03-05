import React from "react";
import styles from "@/app/styles/HomePage.module.css";
import LeftNav from "@/app/components/LeftNav";
import Card from "@/app/components/Card";
import CustomMouse from "@/app/components/CustomMouse";
import TechButton from "@/app/components/TechButton";
import ProfileImage from "@/app/components/ProfileImage";

const HomePage = () => {
  const kovachTech = `I was entrusted by one of the owners, to take charge of managing the entire system.
Overseeing the project from inception to completion,
I handled all aspects of programming and even played a key role in recruiting a partner
to work alongside me, ensuring a seamless and successful project execution.`;
  const ghostSquawk = `
At this project, I took on a comprehensive role overseeing various aspects of development.
This included the maintenance of Linux servers, database management, and the development of the company&apos;s website along
with auxiliary Python scripts. I played an important role in guiding the company through the entire programming part,
demonstrating proficiency from concept to execution. Additionally, I led a team of two employees,
collaborating with an individual from India and partnering with a colleague from Israel. Together,
we successfully navigated the complexities of our projects and achieved notable milestones.`;

  const ghostSquawkv1 = `
This was the first version of GhostSquawk, this version was released at around 2020 June of 2020.
In this project I managed all of the programming side.`;

  const steamly = `
This project was a side project of mine,
I&apos;ve done all of the roles from writing the front-end of the website to writing the back-end of the website.`;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
      />

      <div className={styles.mainDiv}>
        <CustomMouse />
        <div className={styles.left}>
          <div className={styles.firstLeft}>
            <h1>Maor Idi</h1>
            <h2>Self Taught Web Developer</h2>
            <p>
              I create perfect web-experiences, <br></br>not web-sites.
            </p>
          </div>
          <div className={styles.secondLeft}>
            <ProfileImage></ProfileImage>
            <LeftNav></LeftNav>
            <div className={styles.techButton}>
              <ul>
                <li>
                  <TechButton
                    title="Resume"
                    document="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                  />
                </li>
              </ul>
            </div>

            <div className={styles.links}>
              <ul>
                <li>
                  <a href="https://github.com/MaorIdi" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/maor-idi-99326b215/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/maoridi_sw/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <section id="first">
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
              problem-solving chatbot and real-time malfunction monitoring. A
              I&apos;m a full <span>Online</span> graduate and committed to
              continuous learning. <br /> <br />
              Join me in exploring the limitless possibilities of technology,
              where every project is a chance to make a meaningful impact.
              Let&apos;s innovate together!
            </div>
          </section>
          <br />
          <section id="second">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <Card
                title="Kovach Technologies"
                description={kovachTech}
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
                description={ghostSquawk}
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
            </div>
          </section>
          <div className={styles.arrowDown}>
            <i className="fa-thin fa-arrow-down"></i>
          </div>
          <section id="third">
            <h1>Projects</h1>
            <Card
              title="Steamly"
              description={steamly}
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
              description={ghostSquawkv1}
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
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
