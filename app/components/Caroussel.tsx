"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from "../styles/Carousel.module.css"

export const Caroussel = () => {
    const card = [
        {
            auteur: "T. Barjon",
            star: "5",
            avis: "Une soirée entre amis parfaite grâce à ce chef à domicile ! Des plats délicieux, un service impeccable, et une ambiance conviviale. Nous avons pu profiter pleinement du moment. Une expérience à refaire !"
        },
        {
            auteur: "D. Dechaume",
            star: "5",
            avis: "Un moment exceptionnel lors de ce cours de cuisine avec Maël ! Grâce à ses explications claires Et sa patience, j’ai appris des techniques faciles à reproduire. Les Saint-Jacques Étaient savoureuses et adaptées à mes goûts. Je recommande vivement !"
        },
        {
            auteur: "A. Calvel ",
            star: "5",
            avis: "Une soirée en tête-à-tête mémorable ! Des plats délicieux, un service attentionné et une expérience parfaitement adaptée à nos goûts. Le chef a su rendre ce moment unique. Je recommande sans hésitation !"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(1);

    // Navigation à gauche
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? card.length - 1 : prev - 1));
    };
  
    // Navigation à droite
    const handleNext = () => {
      setCurrentIndex((prev) => (prev === card.length - 1 ? 0 : prev + 1));
    };

  return (
    <div className={styles.carousselContainer}>
        <div  className={styles.carousselTranslate}>
            <div
                className={styles.carousselContent}
                style={{
                    transform: `translateX(-${currentIndex * 33 }%)`,
                    transition: "transform 0.5s ease-in-out",
                }}
            >
                {card.map((cards, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                        key={index}
                        className={styles.carousselCard}
                        style={{
                            transform: isActive ? "scale(1)" : "scale(0.8)",
                            opacity: isActive ? 1 : 0.5,
                            transition: "transform 0.5s ease, opacity 0.5s ease",
                        }}
                        >
                        <h3>{cards.auteur}</h3>
                        <div className={styles.starsContainer}>
                            {[...Array(Number(cards.star))].map((_, i ) => (
                            <span key={i} className={styles.star}>
                                ★
                            </span>
                            ))}
                    </div>
                    <p>{cards.avis}</p>
                    </div>
                );
                })}
      </div>
            </div>
            <div className={styles.flechesG}  onClick={handlePrev} >
                <Image src="/galerie/gauche.png" alt='fleche de gauche' width={60} height={60} />
            </div>
            <div className={styles.flechesD}  onClick={handleNext}>
                <Image src="/galerie/droite.png" alt='fleche de droite' width={60} height={60} />
            </div>
    </div>
  )
}
