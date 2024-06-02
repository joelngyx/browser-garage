import React, { useState } from "react";

import "./style.scss";
import SoundButton from "../sound-button/";



/**
 * InstrumentButton is a JSX element that displays/hides SoundButtons in a particular sound category
 * @param {*} props.instrument // {name: XXX, sounds: [{soundName: YYY, soundSource: ZZZ}]}
 * @param {*} props.addKeyMapping
 * @returns JSX
 */
const InstrumentButton = (props) => {
  /* STEP 1. Declare states */
  // The showSounds state control the toggling between displaying/hiding SoundButtons
  const [showSounds, setShowSounds] = useState(false);

  /* STEP 2. Declare function */
  // This function toggles the showSounds state
  const toggleShowSoundsState = () => {
    setShowSounds(!showSounds);
  }

  if (showSounds) {
    return <div className="instrument-sounds-div">

      {/* Instrument Title */}
      <h1 className="instrument-title">{props.instrument.name}</h1>

      {/* SoundButtons */}
      <div className="sounds-div">
        {(props.instrument.sounds).map((item, index) => {
          return <SoundButton key={index} 
            // item --> {soundName: YYY, soundSource: ZZZ}
            soundItem={item} 
            buttonType="instrument"
            addKeyMapping={props.addKeyMapping}/>
        })}
      </div>

      {/* "Hide SoundButtons" Button */}
      <div>
        <button className="hide-sounds-button"
          onClick={toggleShowSoundsState}>Hide {props.instrument.name}</button>
      </div>
    </div>;
  } else {
    return <div className="instrument-sounds-div">

      {/* "Show SoundButtons" Button */}
      <button onClick={toggleShowSoundsState}
        className="instrument-button">Show {props.instrument.name}</button>
    </div>;
  }
}

export default InstrumentButton;