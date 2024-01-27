import { useAppContext } from '@/contexts/AppContext';
import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import rulesStyles from '../styles/Rules.module.css';
import settingButtonStyles from '../styles/SettingButton.module.css';
import SettingButton from './SettingButton';
import RulesButton from './RulesButton';


const backgroundPlayerImages = [
  'url("/selectplayericons/IG_Player-1-BG.svg")',
  'url("/selectplayericons/IG_Player-2-BG.svg")',
  'url("/selectplayericons/IG_Player-3-BG.svg")',
  'url("/selectplayericons/IG_Player-4-BG.svg")',
  'url("/selectplayericons/IG_Player-5-BG.svg")',
  'url("/selectplayericons/IG_Player-6-BG.svg")',
];

const backgroundPenImages = [
  'url("/selectplayericons/IG_Player-1-Pen.svg")',
  'url("/selectplayericons/IG_Player-2-Pen.svg")',
  'url("/selectplayericons/IG_Player-3-Pen.svg")',
  'url("/selectplayericons/IG_Player-4-Pen.svg")',
  'url("/selectplayericons/IG_Player-5-Pen.svg")',
  'url("/selectplayericons/IG_Player-6-Pen.svg")',
];



export default function Home() {
  const { players, updateString, addPlayer, removePlayer } = useAppContext();
  const [validationError, setValidationError] = useState(false);

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    updateString(index, newValue);
  };

  const playButtonHandler = () => {
    const filledPlayers = players.filter(player => player.trim() !== '');
    if (filledPlayers.length < 3) {
      setValidationError(true);
    } else {
      setValidationError(false);
      // Naviga alla pagina successiva programmatticamente
      window.location.href = '/rules';
    }
  };

  useEffect(() => {
    const sound = new Howl({
      src: ['/giocacazzo.aac'],
      autoplay: true,
      loop: true,
      volume: 1.0,
    });

    return () => {
      sound.unload();
    };
  }, []);

  return (
    <main className="text-5xl flex items-center justify-center w-screen h-screen">
      <SettingButton />   {/* aggiunti bottoni impostazioni e regolamento */}
            <RulesButton   />
            <div className={rulesStyles.rulesButton}></div>
            <div className={settingButtonStyles.SettingButton}></div>
      <div className='boxStyle'>
        <div className='iscrizionegiocatori'>
          <div className='iscrizionegiocatoriscritta'>
            {/* Contenuto del div 'iscrizionegiocatoriscritta' */}
          </div>
        </div>
        {players.map((str, index) => (
          //gestisce lo sfondo del text
          <div key={index} className="playerBox" style={{ background: backgroundPlayerImages[index]}}>
            {/* codice per la penna  */}
            <div className = 'penImage'style={{
                background: backgroundPenImages[index],
              }}>
            </div>
            <label
            />
            <label style={{ width: '100%', marginBottom: '5px' }}>
              {/* definisce inputbox */}
              <input
                type="text"
                value={str}
                onChange={(event) => handleInputChange(index, event)}
                className={`w-full ${validationError ? 'error' : ''}`}
                style={{
                  background: 'transparent',
                  border: 'transparent',
                  borderBottom: '1px solid #ccc',
                  borderRadius: '0',
                  padding: '5px',
                  marginTop: '5px',
                  paddingLeft: '50px', // Aggiunto padding per far spazio all'immagine della penna
                }}
              />
            </label>
          </div>
        ))}
        {validationError && <p style={{ fontSize: '0.65em' }} className={`text-red-500 ${validationError ? 'error-message' : ''}`}>Almeno tre giocatori devono essere inseriti.</p>}
        <button onClick={addPlayer}>+</button>
        <button onClick={removePlayer}>-</button>
        <button className='play-button' onClick={playButtonHandler}>
          <div className='play-button-text'>
            {/* Contenuto del div 'iscrizionegiocatoriscritta' */}
          </div>
        </button>
      </div>
      <style jsx>{`
        .iscrizionegiocatori {
          background-image: url('selectplayericons/IG-Title-BG.svg');
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 13vh;
          width: 33vw;
        }

        .iscrizionegiocatoriscritta {
          background-image: url('selectplayericons/IG-Title-Text.svg');
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10vh;
          width: 30vw;
        }

        .play-button {
          background-image: url('selectplayericons/IG-Continua-Sfondo.svg');
          background-size: cover;
          background-repeat: no-repeat;
          height: 13vh;
          width: 33vw;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .play-button-text {
          z-index: 1;
          background-image: url('selectplayericons/IG-Continua-Text.svg');
          background-size: cover;
          background-repeat: no-repeat;
          height: 4vh;
          width: 11vw;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .boxStyle  {
          background-image: url('selectplayericons/IG-BG.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        };

        .playerBox {
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 80vw; /* Puoi regolare la larghezza in base alle tue esigenze */
          margin-bottom: 15vh; /* Aggiunto uno spazio tra le box dei giocatori */
          background-position: left top;
        }

        .penImage {
          width: 5vw;
          height: 10vh;
          position: absolute;
        }
      `}</style>
    </main>
  );
}
