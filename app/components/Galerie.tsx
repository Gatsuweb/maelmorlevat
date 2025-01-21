"use client"
import { useRef } from 'react'
import styles from '../styles/Galerie.module.css'
import { GalerieImage } from './GalerieImage'
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
export const Galerie = () => {
  const container = useRef(null)
  const ref = useRef(null)

  return (
    <>
    <div className={styles.galerieContainer} id='galerie'>
      <div ref={container} className={styles.boxTop} >
        <motion.p className={styles.borderMq} ref={ref} variants={widthAnim} initial="initial" whileInView="animate" ></motion.p>
      </div>

        <h2>Galerie</h2>

        <div className={styles.boxBottom}>
          <motion.p className={styles.borderMq} ref={ref} variants={widthAnim} initial="initial" whileInView="animate"></motion.p>
        </div>
      </div>
          <div className={styles.galerieImgs}>
           <GalerieImage />
           </div>
      </>
  )
}
