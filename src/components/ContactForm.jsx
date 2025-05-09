import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Upload Your License Here</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="licenseType"
          placeholder="License Type"
          onChange={handleChange}
        />
        <input
          type="file"
          name="file"
          placeholder="Upload License"
          accept=".pdf,.docx,.txt"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
