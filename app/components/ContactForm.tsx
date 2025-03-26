"use client";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "../styles/ContactForm.module.css";

interface ContactFormProps {
  onSuccessfulSubmit: () => void;
}

export const ContactForm = ({ onSuccessfulSubmit }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!form.current) {
        throw new Error("Form reference is missing");
      }

      await emailjs.sendForm(
        "service_lphtckk",
        "template_4nnruik",
        form.current,
        "mQuTgDhUj-5_2spft"
      );

      // Réinitialisation du formulaire après succès
      form.current.reset();
      onSuccessfulSubmit();
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">Nom / Prénom :</label>
        <input type="text" id="firstName" name="firstName" required disabled={isSubmitting} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Adresse E-mail :</label>
        <input type="email" id="email" name="email" required disabled={isSubmitting} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required disabled={isSubmitting} />
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.btnContact}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
};