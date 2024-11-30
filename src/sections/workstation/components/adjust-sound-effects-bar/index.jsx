// eslint-disable-next-line
import React, { useState } from "react";

import "./style.scss";

const AdjustSoundEffectsBar = (props) => {
  return (
    <div class="adjust-sound-effect-bar-div">
      <div className="adjust-rate-bar-div"> 
        <button onClick={props.increaseRateVal}>Increase Pitch {"(2x to move up 1 octave)"}</button>
        <button onClick={props.decreaseRateVal}>Decrease Pitch {"0.5x to move down 1 octave"}</button>
        <p>Value: {props.rateVal}</p>
      </div>
    </div>
  )
}

export default AdjustSoundEffectsBar;