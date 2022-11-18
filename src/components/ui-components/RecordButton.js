import React, { useState } from "react";
import RecordHowlerGlobal from "../sound-components/RecordHowlerGlobal";
import SoundPlayer from "../sound-components/SoundPlayer";


const RecordButton = () => {
  const [recordingState, setRecordingState] = useState('default'); 
  const [playState, setPlayState] = useState(false);
  const [buttonText, setButtonText] = useState('Record');
  const [recordings, setRecordings] = useState('');
  
  const toggleState = () => {
    if (recordingState === 'default') {
      setRecordings('drums1');
      setButtonText('ready..');
      setRecordingState('setup');
      setTimeout(() => {
        setRecordings('');
        setButtonText('recording');
        setRecordingState('start');
      }, 1000)
    } else if (recordingState === 'start') {
      setRecordingState('stop');
      setButtonText('play')
      console.log(recordings);
    } else if (recordingState === 'stop') {
        playState === true ? setPlayState(false) : setPlayState(true);
        buttonText === 'play' ? setButtonText('stop') : setButtonText('play');
    } 
  }

  return (
    <div className="my-1">
      <button class='sound-button' onClick={toggleState}>{buttonText}</button>
      <RecordHowlerGlobal recordingState={recordingState} setRecordings={setRecordings}/>
      <SoundPlayer currentTrack={'recording'} isPlaying={playState} blob={recordings}/>
    </div>
  )
}

export default RecordButton;