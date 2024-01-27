import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

const backgroundImages = [
  'url("/selectplayericons/IG_Player-1-BG.svg")',
  'url("/selectplayericons/IG_Player-2-BG.svg")',
  'url("/selectplayericons/IG_Player-3-BG.svg")',
  'url("/selectplayericons/IG_Player-4-BG.svg")',
  'url("/selectplayericons/IG_Player-5-BG.svg")',
  'url("/selectplayericons/IG_Player-6-BG.svg")',
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
      volume: 2.0, 
    });

    return () => {
      sound.unload();
    };
  }, []);

  return (
    <main className="text-5xl flex flex-col items-center justify-center w-screen h-screen">
      <div className='flex flex-col h-screen items-center w-10/12'>
      <div className='iscrizionegiocatori'>
          <div className='iscrizionegiocatoriscritta'>
            {/* Contenuto del div 'iscrizionegiocatoriscritta' */}
          </div>
        </div>
        {players.map((str, index) => (
          <div
            key={index}
            style={{
              background: index < 2 ? backgroundImages[index] : backgroundImages[index % backgroundImages.length],
              padding: '10px',
              borderRadius: '0px',
              marginBottom: '0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <label style={{ width: '100%', marginBottom: '5px' }}>
              Player {index + 1}:
              <input
                type="text"
                value={str}
                onChange={(event) => handleInputChange(index, event)}
                className={`w-full ${validationError ? 'error' : ''}`}
                style={{
                  background: 'transparent',
                  border: 'transparent',
                  borderBottom: '1px solid #ccc',
                  borderRadius: '0', // Senza bordo arrotondato
                  padding: '5px',
                  marginTop: '5px',
                }}
              />
            </label>
          </div>
        ))}
        {validationError &&  <p style={{ fontSize: '0.65em' }} className={`text-red-500 ${validationError ? 'error-message' : ''}`}>Almeno tre giocatori devono essere inseriti.</p>}
        <button onClick={addPlayer}>+</button>
        <button onClick={removePlayer}>-</button>
        <button onClick={playButtonHandler}>Gioca</button>
      </div>
      <style jsx>{`
        .iscrizionegiocatori {
          background-image: url('selectplayericons/IG-Title-BG.svg');
          background-repeat: no-repeat
          display: flex;
          justify-content: center;
          align-items: center;
          height: 33%; /* Imposta l'altezza al 33% dell'altezza del box padre */
          width: 100%; /* Occupa tutta la larghezza del box padre */
        }

        .iscrizionegiocatoriscritta {
          background-image: url('selectplayericons/IG-Title-Text.svg');
          background-repeat: no-repeat
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30%; /* Imposta l'altezza al 30% dell'altezza del box padre */
          width: 100%; /* Occupa tutta la larghezza del box padre */
        }
      `}</style>
    </main>
  );
}
