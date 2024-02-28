import React from "react";
import styles from "@/app/styles/HomePage.module.css";
import LeftNav from "@/app/components/LeftNav";
import Card from "@/app/components/Card";
const HomePage = () => {
  const kovachTech = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  `;
  const ghostSquawk = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  `;
  return (
    <>
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
      />
      <div className={styles.mainDiv}>
        <div className={styles.left}>
          <div className={styles.firstLeft}>
            <h1>Maor Idi</h1>
            <h2>Self Taught Web Developer</h2>
            <p>
              I create perfect web-experiences, <br></br>not web-sites.
            </p>
          </div>
          <div className={styles.secondLeft}>
            <LeftNav></LeftNav>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, <span>molestiae</span> quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum quisquam
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati
              tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, <span>eveniet aliquid culpa officia aut!</span> Impedit sit
              sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
              quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
              fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
              excepturi expedita sint? Sed quibusdam recusandae alias error
              harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
              dolorem! Officiis iure rerum voluptates a cumque velit quibusdam
              sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
              fugiat, temporibus enim commodi iusto libero magni deleniti quod
              quam consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </div>
          </section>
          <br />
          <section id="second">
            <div className={styles.experience}>
              <h1>Experience</h1>
              <Card
                title="Ghost Squawk"
                description={ghostSquawk}
                tags={[
                  "CSS",
                  "Javascript",
                  "Python",
                  "PHP",
                  "Project Manager",
                  "Server Manager",
                  "MySQL",
                ]}
                date="2021 — 2022"
                linkTo="http://localhost/GhostSquawkV2/"
              />
              <Card
                title="Kovach Technologies"
                description={kovachTech}
                tags={[
                  "CSS",
                  "Javascript",
                  "Python",
                  "Project Manager",
                  "Server Manager",
                  "PHP",
                  "MySQL",
                ]}
                date="July — Dec 2022"
                linkTo="http://localhost/DEFT-Analytics/"
              />
              <Card
                title="Mycri Services"
                description={kovachTech}
                tags={[
                  "CSS",
                  "Javascript",
                  "Python",
                  "Project Manager",
                  "Server Manager",
                  "PHP",
                  "MySQL",
                ]}
                date="June — Sep 2023"
                linkTo="http://localhost/Mycri-Website-main/"
              />
            </div>
          </section>
          <section id="third">
            <h1>Projects</h1>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
