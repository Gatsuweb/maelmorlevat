import Image from "next/image";
import { About } from "./components/About";
import { Avis } from "./components/Avis";
import { Contact } from "./components/Contact";
import { Galerie } from "./components/Galerie";

import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Préstations } from "./components/Préstations";
import styles from "./page.module.css";
import { Tarifs } from "./components/Tarifs";
import { SousAboutdeux } from "./components/sousaboutdeux";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <Image 
      src="/texture.svg"
      alt="bg image"
      objectFit="cover"
      quality={100}
      className={styles.bgImg}
      />
          <div className={styles.navBar}>
       <Nav />
      </div>
      <div id="accueil">
      <Hero />
      </div>
      <div className={styles.about}>
        <About />
        <Image src="/logomael.svg" alt='Photo auteur' height={500} width={250} className={styles.logoAbout} />
     </div>
     <SousAboutdeux />

     <div id='prestations'>
     <Préstations />
     </div>
     <div>
     <Tarifs />
     </div>
     <div>
     <Galerie />
     </div>
 
     <div>
     <Avis />
     </div>
     <div id="contact">
     <Contact />    
     </div>

    </div>
  );
}
