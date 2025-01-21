import styles from '../styles/Contact.module.css'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <div className={styles.pContact}>
             <h2>Contact</h2>
            <p>
              Vous avez une question ou souhaitez organiser un évenement culinaire sur-mesure ? 
            </p>
            <p>
            N&apos;hésitez pas à me contacter via le formulaire ci-contre.
            </p>
            <p> à bientot je l&apos;espere dans votre cuisine !</p>
          </div>
          <div className={styles.contactformulaire}>
            <ContactForm />
          </div>
      </div>
    </div>
  )
}
