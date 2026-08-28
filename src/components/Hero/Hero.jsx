import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.title}>Kandrathi Ganga Vara Prasad</h1>
        <h2 className={styles.subtitle}>Full Stack Developer & R&D Professional</h2>
        <p className={styles.description}>
          Skilled in React, TypeScript, .NET APIs, MySQL, MERN Stack, React Native, and AWS Cloud 
          technologies. Currently engaged in Research & Development at DRDO (NSTL), Visakhapatnam, 
          with prior full-stack engineering experience at JumpStartNinja Technologies.
        </p>
        <div className={styles.tagline}>
          <span className={styles.tag}>B.Tech Graduate</span>
          <span className={styles.tagDivider}>|</span>
          <span className={styles.tag}>VIT-AP University</span>
        </div>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.projectsBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.contactBtn}>
            Get In Touch
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
