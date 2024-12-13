/** @format */

import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kafayah</h1>
        <p className={styles.description}>
          With more than a year of experience, I am a front-end developer with a
          focus on leveraging React to create dynamic and responsive user
          interfaces.
        </p>
        <a
          href='mailto:olaniyanfeyikemi@gmail.com'
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
