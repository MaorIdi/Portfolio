import React from "react";
import styles from "@/app/styles/HomePage.module.css";
import LeftNav from "@/app/components/LeftNav";
import Card from "@/app/components/Card";
const HomePage = () => {
  let ghostSquawk = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
  
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
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <section id="first">
            <div className={styles.description}>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an <span>advertising agency</span>, a
              start-up, a student-led design studio, and a huge corporation. My
              main focus these days is building products and leading projects
              for our clients at Upstatement. I most enjoy building software in
              the sweet spot where design and engineering meet — things that
              look good but are also built well under the hood. In my free time,
              I've also released an online video course that covers everything
              you need to know to build a web app with the Spotify API. When I’m
              not at the computer, I’m usually rock climbing, reading, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds K o r o k s e e d s .
            </div>
          </section>
          <br />
          <section id="second">
            <div className={styles.experience}>
              <h1>Card Components</h1>
              <Card
                title="Ghost Squawk"
                description={ghostSquawk}
                tags={["CSS", "Javascript", "Python", "Project Manager", "PHP"]}
                date="2021 — 2022"
              />
            </div>
          </section>
          <section id="third">
            <h1>Third component</h1>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
