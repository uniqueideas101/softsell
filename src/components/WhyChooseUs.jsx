import React from 'react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: "🔒",
    title: "Secure Transactions",
    description: "Your license data is safe with industry-grade security."
  },
  {
    icon: "⚡",
    title: "Fast Payments",
    description: "Get paid within 24 hours of verification."
  },
  {
    icon: "📈",
    title: "Best Market Rates",
    description: "We offer competitive pricing on all software licenses."
  },
  {
    icon: "🤝",
    title: "Trusted by Thousands",
    description: "Over 10,000 satisfied customers and counting."
  },
  {
    icon: "🛠️",
    title: "Easy Process",
    description: "Just upload your license and we’ll handle the rest."
  },
  {
    icon: "📞",
    title: "Dedicated Support",
    description: "Our team is here 24/7 to help you with any questions."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={styles.whyChooseUs}>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3 className={styles.title}>{reason.title}</h3>
            <p className={styles.description}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
