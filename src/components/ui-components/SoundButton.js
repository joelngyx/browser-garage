import React, { useState, useContext } from "react";


import { KeyboardMappingsContext } from "../../App";

const SoundButton = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mapKey, setMapKey] = useState('');
  const {keyboardMappings, setKeyboardMappings} = useContext(KeyboardMappingsContext);
  const [buttonText, setButtonText] = useState('apply')

  const toggleIsPlaying = () => {
    isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
    
    if (isPlaying === false) {
      props.setTrack('');
    } else if (isPlaying === true) {
      props.setTrack(props.trackName);
    }
  }

  const updateMapKey = (e) =>{
    if (e.target.value.length < 2) {
      setMapKey(e.target.value)
    }
  }

  const addKeyboardMappings = () => {
    for (let count = 0; count < keyboardMappings.length; count++) {
      try {
        if (keyboardMappings[count].track === props.trackName || keyboardMappings[count].mapKey === mapKey) {
          keyboardMappings.splice(count,1)
          // delete keyboardMappings[count]
        }
      } catch (e) {
        console.log(e)
      }
    }

    setKeyboardMappings(current => [
      ...current, {track: props.trackName, mapKey: mapKey}
    ])

    setButtonText('applied!')
  }

  return (
    <div>
      <button class='sound-button' onClick={toggleIsPlaying}>{props.trackName}</button>
      <input type='text' value={mapKey} placeholder='map' onChange={updateMapKey}></input>
      <button onClick={addKeyboardMappings}>{buttonText}</button>
    </div>)

}

export default SoundButton;