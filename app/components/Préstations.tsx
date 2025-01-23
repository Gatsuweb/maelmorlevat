"use client"
import Image from 'next/image';
import styles from '../styles/Préstations.module.css'
import { useRef } from 'react';
import { motion, useScroll } from "motion/react"

const prestationsData = [
  {
    title: 'Tête à tête',
    description: `Pour une soirée romantique ou un moment en couple, laissez-vous séduire par un menu sur mesure, élaboré à l'avance selon vos envies. En 3, 5 ou 6 temps, chaque plat est pensé pour s'adapter à votre appétit et à vos goûts. Une option d'accord mets et vins peut également sublimer votre expérience. Si vous êtes un amateur de bons crus, n'hésitez pas à le mentionner !`,
    price: 'À partir de 35€/personne',
    icon: '/diner-intime.svg',
  },
  {
    title: 'Événements',
    description: `Pour vos anniversaires, repas entre amis, fêtes d'entreprise ou réunions familiales. Profitez d'un menu personnalisé, élaboré avec des ingrédients de qualité. Que ce soit un apéritif, un plat principal ou un dessert, vous pourrez savourer pleinement chaque moment avec vos invités.`,
    price: 'Devis personnalisé',
    icon: '/evenements.svg',
  },
  {
    title: 'Batch Cooking',
    description: `Vous manquez de temps dans votre semaine ? Le batchcooking est fait pour vous ! Cette méthode vous permet de préparer plusieurs repas à l'avance pour gagner du temps tout en mangeant sainement. Sportif.ve, toujours pressé.e ou contraint à un régime particulier, je serai ravi de vous aider à organiser vos repas : courses, préparation, conservation. Je m’occupe de tout !`,
    price: 'À partir de 25€/heure',
    icon: '/batchcooking.svg',
  },
  {
    title: 'Cours de cuisine',
    description: `Offrir une expérience culinaire unique avec un chef professionnel ! Découvrir des techniques de pro, réaliser des plats délicieux et recevoir des fiches recettes pour les refaire chez vous. Que vous soyez débutant.e ou passionné.e, chaque cours est une occasion d’apprendre et de savourer le plaisir de cuisiner !`,
    price: 'À partir de 30€/heure',
    icon: '/cours.svg',
  },
];

export const Préstations = () => {

  const refPresta = useRef(null)
  const scrollPresta = useScroll({
    target: refPresta,
    offset: ["-0.5 0.5", "0.5 1"]
  })
  return (
    <motion.div ref={refPresta} className={styles.prestationsContainer} 
      style={{
        scale: scrollPresta.scrollYProgress,
        opacity: scrollPresta.scrollYProgress
      }}
    >
      <div className={styles.headerPresta}>
        <h2>Prestations</h2>
        <div className={styles.linepresta}></div>
      </div>
    <div className={styles.prestationsRow}>
      {prestationsData.slice(0, 2).map((prestation, index) => (
        <div key={index} className={styles.prestationCard}>
          <div className={styles.iconeTitle}>
          <div className={styles.prestationIcon}>{prestation.icon.startsWith('/') ? (
                <Image src={prestation.icon} alt={prestation.title} height={200} width={200} />
              ) : (
                <span>{prestation.icon}</span>
              )}</div>
          <h2 className={styles.prestationTitle} style={{ color: '#FAEDCD' }}>{prestation.title}</h2>
          </div>
          <p className={styles.prestationDescription}>{prestation.description}</p>
          <p className={styles.prestationPrice}>{prestation.price}</p>
        </div>
      ))}
    </div>
    <div className={styles.prestationsRow}>
      {prestationsData.slice(2).map((prestation, index) => (
        <div key={index} className={styles.prestationCards}>
          <div className={styles.iconeTitle}>
          <div className={styles.prestationIcon}>{prestation.icon.startsWith('/') ? (
                <Image src={prestation.icon} alt={prestation.title} height={180} width={180} />
              ) : (
                <span>{prestation.icon}</span>
              )}</div>
          <h2 className={styles.prestationTitle} style={{ color: '#FAEDCD' }}>{prestation.title}</h2>
          </div>
          <p className={styles.prestationDescription}>{prestation.description}</p>
          <p className={styles.prestationPrice}>{prestation.price}</p>
        </div>
      ))}
    </div>
  </motion.div>
  )
}
