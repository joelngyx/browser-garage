import React, { useEffect, useState, createContext, useRef } from 'react';
import './App.css';
import './style.scss';
import Header from './components/ui-components/Header';
import SoundCollectionButton from './components/ui-components/SoundCollectionButton';
import SoundPlayer from './components/sound-components/SoundPlayer';
import PreloadAudio from './components/sound-components/PreloadAudio';
// import ResetMappingsButton from './components/ui-components/ResetMappingsButton';


export const KeyboardMappingsContext = createContext();

function App() {
  // array of sounds for each sound collection
  const atmosphericSounds = ['atmos1', 'atmos2', 'atmos3', 'atmos4', 'atmos5', 
                             'atmos6', 'atmos7', 'atmos8', 'atmos9', 'atmos10'];
  const drumSounds = ['drums1', 'drums2', 'drums3', 'drums4', 'drums5',
                      'drums6', 'drums7', 'drums8', 'drums9', 'drums10'];

  // each sound collection's current track
  const [currentAtmosphericSound1, setCurrentAtmosphericSound1] = useState('');
  const [currentAtmosphericSound2, setCurrentAtmosphericSound2] = useState('');
  const currentAtmosphericSound1Ref = useRef(currentAtmosphericSound1);
  const setCurrentAtmosphericSound1Ref = (data) => {currentAtmosphericSound1Ref.current = data;}
  const currentAtmosphericSound2Ref = useRef(currentAtmosphericSound2);
  const setCurrentAtmosphericSound2Ref = (data) => {currentAtmosphericSound2Ref.current = data;}
  const [currentDrumSound1, setCurrentDrumSound1] = useState('');
  const [currentDrumSound2, setCurrentDrumSound2] = useState('');
  const currentDrumSound1Ref = useRef(currentDrumSound1);
  const setCurrentDrumSound1Ref = (data) => {currentDrumSound1Ref.current = data;}
  const currentDrumSound2Ref = useRef(currentDrumSound2);
  const setCurrentDrumSound2Ref = (data) => {currentDrumSound2Ref.current = data;}

  // keyboard mappings
  const [keyboardMappings, setKeyboardMappings] = useState([]);

  useEffect(() => {
    const setSoundAndRef = (setSound, setRef, count) => {
      if (count > -1) {
        setSound(keyboardMappings[count].track);
        setRef(keyboardMappings[count].track);
      } else {
        setSound('');
        setRef('');
      }
    }

    const handleKeyDownEvent = (event) => {
      for (let count = 0; count < keyboardMappings.length; count++) {
        try {
          if (event.key === keyboardMappings[count].mapKey) {
            if (keyboardMappings[count].track.includes('atmos') 
              && currentAtmosphericSound1Ref.current !== keyboardMappings[count].track
              && currentAtmosphericSound2Ref.current !== keyboardMappings[count].track) {
              if (currentAtmosphericSound1Ref.current !== '' && currentAtmosphericSound2Ref.current === '') {
                setSoundAndRef(setCurrentAtmosphericSound2, setCurrentAtmosphericSound2Ref, count);
              } else if (currentAtmosphericSound2Ref.current !== '' && currentAtmosphericSound1Ref.current === '') {
                setSoundAndRef(setCurrentAtmosphericSound1, setCurrentAtmosphericSound1Ref, count);
              } else if (currentAtmosphericSound1Ref.current === '' && currentAtmosphericSound2Ref.current === '') {
                setSoundAndRef(setCurrentAtmosphericSound1, setCurrentAtmosphericSound1Ref, count);
              }
            } else if (keyboardMappings[count].track.includes('drums')
              && currentDrumSound1Ref.current !== keyboardMappings[count].track
              && currentDrumSound2Ref.current !== keyboardMappings[count].track) {
              if (currentDrumSound1Ref.current !== '' && currentDrumSound2Ref.current === '') {
                setSoundAndRef(setCurrentDrumSound2, setCurrentDrumSound2Ref, count);
              } else if (currentDrumSound2Ref.current !== '' && currentDrumSound1Ref.current === '') {
                setSoundAndRef(setCurrentDrumSound1, setCurrentDrumSound1Ref, count);
              } else if (currentDrumSound2Ref.current === '' && currentDrumSound1Ref.current === '') {
                setSoundAndRef(setCurrentDrumSound1, setCurrentDrumSound1Ref, count);
              }
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
    }

    const handleKeyUpEvent = (event) => {
      for (let count = 0; count < keyboardMappings.length; count++) {
        try {
          if (event.key === keyboardMappings[count].mapKey) {
            if (currentAtmosphericSound1Ref.current === keyboardMappings[count].track) {
              setSoundAndRef(setCurrentAtmosphericSound1, setCurrentAtmosphericSound1Ref, -1);
            } else if (currentAtmosphericSound2Ref.current === keyboardMappings[count].track) {
              setSoundAndRef(setCurrentAtmosphericSound2, setCurrentAtmosphericSound2Ref, -1);
            } else if (currentDrumSound1Ref.current === keyboardMappings[count].track) {
              setSoundAndRef(setCurrentDrumSound1, setCurrentDrumSound1Ref, -1);
            } else if (currentDrumSound2Ref.current === keyboardMappings[count].track) {
              setSoundAndRef(setCurrentDrumSound2, setCurrentDrumSound2Ref, -1);
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
    }

    window.removeEventListener('keypress', handleKeyDownEvent);
    window.addEventListener('keypress', handleKeyDownEvent);
    window.addEventListener('keyup', handleKeyUpEvent);
  // eslint-disable-next-line
  },[keyboardMappings]);


  return (
    <div className="App p-5">
      <Header/>
      <PreloadAudio/>
      <SoundPlayer currentTrack={currentAtmosphericSound1} 
        setTrack={setCurrentAtmosphericSound1} 
        setRef={setCurrentAtmosphericSound1Ref}/>
      <SoundPlayer currentTrack={currentAtmosphericSound2} 
        setTrack={setCurrentAtmosphericSound2}
        setRef={setCurrentAtmosphericSound2Ref}/>
      <SoundPlayer currentTrack={currentDrumSound1} 
        setTrack={setCurrentDrumSound1}
        setRef={setCurrentDrumSound1Ref}/>
      <SoundPlayer currentTrack={currentDrumSound2} 
        setTrack={setCurrentDrumSound2}
        setRef={setCurrentDrumSound2Ref}/>
      <div className='d-flex justify-content-start mx-0'>
        <KeyboardMappingsContext.Provider value={{keyboardMappings, setKeyboardMappings}}>
          <SoundCollectionButton type='sounds'
            tracksArray={atmosphericSounds} 
            name='atmospheric sounds' 
            setTrack={setCurrentAtmosphericSound1}/>
        </KeyboardMappingsContext.Provider>
      </div>
      <div className='d-flex justify-content-start mx-0'>
        <KeyboardMappingsContext.Provider value={{keyboardMappings, setKeyboardMappings}}>
          <SoundCollectionButton type='sounds'
            tracksArray={drumSounds} 
            name='drum sounds' 
            setTrack={setCurrentDrumSound1}/>
        </KeyboardMappingsContext.Provider>
      </div>
      <div className='d-flex justify-content-start mx-0'>
        <SoundCollectionButton type='recordings' name='recordings group 1'/>
      </div>
      <div className='d-flex justify-content-start mx-0'>
        <SoundCollectionButton type='recordings' name='recordings group 2'/>
      </div>
      {/* <div className='d-flex justify-content-start mx-0'>
        <ResetMappingsButton setKeyboardMappings={setKeyboardMappings}/>
      </div> */}
    </div>
  );
}

export default App;
