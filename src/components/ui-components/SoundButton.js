import React, { useState, useSyncExternalStore } from "react";


const SoundButton = (props) => {
  // props are: name, currentTrack, setTrack
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleButton = () => {
    (isPlaying === true) ? setIsPlaying(false) : setIsPlaying(true);
    if (isPlaying === true) {
      props.setTrack(props.name);
    } else if (isPlaying === false) {
      props.setTrack('');
    }
  }
  return (<button onClick={toggleButton}>{props.name}</button>)
}

export default SoundButton;