"use client"
import { useRef } from 'react'
import styles from '../styles/Avis.module.css'
import { Caroussel } from './Caroussel'
import { motion } from "motion/react"

const widthAnim = {
  initial: {
    width: 0,
  },
  animate: {
    width: 1400,
    transition: {
      delay: 0.2,
      duration: 0.7
    }
  }
}

export const Avis = () => {
    const container = useRef(null)
    const ref = useRef(null)

  return (
    <div className={styles.avisContainer}>
      <div className={styles.headerAvis}>
          <motion.div ref={ref} variants={widthAnim} initial="initial" whileInView="animate" className={styles.lineAvis}></motion.div>
          <h2>Avis</h2>
      </div>
      <div className={styles.caroussel}>
        <Caroussel />
      </div>
      <div className={styles.lineAvis}></div>

    </div>
  )
}
