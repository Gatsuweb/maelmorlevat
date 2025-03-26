'use client'
import { ContactForm } from './ContactForm';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../styles/Contact.module.css';

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccessfulSubmit = () => {
    setIsModalOpen(true);
    // Scroll vers le haut après 3 secondes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <div className={styles.contactContainer}>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Message envoyé avec succès !</h3>
            <p>Je vous répondrai dans les plus brefs délais.</p>
          </div>
        </div>
      )}
      <div className={styles.contactContent}>
        <div className={styles.pContact}>
          <h2>Contact</h2>
          <p>
            Vous avez une question ou souhaitez organiser un évenement culinaire sur-mesure ? 
          </p>
          <p>
            N&apos;hésitez pas à me contacter via le formulaire ci-contre.
          </p>
          <p>À bientôt je l&apos;espère dans votre cuisine !</p>
        </div>
        <div className={styles.contactformulaire}>
          <ContactForm onSuccessfulSubmit={handleSuccessfulSubmit} />
        </div>
      </div>
    </div>
  );
};