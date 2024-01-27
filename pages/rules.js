import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Rules.module.css';
import SettingButton from './SettingButton';
import RulesButton from './RulesButton';
import BackButton from './BackButton';


export default function Rules() {
    return (
        <main className={styles.main}>
            <SettingButton />
            <RulesButton   />
            <div className={styles.rulesButton}></div>
            <div className={styles.imageContainer}>
                <Image 
                    src="/Images/Regolamento.png" 
                    alt="Descrizione immagine" 
                    width={500}  // Imposta la larghezza desiderata
                    height={1000} // Imposta l'altezza desiderata 
                    objectFit="contain" 
                    className={styles.image}
                />
                <BackButton className={styles.nextButton} />
            </div>
        </main>
    );
}
