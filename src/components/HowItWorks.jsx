import React from 'react';
import styles from './HowItWorks.module.css';
import step1 from '../assets/icons/upload.png';
import step2 from '../assets/icons/value2.jpg';
import step3 from '../assets/icons/paid.jpg';

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <h2 className={styles.heading}>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src={step1} alt="Upload License" className={styles.image} />
          <p className={styles.caption}>1. Upload License</p>
        </div>
        <div className={styles.step}>
          <img src={step2} alt="Get Valuation" className={styles.image} />
          <p className={styles.caption}>2. Get Instant Valuation</p>
        </div>
        <div className={styles.step}>
          <img src={step3} alt="Get Paid" className={styles.image} />
          <p className={styles.caption}>3. Get Paid</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
