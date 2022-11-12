import React, { useEffect, useState } from "react";
import SoundButton from "./SoundButton";


const SoundCollectionButton = (props) => {
  // props are: name, currentTrack, setTrack, tracksArray
  const [isShowingSoundButtons, setIsShowingSoundButtons] = useState(false);
  const [soundButtons, setSoundButtons] = useState([]);


  const toggleIsShowingSoundButtons = () => {
    isShowingSoundButtons === true ? setIsShowingSoundButtons(false) : setIsShowingSoundButtons(true);
  }

  // initialize the sound buttons for this set of sounds
  useEffect(() => {
    setSoundButtons([]);
    for (let i = 0; i < props.tracksArray.length; i++) {
      setSoundButtons(current => [
        ...current,
        <SoundButton key={props.tracksArray[i]} setTrack={props.setTrack} trackName={props.tracksArray[i]}/>
      ])
    }
    console.log(soundButtons)
    // eslint-disable-next-line
  }, []);

  if (isShowingSoundButtons === false) {
    return (
      <button class='sound-collection' onClick={toggleIsShowingSoundButtons}>{props.name}</button>
    )
  } else {
    return (
      <div>
        <button class='sound-collection' onClick={toggleIsShowingSoundButtons}>hide {props.name}</button>
        {soundButtons}
      </div>
    )
  }
}

export default SoundCollectionButton;