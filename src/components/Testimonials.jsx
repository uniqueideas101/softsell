import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: "SoftSell made the whole process seamless. I had no idea reselling licenses could be so easy.",
    name: "Divyanshi Verma",
    role: "IT Manager",
    company: "Apple"
  },
  {
    text: "We offloaded old licenses in a day. Great experience!",
    name: "Dia Mishra",
    role: "Procurement Lead",
    company: "Microsoft"
  },
  {
    text: "Fast, professional, and totally worth it. Highly recommended.",
    name: "Sara Sharma",
    role: "Operations Head",
    company: "Google"
  },
  {
    text: "The valuation was instant and the payout was quick. Loved it!",
    name: "Rishabh Rawat",
    role: "System Admin",
    company: "Zomato"
  },
  {
    text: "Customer support was excellent. Everything worked as promised.",
    name: "Danica Shah",
    role: "Product Lead",
    company: "Infosys"
  },
  {
    text: "SoftSell gave us new value from unused assets. Super efficient.",
    name: "Shashwat Kashyap",
    role: "Finance Officer",
    company: "DevCore"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <strong>{t.name}</strong><br />
              <span>{t.role}, {t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
