import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:varaprasadganga4@gmail.com">varaprasadganga4@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kandrathi-ganga-vara-prasad-026b40229/" target="_blank" rel="noopener noreferrer">
            Kandrathi Ganga Vara Prasad
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Ganga-777" target="_blank" rel="noopener noreferrer">
            github.com/Ganga-777
          </a>
        </li>
        <li className={styles.link}>
          <div className={styles.phoneIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <a href="tel:+916302852306">+91 6302852306</a>
        </li>
      </ul>
      <div className={styles.copyright}>
        <p>&copy; 2025 Kandrathi Ganga Vara Prasad. All rights reserved.</p>
      </div>
    </footer>
  );
};
