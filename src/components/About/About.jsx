/** @format */

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt='Me sitting with a laptop'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor icon' />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Front-end developer with a solid background in JavaScript, HTML,
                CSS, and React. I'm a quick learner who is enthusiastic about
                creating user-friendly, responsive websites. I'm also excited to
                put my abilities to work on practical projects. Possessing
                strong problem-solving abilities and meticulous attention to
                detail, I'm eager to work with others and advance as a
                developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
