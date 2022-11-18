import React, { useEffect, useState } from "react";
import RecordButton from "./RecordButton";
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
    if (props.type === 'sounds') {      
      for (let i = 0; i < props.tracksArray.length; i++) {
        setSoundButtons(current => [
          ...current,
          <SoundButton key={props.tracksArray[i]} setTrack={props.setTrack} trackName={props.tracksArray[i]}/>
        ])
      }
      console.log(soundButtons)
    } else if (props.type === 'recordings') {
      for (let i = 0; i < 3; i ++) {
        setSoundButtons(current => [
          ...current,
          <RecordButton/>
        ])
      }
    }
    // eslint-disable-next-line
  }, []);

  if (isShowingSoundButtons === false) {
    return (
      <div className='mx-0'>
        <button class='sound-collection' onClick={toggleIsShowingSoundButtons}>{props.name}</button>
      </div>
    );
  } else if (props.type === 'recordings') {
    return (
      <div className='mx-3'>
        <div className='row' style={{marginLeft: '-16px'}}> 
          <button class='sound-collection' onClick={toggleIsShowingSoundButtons}>hide and clear {props.name}</button>
        </div>
        <div className='row' style={{marginLeft: '-16px'}}>
          {soundButtons}
        </div>
      </div>
    );
  } else {
    return (
      <div className='mx-3'>
        <div className='row' style={{marginLeft: '-16px'}}> 
          <button class='sound-collection' onClick={toggleIsShowingSoundButtons}>hide {props.name}</button>
        </div>
        <div className='row' style={{marginLeft: '-16px'}}>
          {soundButtons}
        </div>
      </div>
    );
  }
}

export default SoundCollectionButton;