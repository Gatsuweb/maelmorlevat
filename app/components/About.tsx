"use client"
import { useRef } from "react"
import { motion, useScroll } from "motion/react"
import Image from 'next/image'
import styles from '../styles/About.module.css'

export const About = () => {
  const leftRef = useRef(null);
  const midRef = useRef(null);
  const rightRef = useRef(null);

  // useScroll pour chaque section
  const leftScroll = useScroll({
    target: leftRef,
    offset: ["0 1", "1 1"],
  });

  const midScroll = useScroll({
    target: midRef,
    offset: ["0.2 1", "1 1"], // Décalage différent pour l'image
  });

  const rightScroll = useScroll({
    target: rightRef,
    offset: ["0.5 1", "1 1"], // Décalage encore différent
  });
  return (
    <div className={styles.aboutContainer} id="about">
      {/* <Image src="Rectangle.svg" alt="" height={20} width={20}  id={styles.rectangle}/> */}
      <motion.div
            ref={leftRef}
            className={styles.aboutLeft}
            style={{
              opacity: leftScroll.scrollYProgress,
              scale: leftScroll.scrollYProgress
            }}
          >
        <h2>À propos</h2>
        <p>
          <span>Je m&apos;appelle Maël Morlevat</span>,{" "}
          <span>cuisinier passionné originaire</span>{" "}
          <span>de Bretagne. J&apos;ai grandi et réalisé ma scolarité</span>
          <span>
            {" "}
            sur l&apos;île de Bréhat et Paimpol dans les Côtes d&apos;Armor,
          </span>{" "}
          deux lieux qui ont profondément influencé ma cuisine et ouvert mon
          esprit sur la gastronomie.
        </p>
      </motion.div>
          <motion.div ref={midRef} className={styles.aboutMid}  style={{
              opacity: midScroll.scrollYProgress,
              scale: midScroll.scrollYProgress
            }}>
            <div >
            <Image src="/imgmael.svg" alt='Photo auteur' height={500} width={500} className={styles.imgabout} />
            </div>
            {/* <div className={styles.imgabout}>
            <Image src="/imgderrieremael.svg" alt='Photo auteur' height={500} width={250} className={styles.imgabout} />
            </div> */}
       </motion.div>
          <motion.div ref={rightRef} className={styles.aboutRight} style={{
              opacity: rightScroll.scrollYProgress,
              scale: rightScroll.scrollYProgress,
            }}>
            <div className={styles.aboutRightContent}>
              <p>Je partage avec vous mes créations, mes recettes et les anecdotes de mes voyages. Que vous soyez amateur de gastronomie ou simplement curieux, Mon objectif est de vous inspirer et de vous offrir un moment de plaisir. Bienvenue dans mon univers culinaire !</p>
          </div>
          
        </motion.div>
    </div>
  )
}
