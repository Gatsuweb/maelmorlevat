"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'

export const Nav = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.navContainer}>

      <div className={styles.navContent}>
        <ul className={`${styles.navList} ${isActive ? styles.open : ""}`} >
          <li><a href="#accueil" className={styles.card}>Accueil</a></li>
          <li> <a href="#about" className={styles.card}>À propos</a></li>
          <li><Image src="/logomael.svg" alt='logo auteur' height='60' width='60' /></li>
          <li><a href="#prestations" className={styles.card} >Prestations</a></li>
          <li><a href="#galerie" className={styles.card}>Galerie</a></li>
        </ul>
        <div className={styles.navBurger}>
          <li><Image src="/logomael.svg" alt='logo auteur' height='48' width='48' className={styles.logoBurger}/></li>

          <button onClick={toggleMenu} className={`${styles.burgerBtn} ${isActive ? styles.open : ""}`}>
            <div className={`${styles.lines} ${isActive ? styles.open : ""}`}></div>
            <div className={`${styles.lines} ${isActive ? styles.open : ""}`}></div>
            <div className={`${styles.lines} ${isActive ? styles.open : ""}`}></div>
          </button>
        </div>
      </div>

      {isActive && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <ul className={styles.modalList}>
              <li onClick={toggleMenu}><a href="#accueil">Accueil</a></li>
              <li onClick={toggleMenu}><a href="#about">À propos</a></li>
              <li><Image src="/logomael.svg" alt='logo auteur' height='60' width='60' /></li>
              <li onClick={toggleMenu}><a href="#prestations">Préstations</a></li>
              <li onClick={toggleMenu}><a href="#galerie">Galerie</a></li>
            </ul>
          </div>
          <div className={styles.modalOverlay} onClick={toggleMenu}></div>
        </div>
      )}


    </div>
  )
}
