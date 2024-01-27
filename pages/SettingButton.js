import React, { useState } from 'react';
import styles from '../styles/SettingButton.module.css'; // Assicurati che il percorso sia corretto

function SettingButton() {
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1); // Volume iniziale al massimo

    const toggleMute = () => {
        setVolume(prevVolume => prevVolume > 0 ? 0 : 1); // Alterna tra 0 e 1
    };

    return (
        <>
            <button className={styles.settingButton} onClick={() => setShowSettings(!showSettings)}></button>

            {showSettings && (
                <div className={styles.settingsPanel}>
                    <label htmlFor="volumeControl">Volume:</label>
                    <input
                        type="range"
                        id="volumeControl"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={e => setVolume(e.target.value)}
                    />
                    <button onClick={toggleMute}>
                        {volume > 0 ? 'Muta' : 'Unmute'}
                    </button>
                </div>
            )}
        </>
    );
}

export default SettingButton;
