import React, { useEffect, useState } from 'react';
import './App.css';
import './style.scss';
import SoundButton from './components/ui-components/SoundButton';
import SoundPlayer from './components/sound-components/SoundPlayer';

function App() {
  const atmosphericSounds = ['atmos1', 'atmos2', 'atmos3'];
  const drumSounds = ['drums1', 'drums2', 'drums3'];
  const [currentAtmosphericSound, setCurrentAtmosphericSound] = useState('');
  const [currentDrumSound, setCurrentDrumSound] = useState('');
  const [atmosphericSoundButtons, setAtmosphericSoundButtons] = useState([]);
  const [drumSoundButtons, setDrumSoundButtons] = useState([]);
  
  useEffect(() => {
    setAtmosphericSoundButtons([]);
    setDrumSoundButtons([]);
    for(let i = 0; i < atmosphericSounds.length; i++) {
      console.log(i);
      setAtmosphericSoundButtons(current => [...current, 
        <SoundButton name={atmosphericSounds[i]} currentTrack={currentAtmosphericSound} setTrack={setCurrentAtmosphericSound}/>
      ]);
      setDrumSoundButtons(current => [...current,
        <SoundButton name={drumSounds[i]} currentTrack={currentDrumSound} setTrack={setCurrentDrumSound}/>])
    }
  }, []);


  return (
    <div className="App">
      <SoundPlayer currentTrack={currentAtmosphericSound} setTrack={setCurrentAtmosphericSound}/>
      <SoundPlayer currentTrack={currentDrumSound} setTrack={setCurrentDrumSound}/>
      {atmosphericSoundButtons}
      {drumSoundButtons}
      <button onClick={() => {console.log(currentAtmosphericSound)}}>debug</button>
      <h1>hello</h1>
    </div>
  );
}

export default App;
