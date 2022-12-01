import React, { useState } from "react";
import RecordHowlerGlobal from "../sound-components/RecordHowlerGlobal";
import SoundPlayer from "../sound-components/SoundPlayer";
import FileSaver from 'file-saver';


const RecordButton = () => {
  const [recordingState, setRecordingState] = useState('default'); 
  const [playState, setPlayState] = useState(false);
  const [buttonText, setButtonText] = useState('Record');
  const [recordings, setRecordings] = useState('');
  
  const toggleState = () => {
    if (recordingState === 'default') {
      setRecordings('drums1');
      setButtonText('ready in a second!');
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

  const download = () => {
    console.log(recordings);
    // const file = new Blob([recordings], { 'type' : 'audio/wav; codecs=0' });
    FileSaver.saveAs(recordings, 'track.webm');
  }

  return (
    <div className="my-1">
      <div className="row m-0">
        <button class='sound-button' onClick={toggleState}>{buttonText}</button>
      </div>
      <div className="row m-0">
        <button class='download-button' onClick={download}>download</button>
      </div>
      <RecordHowlerGlobal recordingState={recordingState} setRecordings={setRecordings}/>
      <SoundPlayer currentTrack={'recording'} isPlaying={playState} blob={recordings}/>
    </div>
  )
}

export default RecordButton;