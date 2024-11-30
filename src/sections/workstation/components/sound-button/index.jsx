import React, { useEffect, useRef, useState } from "react";

import ReactHowler from "react-howler";

// // Atmospheric Sounds
// import Synth1 from "../../../../shared/sounds/atmospheric-sounds/PG_HogChain-A.wav";
// import Synth2 from "../../../../shared/sounds/atmospheric-sounds/PG_HogChain-C.wav";

// Trap Drums Sounds
import Clap1 from "../../../../shared/sounds/drum-sounds/clap-1.mp3";
import Clap2 from "../../../../shared/sounds/drum-sounds/clap-2.mp3";
import Clap3 from "../../../../shared/sounds/drum-sounds/clap-3.mp3";
import Clap4 from "../../../../shared/sounds/drum-sounds/clap-4.mp3";
import Clap5 from "../../../../shared/sounds/drum-sounds/clap-5.mp3";
import HiHat1 from "../../../../shared/sounds/drum-sounds/hi-hat-1.mp3";
import HiHat2 from "../../../../shared/sounds/drum-sounds/hi-hat-2.mp3";
import HiHat3 from "../../../../shared/sounds/drum-sounds/hi-hat-3.mp3";
import HiHat4 from "../../../../shared/sounds/drum-sounds/hi-hat-4.mp3";
import HiHat5 from "../../../../shared/sounds/drum-sounds/hi-hat-5.mp3";
import Kick1 from "../../../../shared/sounds/drum-sounds/kick-1.mp3";
import Kick2 from "../../../../shared/sounds/drum-sounds/kick-1.mp3";
import Kick3 from "../../../../shared/sounds/drum-sounds/kick-1.mp3";
import Kick4 from "../../../../shared/sounds/drum-sounds/kick-1.mp3";
import Kick5 from "../../../../shared/sounds/drum-sounds/kick-1.mp3";
import OpenHat1 from "../../../../shared/sounds/drum-sounds/open-hat-1.mp3";
import OpenHat2 from "../../../../shared/sounds/drum-sounds/open-hat-1.mp3";
import OpenHat3 from "../../../../shared/sounds/drum-sounds/open-hat-1.mp3";
import OpenHat4 from "../../../../shared/sounds/drum-sounds/open-hat-1.mp3";
import OpenHat5 from "../../../../shared/sounds/drum-sounds/open-hat-1.mp3";
import Snare1 from "../../../../shared/sounds/drum-sounds/snare-1.mp3";
import Snare2 from "../../../../shared/sounds/drum-sounds/snare-1.mp3";
import Snare3 from "../../../../shared/sounds/drum-sounds/snare-1.mp3";
import Snare4 from "../../../../shared/sounds/drum-sounds/snare-1.mp3";
import Snare5 from "../../../../shared/sounds/drum-sounds/snare-1.mp3";
import Key01 from "../../../../shared/sounds/piano-sounds/key01.mp3";
import Key02 from "../../../../shared/sounds/piano-sounds/key02.mp3";
import Key03 from "../../../../shared/sounds/piano-sounds/key03.mp3";
import Key04 from "../../../../shared/sounds/piano-sounds/key04.mp3";
import Key05 from "../../../../shared/sounds/piano-sounds/key05.mp3";
import Key06 from "../../../../shared/sounds/piano-sounds/key06.mp3";
import Key07 from "../../../../shared/sounds/piano-sounds/key07.mp3";
import Key08 from "../../../../shared/sounds/piano-sounds/key08.mp3";
import Key09 from "../../../../shared/sounds/piano-sounds/key09.mp3";
import Key10 from "../../../../shared/sounds/piano-sounds/key10.mp3";
import Key11 from "../../../../shared/sounds/piano-sounds/key11.mp3";
import Key12 from "../../../../shared/sounds/piano-sounds/key12.mp3";
import Key13 from "../../../../shared/sounds/piano-sounds/key13.mp3";
import Key14 from "../../../../shared/sounds/piano-sounds/key14.mp3";
import Key15 from "../../../../shared/sounds/piano-sounds/key15.mp3";
import Key16 from "../../../../shared/sounds/piano-sounds/key16.mp3";
import Key17 from "../../../../shared/sounds/piano-sounds/key17.mp3";
import Key18 from "../../../../shared/sounds/piano-sounds/key18.mp3";
import Key19 from "../../../../shared/sounds/piano-sounds/key19.mp3";
import Key20 from "../../../../shared/sounds/piano-sounds/key20.mp3";
import Key21 from "../../../../shared/sounds/piano-sounds/key21.mp3";
import Key22 from "../../../../shared/sounds/piano-sounds/key22.mp3";
import Key23 from "../../../../shared/sounds/piano-sounds/key23.mp3";
import Key24 from "../../../../shared/sounds/piano-sounds/key24.mp3";


import "./style.scss";



/**
 * SoundButton is a JSX element that allows for mapping a key to the button, and to play the sound
 * @param {*} props.soundItem // {soundName: YYY, soundSource: ZZZ}
 * @param {*} props.buttonType // possible values: "instrument", "workstation"
 * @param {*} props.addKeyMapping // addKeyMapping = (key, soundName)
 * @returns JSX
 */
const SoundButton = (props) => {
  /* STEP 1: Declare states, refs, constants */ 
  const [playState, setPlayState] = useState(false); // controls if sound is playing from the SoundButton
  const [soundSource, setSoundSource] = useState();
  const [mapKey, setMapKey] = useState();

  const inputRef = useRef(null);
  const soundButtonRef = useRef(null);
  const soundButtonKeyEvent = useRef("up");



  /* STEP 2: SIDE-EFFECTS, On Load */
  // This sets the source of the sound that this SoundButton plays
  useEffect(() => {
    if (props.soundItem.soundSource === "") { 
      // This sound is from the source code
      switch (props.soundItem.soundName) {
        case "clap-1":
          setSoundSource(Clap1);
          break;
        case "clap-2":
          setSoundSource(Clap2);
          break;
        case "clap-3":
          setSoundSource(Clap3);
          break;
        case "clap-4":
          setSoundSource(Clap4);
          break;
        case "clap-5":
          setSoundSource(Clap5);
          break;
        case "open-hat-1":
          setSoundSource(OpenHat1);
          break;
        case "open-hat-2":
          setSoundSource(OpenHat2);
          break;
        case "open-hat-3":
          setSoundSource(OpenHat3);
          break;
        case "open-hat-4":
          setSoundSource(OpenHat4);
          break;
        case "open-hat-5":
          setSoundSource(OpenHat5);
          break;        
        case "kick-1":
          setSoundSource(Kick1);
          break;
        case "kick-2":
          setSoundSource(Kick2);
          break;
        case "kick-3":
          setSoundSource(Kick3);
          break;
        case "kick-4":
          setSoundSource(Kick4);
          break;
        case "kick-5":
          setSoundSource(Kick5);
          break;    
        case "hi-hat-1":
          setSoundSource(HiHat1);
          break;
        case "hi-hat-2":
          setSoundSource(HiHat2);
          break;
        case "hi-hat-3":
          setSoundSource(HiHat3);
          break;
        case "hi-hat-4":
          setSoundSource(HiHat4);
          break;
        case "hi-hat-5":
          setSoundSource(HiHat5);
          break;       
        case "snare-1":
          setSoundSource(Snare1);
          break;
        case "snare-2":
          setSoundSource(Snare2);
          break;
        case "snare-3":
          setSoundSource(Snare3);
          break;
        case "snare-4":
          setSoundSource(Snare4);
          break;
        case "snare-5":
          setSoundSource(Snare5);
          break; 
        case "key-01":
          setSoundSource(Key01);
          break;
        case "key-02":
          setSoundSource(Key02);
          break;
        case "key-03":
          setSoundSource(Key03);
          break;
        case "key-04":
          setSoundSource(Key04);
          break;
        case "key-05":
          setSoundSource(Key05);
          break;
        case "key-06":
          setSoundSource(Key06);
          break;
        case "key-07":
          setSoundSource(Key07);
          break;
        case "key-08":
          setSoundSource(Key08);
          break;
        case "key-09":
          setSoundSource(Key09);
          break;
        case "key-10":
          setSoundSource(Key10);
          break;
        case "key-11":
          setSoundSource(Key11);
          break;
        case "key-12":
          setSoundSource(Key12);
          break;
        case "key-13":
          setSoundSource(Key13);
          break;
        case "key-14":
          setSoundSource(Key14);
          break;
        case "key-15":
          setSoundSource(Key15);
          break;
        case "key-16":
          setSoundSource(Key16);
          break;
        case "key-17":
          setSoundSource(Key17);
          break;
        case "key-18":
          setSoundSource(Key18);
          break;
        case "key-19":
          setSoundSource(Key19);
          break;
        case "key-20":
          setSoundSource(Key20);
          break;
        case "key-21":
          setSoundSource(Key21);
          break;
        case "key-22":
          setSoundSource(Key22);
          break;
        case "key-23":
          setSoundSource(Key23);
          break;
        case "key-24":
          setSoundSource(Key24);
          break;
        default:
          break;
      }
    } 
    // eslint-disable-next-line
  }, []);

  // This handles how the SoundButton plays/pauses its sound when keydown/keyup 
  useEffect(() => {
    if (props.buttonType === "workstation" || props.buttonType === "instrument") {
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
  /* === === */
  const handleMapKeyInput = (e) => {
    if (e.target.value.length > 1) {
      let latestChar = e.target.value[e.target.value.length - 1];
      setMapKey(latestChar);
      e.target.value = latestChar;
    } else {
      setMapKey(e.target.value);
    }
  }

  /* === Handles the addition of a key for key-sound mapping === */
  const handleSubmitAddButton = () => {
    let isSuccessful = props.addKeyMapping(mapKey, props.soundItem);

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

  /* === Handles button taps and mouse clicks of the Sound Button === */
  const handleButtonClickForTouchAndMouse = (val) => {
    switch (val) {
      case true:
        soundButtonRef.current.style.backgroundColor = "#FFC31F";
        setPlayState(true);
        break;
      case false:
        setTimeout(() => {
          soundButtonRef.current.style.backgroundColor = "#FF4365";
          setPlayState(false);
        }, 50);
        break;
      default:
        break;
    }
  }


  // eslint-disable-next-line
  switch (props.buttonType) {
    case "instrument": // how the sound button would appear if it is under the instrument section
      return <div className="sound-button-div">
        {(playState === true && soundSource !== "" && soundSource !== undefined)
          ?  <ReactHowler src={soundSource} playing={true} loop={true}/>
          : <></>}
        <button className="instrument-sound-button"
          onMouseDown={() => {handleButtonClickForTouchAndMouse(true)}}
          onMouseUp={() => {handleButtonClickForTouchAndMouse(false)}}
          onTouchStart={() => {handleButtonClickForTouchAndMouse(true)}}
          onTouchEnd={() => {handleButtonClickForTouchAndMouse(false)}}>
          {props.soundItem.soundName}
        </button>
        <input ref={inputRef}
          onChange={(e) => {handleMapKeyInput(e)}}></input>
        <button className="add-button" 
          onClick={handleSubmitAddButton}>Add</button>
      </div>
    case "workstation": // how the sound button would appear if it is under the workstation section
      return <div className="sound-button-div">
        {(playState === true && soundSource !== "" && soundSource !== undefined)
          ?  <ReactHowler src={soundSource} playing={true} loop={true} rate={props.rateVal}/>
          : <></>}
        <button ref={soundButtonRef}
          onClick={handleButtonClick}
          className="workstation-sound-button"
          onMouseDown={() => {handleButtonClickForTouchAndMouse(true)}}
          onMouseUp={() => {handleButtonClickForTouchAndMouse(false)}}
          onTouchStart={() => {handleButtonClickForTouchAndMouse(true)}}
          onTouchEnd={() => {handleButtonClickForTouchAndMouse(false)}}>
          {`[${props.mappedKey}]`} {props.soundItem.soundName}
        </button>
        <button className="remove-button" 
          onClick={handleSubmitRemoveButton}>Remove</button>
      </div>
  }
}

export default SoundButton;