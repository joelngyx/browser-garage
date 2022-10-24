import React, { useState } from "react";


const SoundButton = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);


  const toggleIsPlaying = () => {
    isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
    
    if(isPlaying === false) {
      props.setTrack('');
    } else if (isPlaying === true) {
      props.setTrack(props.trackName);
    }
  }

  return (<button onClick={toggleIsPlaying}>{props.trackName}</button>)

}

export default SoundButton;