import React, { useEffect, useState } from 'react';
import './App.css';
import './style.scss';
import SoundCollectionButton from './components/ui-components/SoundCollectionButton';
import SoundPlayer from './components/sound-components/SoundPlayer';


function App() {
  // array of sounds for each sound collection
  const atmosphericSounds = ['atmos1', 'atmos2', 'atmos3'];
  const drumSounds = ['drums1', 'drums2', 'drums3'];
  // each sound collection's current track
  const [currentAtmosphericSound, setCurrentAtmosphericSound] = useState('');
  const [currentDrumSound, setCurrentDrumSound] = useState('');


  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'a':
          break;
        case 'b':
          setCurrentAtmosphericSound('');
          setCurrentAtmosphericSound('atmos2');
          break;
        case '[':
          setCurrentDrumSound('drums1');
          break;
        case ']':
          setCurrentDrumSound('drums2');
          break;
        case '=':
          setCurrentDrumSound('drums3');
          break;
        default:
          console.log('def');
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      setCurrentDrumSound('');
    })
  // eslint-disable-next-line
  },[]);


  return (
    <div className="App">
      <SoundPlayer currentTrack={currentAtmosphericSound} setTrack={setCurrentAtmosphericSound}/>
      <SoundPlayer currentTrack={currentDrumSound} setTrack={setCurrentDrumSound}/>
      <SoundCollectionButton tracksArray={atmosphericSounds} name='atmospheric sounds' setTrack={setCurrentAtmosphericSound}/>
      <SoundCollectionButton tracksArray={drumSounds} name='drum sounds' setTrack={setCurrentDrumSound}/>
      <button onClick={() => {console.log(currentAtmosphericSound)}}>debug</button>
      <h1>hello</h1>
    </div>
  );
}

export default App;
