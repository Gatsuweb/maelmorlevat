"use client"
import styles from "../styles/Tarifs.module.css"
import React, { useRef } from 'react'
import { motion } from "motion/react"


const widthAnim = {
  initial: {
    width: 0,
  },
  animate: {
    width: 1200,
    transition: {
      delay: 0.2,
      duration: 0.7
    }
  }
}

export const Tarifs = () => {
    const container = useRef(null)
    const ref = useRef(null)
  return (
    <>
           <div ref={container} className={styles.boxTop} >
        <motion.p className={styles.borderMq} ref={ref} variants={widthAnim} initial="initial" whileInView="animate" ></motion.p>
      </div>
    <div className={styles.tarifsContainer}>
                  <h2 id={styles.tarifsFirst}>Tarifs</h2>
        <div className={styles.tarifsCitation}>
            <h3>"Le sur-mesure est le maitre mot."</h3>
        </div>
        <div className={styles.tarifsContent}>
            <h2 id={styles.tarifsLast}>Tarifs</h2>
            <p>Ces derniers sont indicatifs et feront l'objet d'un devis personnalisé, établi avec vous lors d'un échange téléphonique ou par e-mail.</p>
           <a href="#contact"> <button>Contactez-moi</button></a>
        </div>
    </div>
        <div className={styles.boxBottom}>
          <motion.p className={styles.borderMq} ref={ref} variants={widthAnim} initial="initial" whileInView="animate"></motion.p>
        </div>
    </>
  )
}
