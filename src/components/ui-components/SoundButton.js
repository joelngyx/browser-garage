import React, { useState, useContext } from "react";
import { KeyboardMappingsContext } from "../../App";

const SoundButton = (props) => {
  const [mapKey, setMapKey] = useState('');
  const {keyboardMappings, setKeyboardMappings} = useContext(KeyboardMappingsContext);
  const [buttonText, setButtonText] = useState('apply')


  const playSound = () => {
    props.setTrack(props.trackName);
  }

  const clearSound = () => {
    props.setTrack('');
  }

  const updateMapKey = (e) =>{
    if (e.target.value.length < 2) {
      setMapKey(e.target.value);
    }
  }

  const addKeyboardMappings = () => {
    for (let count = 0; count < keyboardMappings.length; count++) {
      try {
        if (keyboardMappings[count].track === props.trackName || keyboardMappings[count].mapKey === mapKey) {
          keyboardMappings.splice(count,1);
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (mapKey === '') {
      setButtonText('error');
    } else {
      setKeyboardMappings(current => [
        ...current, {track: props.trackName, mapKey: mapKey}
      ]);
      setButtonText('done!');
    }
    setTimeout(() => {setButtonText('apply')}, 1000);
  }

  return (
    <div className="my-1 mx-0">
      <div className="row m-0">
        <button class='sound-button' onMouseDown={playSound} onMouseUp={clearSound}>{props.trackName}</button>
      </div>
      <div className="row m-0">
        <input type='text' value={mapKey} placeholder='map' onChange={updateMapKey}></input>
        <button onClick={addKeyboardMappings}>{buttonText}</button>
      </div>
    </div>)

}

export default SoundButton;