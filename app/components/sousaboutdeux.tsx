"use client"
import { useRef } from "react"
import { motion, useScroll } from "motion/react"
import Image from 'next/image'
import styles from '../styles/SousAboutdeux.module.css'

 export const SousAboutdeux = () => {
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
    <div className={styles.sousAboutDeuxContainer}>

        <motion.div ref={leftRef} className={styles.sousAboutLeftDeux} style={{
        opacity: leftScroll.scrollYProgress,
        scale: leftScroll.scrollYProgress
      }}>  
            
            <div className={styles.borderLast}>
            <p id={styles.pRemove}>DÈS MON PLUS JEUNE AGE, J&apos;AI ÉTÉ CAPTIVÉ PAR L&apos;ART DE LA CUISINE, INSPIRÉ PAR LES PRODUITS FRAIS ET LOCAUX QUE L&apos;ON TROUVE EN ABONDANCE DANS NOTRE BELLE RÉGION. </p>
            </div>            
            <div className={styles.sousAboutBorderLeftDeux}>
                <Image src="/galerie/mael2.svg" alt='' height={400} width={375} className={styles.imgSousAboutMael}/>
                </div>
                <p id={styles.pRepop}>DÈS MON PLUS JEUNE AGE, J&apos;AI ÉTÉ CAPTIVÉ PAR L&apos;ART DE LA CUISINE, INSPIRÉ PAR LES PRODUITS FRAIS ET LOCAUX QUE L&apos;ON TROUVE EN ABONDANCE DANS NOTRE BELLE RÉGION. </p>

        </motion.div>

          <motion.div ref={midRef} className={styles.sousAboutMidDeux} style={{
        opacity: midScroll.scrollYProgress,
        scale: midScroll.scrollYProgress
      }}>
          <Image src="/photomael2.jpg" alt='photo auteur' height={525} width={330}  className={styles.imgSousAbout} />
          </motion.div>

          <motion.div ref={rightRef} className={styles.sousAboutRightDeux} style={{
        opacity: rightScroll.scrollYProgress,
        scale: rightScroll.scrollYProgress
      }}>
            <div className={styles.sousAboutRightContentDeux}>
                <p id={styles.firstP}>Parce que chaque plat mérite les meilleurs ingrédients, je sélectionne avec soin des produits de qualité pour sublimer vos moments gourmands tout en y apportant une touche personnelle.</p>
                <Image src="/legumes.jpg" alt='' height={300} width={325} className={styles.imgSousAbout}/>
                <div className={styles.borderLastRight}> 
                <p id={styles.lastP}>Parce que chaque plat mérite les meilleurs ingrédients, je sélectionne avec soin des produits de qualité pour sublimer vos moments gourmands tout en y apportant une touche personnelle.</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

