"use client";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../styles/ContactForm.module.css";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_lphtckk",
          "template_4nnruik",
          form.current,
          "mQuTgDhUj-5_2spft" // Clé publique directement comme string
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">Nom / Prénom :</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Adresse E-mail :</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required />
      </div>
      <div className={styles.btnContact}>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};