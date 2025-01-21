"use client"
import { useRef } from "react"
import { motion, useScroll } from "motion/react"
import Image from 'next/image'
import styles from '../styles/Sousabout.module.css'

export const Sousabout = () => {
  const leftRef = useRef(null);
  const midRef = useRef(null);
  const rightRef = useRef(null);

  const leftScroll = useScroll({
    target: leftRef,
    offset: ["0 1", "1 1"],
  });

  const midScroll = useScroll({
    target: midRef,
    offset: ["0.5 1", "1 1"],
  });

  const rightScroll = useScroll({
    target: rightRef,
    offset: ["0 1", "0.9 1"], // Décalage encore différent
  });

  return (
    <div className={styles.sousAboutContainer}>
      <motion.div ref={leftRef} className={styles.sousAboutLeft} style={{
        opacity: leftScroll.scrollYProgress,
        scale: leftScroll.scrollYProgress
      }}>
        <div className={styles.sousAboutBorder}>
          <p id={styles.pRepop}>DÈS MON PLUS JEUNE AGE, J'AI ÉTÉ CAPTIVÉ PAR L'ART DE LA CUISINE, INSPIRÉ PAR LES PRODUITS FRAIS ET LOCAUX QUE L'ON TROUVE EN ABONDANCE DANS NOTRE BELLE RÉGION. </p>
        </div>
        <div className={styles.divMaelLegumes}>
        <Image src="/galerie/mael2.svg" alt='' height={250} width={325} className={styles.imgSousAboutMael}/>
        </div>
        <div className={styles.sousAboutBorders}>
          <p id={styles.pRemove}>DÈS MON PLUS JEUNE AGE, J'AI ÉTÉ CAPTIVÉ PAR L'ART DE LA CUISINE, INSPIRÉ PAR LES PRODUITS FRAIS ET LOCAUX QUE L'ON TROUVE EN ABONDANCE DANS NOTRE BELLE RÉGION. </p>
        </div>
      </motion.div>

      <motion.div ref={midRef} className={styles.sousAboutMid} style={{
        opacity: midScroll.scrollYProgress,
        scale: midScroll.scrollYProgress
      }}>
        <Image src="/photomael2.jpg" alt='' height={650} width={325}  className={styles.imgSousAbout} />
        </motion.div>

      <motion.div ref={rightRef} className={styles.sousAboutRight} style={{
        opacity: rightScroll.scrollYProgress,
        scale: rightScroll.scrollYProgress
      }}>
        <p id={styles.firstP}>Parce que chaque plat mérite les meilleurs ingrédients, je sélectionne avec soin des produits de qualité pour sublimer vos moments gourmands TOUT EN Y APPORTANT UNE TOUCHE PERSONNELLE.</p>
        <Image src="/galerie/legumes.svg" alt='' height={300} width={325} className={styles.imgSousAboutLegumes}/>
        <div className={styles.sousAboutBorderRight}>
          <p id={styles.lastP}>Parce que chaque plat mérite les meilleurs ingrédients, je sélectionne avec soin des produits de qualité pour sublimer vos moments gourmands TOUT EN Y APPORTANT UNE TOUCHE PERSONNELLE.</p>
          </div>
      </motion.div>
    </div>
  )
}
