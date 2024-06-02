import React, { useState } from "react";

import "./style.scss";
import InstrumentButton from "./components/instrument-button/";
import SoundButton from "./components/sound-button";
import RecordButton from "./components/record-button";



/**
 * WorkStation is the page where users are able to play and record sounds
 * @param {*} props.handleSectionChange - to navigate back to the Landing page
 * @returns JSX
 */
const WorkStation = (props) => {
  /* ==========================================
  STEP 1. Declare states and constant variables 
  ========================================== */
  // The keyMappings state keeps key-soundName-soundSource mapping
  const [keyMappings, setKeyMappings] = useState([]); 
  // The listOfRecordings state keeps list of soundName-soundBlob
  const [listOfRecordings, setListOfRecordings] = useState({name: "recordings", sounds: []});
  // This constant variable is for sounds from the shared directory
  const listOfInstrumentSounds = [
    {
      name: "Trap Drums",
      sounds: [
        {soundName: "drum1", soundSource: ""},
        {soundName: "drum2", soundSource: ""},
        {soundName: "drum3", soundSource: ""},
        {soundName: "drum4", soundSource: ""}
      ]
    },
    {
      name: "Synths",
      sounds: [
        {soundName: "synth1", soundSource: ""},
        {soundName: "synth2", soundSource: ""}
      ]
    }
  ];



  /* ======================
  STEP 2: Declare Functions 
  ====================== */
  // This function adds a new key mapping to a sound
  const addKeyMapping = (key, soundItem) => {
    // Avoid empty keys 
    if (key === undefined) {
      return "ErrorUndefinedKey";
    }
    // Avoid duplicates
    for (let i = 0; i < keyMappings.length; i ++) {
      if (keyMappings[i].mappedKey === key) {
        return "ErrorDuplicateKeys";
      }
    }

    let temp = {mappedKey: key, soundItem: soundItem};
    setKeyMappings((prev) => [...prev, temp]);

    return "Success";
  }

  // Remove a mapping to a key
  const removeKeyMapping = (key) => {
    setKeyMappings((prev) => prev.filter((item) => item.mappedKey !== key));
  }

  // Clear all mappings
  const resetKeyMapping = () => {
    setKeyMappings([]);
  }



  return <div className="workstation-section">
    <button className="back-button" onClick={props.handleSectionChange}>Back</button>
    <h1>Workstation</h1>

    {/* This section contains JSX elements that display the binded keys and the record button */}
    {(keyMappings.length < 1)
      ? <div className="mapped-keys-table">
          <p>Add sounds to the Workstation to begin jamming!</p>
          <RecordButton
            listOfRecordings={listOfRecordings}
            setListOfRecordings={setListOfRecordings}/>
        </div>
      : <div className="mapped-keys-table">
          {keyMappings.map((item, index) => {
            return <SoundButton key={index} 
              buttonType="workstation"
              soundItem={item.soundItem}
              mappedKey={item.mappedKey}
              removeKeyMapping={removeKeyMapping}
              />
          })}
          <RecordButton
            listOfRecordings={listOfRecordings}
            setListOfRecordings={setListOfRecordings}/>
          <button className="workstation-button"
            onClick={resetKeyMapping}>
            Clear workstation</button>
        </div>
    }

    {/* This section contains the JSX elements that display the available sounds */}
    <h1>Instruments</h1>
    <div className="instruments-div">
      {(listOfInstrumentSounds.map((item, index) => {
        // item --> {name: XXX, sounds: [{soundName: YYY, soundSource: ZZZ}]}
        return <InstrumentButton key={index} 
          instrument={item}
          addKeyMapping={addKeyMapping}/>
      }))}
    </div>

    {/* This section contains the JSX elements that display recordings */}
    <h1>Recordings</h1>
    <div className="instruments-div">
    {([listOfRecordings].map((item, index) => {
      // item --> {name: XXX, sounds: [{soundName: YYY, soundSource: ZZZ}]}
      return <InstrumentButton key={index} 
        instrument={item}
        addKeyMapping={addKeyMapping}/>
      }))}
    </div>

    <button onClick={() => {console.log(`TEST ${JSON.stringify(keyMappings.length)}, ${listOfRecordings.length}`)}}>
      Test
    </button>
  </div>
}

export default WorkStation;