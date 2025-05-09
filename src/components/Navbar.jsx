import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        
      <div className={styles.left}>
        SoftSell 
      </div>

      <div className={styles.right}>
        <a href="#how-it-works" className={styles.link}>How It Works</a>
        <a href="#why-us" className={styles.link}>Why Us</a>
        <a href="#testimonials" className={styles.link}>Testimonials</a>
        <a href="#contact" className={styles.cta}>Get a Quote</a>
      </div>
    </header>
  );
};

export default Navbar;
