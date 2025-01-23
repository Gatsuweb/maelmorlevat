"use client"
import { motion, useScroll, useTransform } from "motion/react"
import Image from 'next/image'
import styles from '../styles/GalerieImage.module.css'
import { useRef, useState } from "react"


export const GalerieImage = () => {
    // const uneRef = useRef(null);
    // const deuxRef = useRef(null);
    // const troisRef = useRef(null);
    // const quatreRef = useRef(null);
    const containerG = useRef(null)
    const { scrollYProgress } = useScroll({
      target: containerG,
      offset: ["start end", "end start"],
    })
    interface ImageDetails {
      source: string;
      alt: string;
      desc?: string;
    }

    const y = useTransform(scrollYProgress,[ 0, 1], [ 0, 1000])
    const y2 = useTransform(scrollYProgress,[ 0, 1], [ 0, -2000])
    const y3 = useTransform(scrollYProgress,[ 0, 1], [ 0, 2000])
    const y4 = useTransform(scrollYProgress,[ 0, 1], [ 0, -500])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<ImageDetails | null>(null);
    const openModal = (image: ImageDetails) => {
      setSelectedImage(image);
      setIsModalOpen(true);
    };

      const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
    
  const colonneUne = [

  {
    source: "/galerie/image22.jpg",
    alt: "image préparation de cuisine",
    desc: "Palet de pomme de terre confit, crème d’oignon caramélisée et pickles d’échalote"
  },

  {
    source: "/galerie/image26.jpg",
    alt: "image préparation de cuisine",
    desc: "Bruschetta au chèvre frais, jambon serrano, figues et noix"
  },
  {
    source: "/galerie/image14.jpg",
    alt: "image préparation de cuisine",
    desc: "Langoustine, kumquat, petit-pois, lard  colonnata, noisette"
  },
  

    {
    source: "/galerie/image3.jpg",
    alt: "image préparation de cuisine",
    desc: "Truite fumée, cresson, citron vert et raifort râpé"
  },
    {
    source: "/galerie/image4.jpg",
    alt: "image préparation de cuisine",
    desc: "Festival du rhum, Show-cooking, Guadeloupe"
  },

    {
    source: "/galerie/image6.jpg",
    alt: "image préparation de cuisine",
    desc: "Tarte feuilletée rhubarbe, crème d’amande et confit rhubarbe"
  },
  {
    source: "/galerie/image22.jpg",
    alt: "image préparation de cuisine",
    desc: "Palet de pomme de terre confit, crème d’oignon caramélisée et pickles d’échalote"
  }
]

  const colonneDeux= [
    {
    source: "/galerie/image10.jpg",
    alt: "image préparation de cuisine",
    desc: "Mini courgette, blette, mozzarella, croûtons"
    },
    {
    source: "/galerie/image8.jpg",
    alt: "image préparation de cuisine",
    desc: "Tataki de thon rouge au sésame, riz basmati et herbes fraîches"
  },
  {
  source: "/galerie/image11.jpg",
  alt: "image préparation de cuisine",
  desc: "Bol énergisant, banane, figue, pomme, fruits secs, fromage blanc, citron vert"
  },
  {
  source: "/galerie/image7.jpg",
  alt: "image préparation de cuisine",
  desc: "Tomates cerises marinées, maïs grillé, pop-corn paprika, gaspacho tomate ananas"
},
{
  source: "/galerie/image5.jpg",
  alt: "image préparation de cuisine",
  desc: "Assortiment de sushis, gingembre confit et wasabi"
},
  {
  source: "/galerie/image9.jpg",
  alt: "image préparation de cuisine",
  desc: "Tartare de dorade coryfène, râpée de  choux-fleurs et agrumes"
},
{
  source: "/galerie/image21.jpg",
  alt: "image préparation de cuisine",
  desc: "Sucrine au barbecue, thon fumé, fromage  blanc aux agrumes et sésame"
},
{
  source: "/galerie/image19.jpg",
  alt: "image préparation de cuisine",
  desc: "Tomates d’antan, burrata di bufala, basilic citron, bourrache"
},

  {
  source: "/galerie/image13.jpg",
  alt: "image préparation de cuisine",
  desc: "Carpaccio de Saint-Jacques, pamplemousse et citron noir d’Iran"
},
{
  source: "/galerie/image28.jpg",
  alt: "image préparation de cuisine",
  desc: "Pizza napolitaine, bresaola, burrata et mesclun"
}
]

const colonneTrois= [
  {
    source: "/galerie/image2.jpg",
    alt: "image préparation de cuisine",
    desc: "Dorade royale, cerise, amande fraîche,  fleurs de sureau"
  },

{
  source: "/galerie/image1.jpg",
  alt: "image préparation de cuisine",
  desc: "Carpaccio d’ananas, palets de mangue, grenade, suprêmes d’agrumes"
},

{
source: "/galerie/image16.jpg",
alt: "image préparation de cuisine",
desc: "Porchetta de lapin, aïoli et pousses de moutarde"
},
{
  source: "/galerie/image17.jpg",
  alt: "image préparation de cuisine",
  desc: "Légumes confits au naturel, condiment prune rouge"
  },

  {
  source: "/galerie/image18.jpg",
  alt: "image préparation de cuisine",
  desc: "Langouste grillée, tagliatelles à l’encre de  seiche, bisque crémée"
},
{
  source: "/galerie/image2.jpg",
  alt: "image préparation de cuisine",
  desc: "Dorade royale, cerise, amande fraîche,  fleurs de sureau"
}
]

const colonneQuatre= [
  {
    source: "/galerie/image12.jpg",
    alt: "image préparation de cuisine",
    desc: "Riz croustillant thon, saumon et avocat"
  },

  {
  source: "/galerie/image23.jpg",
  alt: "image préparation de cuisine",
  desc: "Carpaccio de thazard, pickles d’oignons rouges et herbes fraîches"
},
{
  source: "/galerie/image15.jpg",
  alt: "image préparation de cuisine",
  desc: "Makis thon rouge/mangue/oignons croustillants, california rolls avocat/concombre/cream cheese"
},
{
  source: "/galerie/image24.jpg",
  alt: "image préparation de cuisine",
  desc: "Fromage blanc, gelée de mûres, fruits secs et chocolat"
},
{
  source: "/galerie/image25.jpg",
  alt: "image préparation de cuisine",
  desc: "Risotto au vieux parmesan, filet mignon séché et asperges vertes"
},
{
  source: "/galerie/image.jpg",
  alt: "image préparation de cuisine",
  desc: "Tempura de gambas, mayonnaise chipotle, citron vert"
},

{
  source: "/galerie/image20.jpg",
  alt: "image préparation de cuisine",
  desc: "ShakShuka, œufs, feta, avocat"
},
{
  source: "/galerie/image12.jpg",
  alt: "image préparation de cuisine",
  desc: "Riz croustillant thon, saumon et avocat"
}

]

const colonneUneM = [

  {
    source: "/galerie/image22.jpg",
    alt: "image préparation de cuisine",
    desc: "Palet de pomme de terre confit, crème d’oignon caramélisée et pickles d’échalote"
  },

  {
    source: "/galerie/image26.jpg",
    alt: "image préparation de cuisine",
    desc: "Bruschetta au chèvre frais, jambon serrano, figues et noix"
  },
  {
    source: "/galerie/image14.jpg",
    alt: "image préparation de cuisine",
    desc: "Langoustine, kumquat, petit-pois, lard  colonnata, noisette"
  },
  

    {
    source: "/galerie/image3.jpg",
    alt: "image préparation de cuisine",
    desc: "Truite fumée, cresson, citron vert et raifort râpé"
  },
    {
    source: "/galerie/image4.jpg",
    alt: "image préparation de cuisine",
    desc: "Festival du rhum, Show-cooking, Guadeloupe"
  },
  {
    source: "/galerie/image13.jpg",
    alt: "image préparation de cuisine",
    desc: "Carpaccio de Saint-Jacques, pamplemousse et citron noir d’Iran"
  },
  {
    source: "/galerie/image28.jpg",
    alt: "image préparation de cuisine",
    desc: "Pizza napolitaine, bresaola, burrata et mesclun"
  },

    {
    source: "/galerie/image6.jpg",
    alt: "image préparation de cuisine",
    desc: "Tarte feuilletée rhubarbe, crème d’amande et confit rhubarbe"
  }
]

  const colonneDeuxM= [
    {
    source: "/galerie/image10.jpg",
    alt: "image préparation de cuisine",
    desc: "Mini courgette, blette, mozzarella, croûtons"
    },
    {
    source: "/galerie/image8.jpg",
    alt: "image préparation de cuisine",
    desc: "Tataki de thon rouge au sésame, riz basmati et herbes fraîches"
  },
  {
  source: "/galerie/image11.jpg",
  alt: "image préparation de cuisine",
  desc: "Bol énergisant, banane, figue, pomme, fruits secs, fromage blanc, citron vert"
  },
  {
  source: "/galerie/image7.jpg",
  alt: "image préparation de cuisine",
  desc: "Tomates cerises marinées, maïs grillé, pop-corn paprika, gaspacho tomate ananas"
},
{
  source: "/galerie/image5.jpg",
  alt: "image préparation de cuisine",
  desc: "Assortiment de sushis, gingembre confit et wasabi"
},
  {
  source: "/galerie/image9.jpg",
  alt: "image préparation de cuisine",
  desc: "Tartare de dorade coryfène, râpée de  choux-fleurs et agrumes"
},
{
  source: "/galerie/image21.jpg",
  alt: "image préparation de cuisine",
  desc: "Sucrine au barbecue, thon fumé, fromage  blanc aux agrumes et sésame"
},
{
  source: "/galerie/image19.jpg",
  alt: "image préparation de cuisine",
  desc: "Tomates d’antan, burrata di bufala, basilic citron, bourrache"
}


]

const colonneTroisM= [
  {
    source: "/galerie/image2.jpg",
    alt: "image préparation de cuisine",
    desc: "Dorade royale, cerise, amande fraîche,  fleurs de sureau"
  },

{
  source: "/galerie/image1.jpg",
  alt: "image préparation de cuisine",
  desc: "Carpaccio d’ananas, palets de mangue, grenade, suprêmes d’agrumes"
},

{
source: "/galerie/image16.jpg",
alt: "image préparation de cuisine",
desc: "Porchetta de lapin, aïoli et pousses de moutarde"
},
{
  source: "/galerie/image17.jpg",
  alt: "image préparation de cuisine",
  desc: "Légumes confits au naturel, condiment prune rouge"
  },

  {
  source: "/galerie/image18.jpg",
  alt: "image préparation de cuisine",
  desc: "Langouste grillée, tagliatelles à l’encre de  seiche, bisque crémée"
},
{
  source: "/galerie/image20.jpg",
  alt: "image préparation de cuisine",
  desc: "ShakShuka, œufs, feta, avocat"
}
]

const colonneQuatreM= [
  {
    source: "/galerie/image12.jpg",
    alt: "image préparation de cuisine",
    desc: "Riz croustillant thon, saumon et avocat"
  },

  {
  source: "/galerie/image23.jpg",
  alt: "image préparation de cuisine",
  desc: "Carpaccio de thazard, pickles d’oignons rouges et herbes fraîches"
},
{
  source: "/galerie/image15.jpg",
  alt: "image préparation de cuisine",
  desc: "Makis thon rouge/mangue/oignons croustillants, california rolls avocat/concombre/cream cheese"
},
{
  source: "/galerie/image24.jpg",
  alt: "image préparation de cuisine",
  desc: "Fromage blanc, gelée de mûres, fruits secs et chocolat"
},
{
  source: "/galerie/image25.jpg",
  alt: "image préparation de cuisine",
  desc: "Risotto au vieux parmesan, filet mignon séché et asperges vertes"
},
{
  source: "/galerie/image.jpg",
  alt: "image préparation de cuisine",
  desc: "Tempura de gambas, mayonnaise chipotle, citron vert"
}

]


  return (
    <div className={styles.galerieImageContainer}>
      <div className={styles.galerie1}>
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <Image
  src={selectedImage!.source}
  alt={selectedImage!.alt}
  height={700}
  width={500}
  className={styles.modalImage}
/>
            <p><span>“ </span>{selectedImage!.desc}<span> ”</span></p>
            <button onClick={closeModal} className={styles.closeButton}>
              &times;
            </button>
          </div>
        </div>
      )}
        <div ref={containerG}className={styles.colonnesContainer}>
       
        <motion.div className={styles.colonneUneContainer} style={{ y }}>
            {colonneUne.map((colonne, index) => (
              <Image
                src={colonne.source}
                key={index}
                alt={colonne.alt}
                height={500}
                width={325}
                onClick={() => openModal(colonne)}
                className={styles.image}
              />
          
            ))}
          </motion.div>
          

            <motion.div   className={styles.colonneDeuxContainer}
                 style={{y: y2}}
                 
            >
            {colonneDeux.map((colonnes, index) => (
              <Image
              src={colonnes.source}
              key={index}
              alt={colonnes.alt}
              height={500}
              width={325}
              onClick={() => openModal(colonnes)}
              className={styles.image}
              />              )
            )}
            </motion.div >

            <motion.div  className={styles.colonneTroisContainer}
               style={{y: y3}}
            >
            {colonneTrois.map((colonness, index) => (
                        <Image
                        src={colonness.source}
                        key={index}
                        alt={colonness.alt}
                        height={500}
                        width={325}
                        onClick={() => openModal(colonness)}
                        className={styles.image}
                        /> 
              )
            )}
            </motion.div >

            <motion.div className={styles.colonneQuatreContainer} 
                style={{y: y4}}
            >
            {colonneQuatre.map((colonnesss, index) => (
                        <Image
                        src={colonnesss.source}
                        key={index}
                        alt={colonnesss.alt}
                        height={500}
                        width={325}
                        onClick={() => openModal(colonnesss)}
                        className={styles.image}
                        /> 
              )
            )}
            </motion.div >
        </div>

        <div className={styles.colonnesContainerMobile}>
          <div className={styles.colonnesmobiles}>
              <div className={styles.colonneUneContainer}>
                  {colonneUneM.map((colonnem, index) => (
                    <Image
                      src={colonnem.source}
                      key={index}
                      alt={colonnem.alt}
                      height={500}
                      width={325}
                      onClick={() => openModal(colonnem)}
                      className={styles.image}
                    />
                
                  ))}
                </div>
                
                  <div   className={styles.colonneDeuxContainer}
              
                      
                  >
                  {colonneDeuxM.map((colonnesm, index) => (
                    <Image
                    src={colonnesm.source}
                    key={index}
                    alt={colonnesm.alt}
                    height={500}
                    width={325}
                    onClick={() => openModal(colonnesm)}
                    className={styles.image}
                    />              )
                  )}
                  </div >
            </div>

            <div className={styles.colonnesmobiles}>
              <div  className={styles.colonneTroisContainer}
           
              >
              {colonneTroisM.map((colonnessm, index) => (
                          <Image
                          src={colonnessm.source}
                          key={index}
                          alt={colonnessm.alt}
                          height={500}
                          width={325}
                          onClick={() => openModal(colonnessm)}
                          className={styles.image}
                          /> 
                )
              )}
              </div >

              <div className={styles.colonneQuatreContainer} 
             
              >
              {colonneQuatreM.map((colonnesssm, index) => (
                          <Image
                          src={colonnesssm.source}
                          key={index}
                          alt={colonnesssm.alt}
                          height={500}
                          width={325}
                          onClick={() => openModal(colonnesssm)}
                          className={styles.image}
                          /> 
                )
              )}
              </div >
              </div>
        </div>
      </div>
      <div className={styles.galerie2}></div>
      <div className={styles.galerie3}></div>
      <div className={styles.galerie4}></div>
      <div className={styles.galerie5}></div>
    </div>
  )
}
