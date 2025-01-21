import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
      <div className={styles.contactlink}>
          <a href="tel:+33670064239">06.70.06.42.39</a>
          <a href="mailto:maelmorlevat@gmail.com">maelmorlevat@gmail.com</a>
        </div>
        <div className={styles.resocolo}>
        <a href="https://www.instagram.com/mael.morlevat/" target='blank' ><Image src="instacolo.svg" alt='logo instagram' width={92} height={92} /></a>
        <a href="https://www.linkedin.com/in/ma%C3%ABl-morlevat-aa02a31b9/" target='blank' ><Image src="linkedincolo.svg" alt='logo instagram' width={92} height={92} /></a>
        </div>
      </div>
        <div className={styles.developpeurlink}>
          <p>Developpement:<a href="https://www.instagram.com/_i.d.e.v/" target='blank'> @I.D.E.V</a></p>
        </div>
    </div>
  )
}
