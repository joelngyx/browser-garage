import React, { useEffect, useRef, useState } from "react";

import ReactHowler from "react-howler";

// Atmospheric Sounds
import Synth1 from "../../../../shared/sounds/atmospheric-sounds/PG_HogChain-A.wav";
import Synth2 from "../../../../shared/sounds/atmospheric-sounds/PG_HogChain-C.wav";

// Trap Drums Sounds
import TrapDrums1 from "../../../../shared/sounds/drum-sounds/trap-cymbal-02.wav";
import TrapDrums2 from "../../../../shared/sounds/drum-sounds/trap-cymbal-07.wav";
import TrapDrums4 from "../../../../shared/sounds/drum-sounds/trap-hihat-08.wav";

import "./style.scss";



/**
 * SoundButton is a JSX element that allows for mapping a key to the button, and to play the sound
 * @param {*} props.soundItem // {soundName: YYY, soundSource: ZZZ}
 * @param {*} props.buttonType // possible values: "instrument", "workstation"
 * @param {*} props.addKeyMapping // addKeyMapping = (key, soundName)
 * @returns JSX
 */
const SoundButton = (props) => {
  console.log(`Ahh ${JSON.stringify(props.buttonType)}`)
  console.log(`Ahh ${JSON.stringify(props.soundItem)}, ${JSON.stringify(props.buttonType)}`)
  /* STEP 1: Declare states, refs, constants */
  // The playState state controls if sound is playing from the SoundButton
  const [playState, setPlayState] = useState(false);
  const [soundSource, setSoundSource] = useState();
  const [mapKey, setMapKey] = useState();
  const inputRef = useRef(null);
  const soundButtonRef = useRef(null);
  const soundButtonKeyEvent = useRef("up");



  /* STEP 2: SIDE-EFFECTS, On Load */
  // This sets the source of the sound that this SoundButton plays
  useEffect(() => {
    if (props.soundItem.soundSource === "") {
      switch (props.soundItem.soundName) {
        case "synth1":
          setSoundSource(Synth1);
          break;
        case "synth2":
          setSoundSource(Synth2);
          break;
        case "drum1":
          setSoundSource(TrapDrums1);
          break;
        case "drum2":
          setSoundSource(TrapDrums2);
          break;
        case "drum3":
          setSoundSource(TrapDrums1);
          break;
        case "drum4":
          setSoundSource(TrapDrums4);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line
  }, []);

  // This handles how the SoundButton plays/pauses its sound when keydown/keyup 
  useEffect(() => {
    if (props.buttonType === "workstation") {
      const handleKeyDown = (event) => {
        if (event.key === props.mappedKey) {
          soundButtonKeyEvent.current = "down";
          soundButtonRef.current.click();
        }
      }

      const handleKeyUp = (event) => {
        if (event.key === props.mappedKey) {
          soundButtonKeyEvent.current = "up";
          soundButtonRef.current.click();
        }
      }
     
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      console.log(`soundsource ${soundSource}`)
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      }
    }
    // eslint-disable-next-line
  }, []);



  /* STEP 3: Declare functions */
  const handleMapKeyInput = (e) => {
    if (e.target.value.length > 1) {
      let latestChar = e.target.value[e.target.value.length - 1];
      setMapKey(latestChar);
      e.target.value = latestChar;
    } else {
      setMapKey(e.target.value);
    }
  }

  // The handleSubmitAddButton handles the addition of a key for key-sound mapping
  const handleSubmitAddButton = () => {
    // console.log(`Adding ${props.soundItem.soundName}`)
    let isSuccessful = props.addKeyMapping(mapKey, props.soundItem);
    console.log("TEST SUCC 1")

    if (isSuccessful) {
      inputRef.current.value = "Added!"
    } else {
      inputRef.current.value = "Error"
    }

    switch (isSuccessful) {
      case "ErrorUndefinedKey": 
        inputRef.current.value = "Empty input!";
        break;
      case "ErrorDuplicateKeys":
        inputRef.current.value = "Duplicate key!";
        break;
      case "Success":
        inputRef.current.value = "Added!";
        break;
      default: 
        break;
    }
  }

  //
  const handleSubmitRemoveButton = () => {
    props.removeKeyMapping(props.mappedKey)
  }
  
  const handleButtonClick = () => {
    switch (soundButtonKeyEvent.current) {
      case "up":
        setTimeout(() => {
          soundButtonRef.current.style.backgroundColor = "#FF4365";
          setPlayState(false);
        }, 50);
        break;
      case "down":
        soundButtonRef.current.style.backgroundColor = "#FFC31F";
        setPlayState(true);
        break;
      default:
        break;
    }
  }


  // eslint-disable-next-line
  switch (props.buttonType) {
    case "instrument":
      return <div className="sound-button-div">
        <button className="instrument-sound-button">{props.soundItem.soundName}</button>
        <input ref={inputRef}
          onChange={(e) => {handleMapKeyInput(e)}}></input>
        <button className="add-button" 
          onClick={handleSubmitAddButton}>Add</button>
      </div>
    case "workstation": 
      return <div className="sound-button-div">
        {(playState === true && soundSource !== "" && soundSource !== undefined)
          ?  <ReactHowler src={soundSource} playing={true} loop={true}/>
          : <></>}
        <button ref={soundButtonRef}
          onClick={handleButtonClick}
          className="workstation-sound-button">{`[${props.mappedKey}]`} {props.soundItem.soundName}</button>
        <button className="remove-button" 
          onClick={handleSubmitRemoveButton}>Remove</button>
      </div>
  }
}

export default SoundButton;