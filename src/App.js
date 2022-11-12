import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import './style.scss';
import Header from './components/ui-components/Header';
import SoundCollectionButton from './components/ui-components/SoundCollectionButton';
import SoundPlayer from './components/sound-components/SoundPlayer';


export const KeyboardMappingsContext = createContext();

function App() {
  // array of sounds for each sound collection
  const atmosphericSounds = ['atmos1', 'atmos2', 'atmos3'];
  const drumSounds = ['drums1', 'drums2', 'drums3', 'drums4', 'drums5',
                      'drums6', 'drums7', 'drums8', 'drums9', 'drums10',
                      'drums11', 'drums12', 'drums13', 'drums14', 'drums15',
                      'drums16', 'drums17', 'drums18', 'drums19', 'drums20'];
  // each sound collection's current track
  const [currentAtmosphericSound, setCurrentAtmosphericSound] = useState('');
  const [currentDrumSound, setCurrentDrumSound] = useState('');
  // keyboard mappings
  const [keyboardMappings, setKeyboardMappings] = useState([]);


  useEffect(() => {
    console.log(keyboardMappings)
    const handleKeyDownEvent = (event) => {
      console.log(keyboardMappings)
      for (let count = 0; count < keyboardMappings.length; count++) {
        try {
          if (event.key === keyboardMappings[count].mapKey) {
            if (keyboardMappings[count].track.includes('atmos')) {
              setCurrentAtmosphericSound(keyboardMappings[count].track)
            } else if (keyboardMappings[count].track.includes('drums')) {
              setCurrentDrumSound(keyboardMappings[count].track)
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
    }

    const handleKeyUpEvent = () => {
      setCurrentDrumSound('');
      setCurrentAtmosphericSound('');
    }

    window.removeEventListener('keydown', handleKeyDownEvent)
    window.removeEventListener('keyup', handleKeyUpEvent)
    window.addEventListener('keydown', handleKeyDownEvent)
    window.addEventListener('keyup', handleKeyUpEvent)
  // eslint-disable-next-line
  },[keyboardMappings]);


  return (
    <div className="App">
      <Header/>
      <SoundPlayer currentTrack={currentAtmosphericSound} setTrack={setCurrentAtmosphericSound}/>
      <SoundPlayer currentTrack={currentDrumSound} setTrack={setCurrentDrumSound}/>
      <h1>sound collections</h1>
      <KeyboardMappingsContext.Provider value={{keyboardMappings, setKeyboardMappings}}>
        <SoundCollectionButton tracksArray={atmosphericSounds} name='atmospheric sounds' setTrack={setCurrentAtmosphericSound}/>
        <SoundCollectionButton tracksArray={drumSounds} name='drum sounds' setTrack={setCurrentDrumSound}/>
      </KeyboardMappingsContext.Provider>
    </div>
  );
}

export default App;
