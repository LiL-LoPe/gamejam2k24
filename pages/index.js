import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';
import { useState } from 'react';

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
      // Navigate to the next page programmatically
      window.location.href = '/rules';
    }
  };

  return (
    <main className="text-5xl flex flex-col items-center justify-center w-screen h-screen">
      <div className='flex flex-col h-screen items-center w-10/12'>
        <h1 className=''>Iscrizione Giocatori</h1>
        {players.map((str, index) => (
          <div key={index} >
            <label>
              Player {index + 1}:
              <input
                type="text"
                value={str}
                onChange={(event) => handleInputChange(index, event)}
                className={`w-full ${validationError ? 'error' : ''}`}
              />
            </label>
          </div>
        ))}
        {validationError &&  <p style={{ fontSize: '0.65em' }} className={`text-red-500 ${validationError ? 'error-message' : ''}`}>Almeno tre giocatori devono essere inseriti.</p>}
        <button onClick={addPlayer}>+</button>
        <button onClick={removePlayer}>-</button>
        <button onClick={playButtonHandler}>Gioca</button>
      </div>
    </main>
  );
}
