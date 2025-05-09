import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../assets/icons/hero-image.webp'; 

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Turn Unused Software Into Instant Cash</h1>
        <p className={styles.subtitle}>
          SoftSell helps you resell unused software licenses effortlessly.
        </p>
        <a href="#contact" className={styles.cta}>Get a Quote</a>
      </div>
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Sell software for cash" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
