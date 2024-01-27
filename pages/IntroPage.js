import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Assicurati di importare Link da 'next/link'
import styles from '../styles/MyPage.module.css'; // Assicurati che il percorso del file CSS sia corretto

const IntroPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="../public/Images/5C_Rosettaaggiustalacorona.png" // Assicurati che il percorso sia corretto. In Next.js, i percorsi delle immagini iniziano dalla cartella 'public'
          alt="Descrizione dell'immagine"
          layout="fill"
          objectFit="contain"
        />
      </div >
      <div className={styles.textBlock}>
        <p>
          C'era una volta, in un regno ricco di fiumi e verde di boschi, 
          un grande castello di Zucchero e Glassa. La regina, una strega buona e potente, 
          governava con giustizia.
        </p>
      </div>
      <Link href="/prossimaPagina">
      className={styles.button}
      </Link>
    </div>
  );
};

export default IntroPage;
