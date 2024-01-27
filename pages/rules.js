import Link from 'next/link';
import Image from 'next/image';
import styles from './Rules.module.css';

export default function Rules() {
    return (
        <main className={styles.main}>
            <div className={styles.imageContainer}>
                <Image 
                    src="/Images/Regolamento.png" 
                    alt="Descrizione immagine" 
                    width={380}  // Imposta la larghezza desiderata
                    height={1000} // Imposta l'altezza desiderata 
                    objectFit="contain" 
                    className={styles.image}
                />
                <Link href="/prossimaPagina" className={styles.nextButton}>
                    Avanti
                </Link>
            </div>
        </main>
    );
}
