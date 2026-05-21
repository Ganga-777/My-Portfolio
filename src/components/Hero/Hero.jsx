import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.title}>Kandrathi Ganga Vara Prasad</h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <p className={styles.description}>
          Skilled in React.js, .NET APIs, MySQL, MERN Stack, React Native, and AWS Cloud 
          technologies. Currently building enterprise dashboard systems and scalable 
          applications at JumpStartNinja Technologies.
        </p>
        <div className={styles.tagline}>
          <span className={styles.tag}>B.Tech Final Year</span>
          <span className={styles.tagDivider}>|</span>
          <span className={styles.tag}>VIT-AP University</span>
        </div>
        <div className={styles.buttons}>
          <a href="mailto:varaprasadganga4@gmail.com" className={styles.contactBtn}>
            Hire Me
          </a>
          <a href="#projects" className={styles.projectsBtn}>
            View Projects
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Ganga Vara Prasad"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
