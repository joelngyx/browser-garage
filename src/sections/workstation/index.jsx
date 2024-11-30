import React, { useState } from "react";

import "./style.scss";
import InstrumentButton from "./components/instrument-button/";
import SoundButton from "./components/sound-button";
import RecordButton from "./components/record-button";
// eslint-disable-next-line
import AdjustSoundEffectsBar from "./components/adjust-sound-effects-bar";
import RecordInputAudioButton from "./components/record-input-audio-button";


/**
 * WorkStation is the page where users are able to play and record sounds
 * @param {*} props.handleSectionChange - to navigate back to the Landing page
 * @returns JSX
 */
const WorkStation = (props) => {
  /* ==========================================
  STEP 1. Declare states and constant variables 
  ========================================== */
  const [keyMappings, setKeyMappings] = useState([]); // keeps keyboard key-soundName-soundSource mapping 
  const [recordingComponents, setrecordingComponents] = useState([]);
  const [rateVal, setRateVal] = useState(1); // default to regular playback speed
  const listOfInstrumentSounds = [ // this constant variable is for sounds from the shared directory
    {
      name: "Drums",
      sounds: [
        {soundName: "clap-1", soundSource: ""},
        {soundName: "clap-2", soundSource: ""},
        {soundName: "clap-3", soundSource: ""},
        {soundName: "clap-4", soundSource: ""},
        {soundName: "clap-5", soundSource: ""},
        {soundName: "hi-hat-1", soundSource: ""},
        {soundName: "hi-hat-2", soundSource: ""},
        {soundName: "hi-hat-3", soundSource: ""},
        {soundName: "hi-hat-4", soundSource: ""},
        {soundName: "hi-hat-5", soundSource: ""},
        {soundName: "kick-1", soundSource: ""},
        {soundName: "kick-2", soundSource: ""},
        {soundName: "kick-3", soundSource: ""},
        {soundName: "kick-4", soundSource: ""},
        {soundName: "kick-5", soundSource: ""},
        {soundName: "open-hat-1", soundSource: ""},
        {soundName: "open-hat-2", soundSource: ""},
        {soundName: "open-hat-3", soundSource: ""},
        {soundName: "open-hat-4", soundSource: ""},
        {soundName: "open-hat-5", soundSource: ""},
        {soundName: "snare-1", soundSource: ""},
        {soundName: "snare-2", soundSource: ""},
        {soundName: "snare-3", soundSource: ""},
        {soundName: "snare-4", soundSource: ""},
        {soundName: "snare-5", soundSource: ""}
      ]
    },
    {
      name: "Piano",
      sounds: [
        {soundName: "key-01", soundSource: ""},
        {soundName: "key-02", soundSource: ""},
        {soundName: "key-03", soundSource: ""},
        {soundName: "key-04", soundSource: ""},
        {soundName: "key-05", soundSource: ""},
        {soundName: "key-06", soundSource: ""},
        {soundName: "key-07", soundSource: ""},
        {soundName: "key-08", soundSource: ""},
        {soundName: "key-09", soundSource: ""},
        {soundName: "key-10", soundSource: ""},
        {soundName: "key-11", soundSource: ""},
        {soundName: "key-12", soundSource: ""},
        {soundName: "key-13", soundSource: ""},
        {soundName: "key-14", soundSource: ""},
        {soundName: "key-15", soundSource: ""},
        {soundName: "key-16", soundSource: ""},
        {soundName: "key-17", soundSource: ""},
        {soundName: "key-18", soundSource: ""},
        {soundName: "key-19", soundSource: ""},
        {soundName: "key-20", soundSource: ""},
        {soundName: "key-21", soundSource: ""},
        {soundName: "key-22", soundSource: ""},
        {soundName: "key-23", soundSource: ""},
        {soundName: "key-24", soundSource: ""},
      ]
    }
  ];



  /* ======================
  STEP 2: Declare Functions 
  ====================== */
  /* === This function adds a new key mapping to a sound === */
  const addKeyMapping = (key, soundItem) => {
    if (key === undefined) { // avoid empty keys 
      return "ErrorUndefinedKey";
    }
    
    for (let i = 0; i < keyMappings.length; i ++) { // avoid duplicates
      if (keyMappings[i].mappedKey === key) {
        return "ErrorDuplicateKeys";
      }
    }

    let temp = {mappedKey: key, soundItem: soundItem};
    setKeyMappings((prev) => [...prev, temp]);

    return "Success";
  }

  /* === Remove a mapping to a key === */
  const removeKeyMapping = (key) => {
    setKeyMappings((prev) => prev.filter((item) => item.mappedKey !== key));
  }

  /* === Clear all mappings === */
  const resetKeyMapping = () => {
    setKeyMappings([]);
  }

  /* === Increase number of recordings === */
  const handleAppendRecordings = () => {
    setrecordingComponents([...recordingComponents, {text: `${recordingComponents.length + 1}`}]); // Append a new component
  };

  const increaseRateVal = () => {
    setRateVal(Math.round((rateVal + 0.1) * 10) / 10);
  }

  const decreaseRateVal = () => {
    setRateVal(Math.round((rateVal - 0.1) * 10) / 10);
  }



  return <div className="workstation-section">
    <button className="back-button" onClick={props.handleSectionChange}>Back</button>
    <h1>Workstation</h1>
    {/* The Workstation section contains JSX elements that display:
        - the binded keys
        - the clear workstation button (clears all key mappings)
        - the record button */}
    <div className="mapped-keys-table">
      <button className="add-recording-button" onClick={handleAppendRecordings}>Add Recording</button>
      {recordingComponents.map((component, index) => (
              <RecordButton key={index} text={component.text} />
            ))}
      {/* <RecordInputAudioButton/> */}
      <AdjustSoundEffectsBar rateVal={rateVal}
        increaseRateVal={increaseRateVal}
        decreaseRateVal={decreaseRateVal}/>
      {(keyMappings.length < 1)
        ? <p>Add sounds to the Workstation to begin jamming!</p>
        : <>
            {keyMappings.map((item, index) => {
              return <SoundButton key={index} 
                buttonType="workstation"
                soundItem={item.soundItem}
                mappedKey={item.mappedKey}
                removeKeyMapping={removeKeyMapping}
                rateVal={rateVal}
                />
            })}
            <button className="workstation-button"
              onClick={resetKeyMapping}>
              Reset Workstation</button>
          </>
      }
    </div>

    {/* This Instruments section contains the JSX elements that display: 
      - the available sounds */}
    <h1>Instruments</h1>
    <div className="instruments-div">
      {(listOfInstrumentSounds.map((item, index) => {
        // item --> {name: XXX, sounds: [{soundName: YYY, soundSource: ZZZ}]}
        return <InstrumentButton key={index} 
          instrument={item}
          addKeyMapping={addKeyMapping}/>
      }))}
    </div>
  </div>
}

export default WorkStation;