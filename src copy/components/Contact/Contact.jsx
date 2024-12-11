/** @format */

import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon' />
          <a href='mailto:olaniyanfeyikemi@gmail.com'>
            olaniyanfeyikemi@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon' />
          <a href='https://github.com/olaniyan18?tab=repositories'>
            github.com/olaniyan18
          </a>
        </li>
      </ul>
    </footer>
  );
};
