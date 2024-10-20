import React, { useEffect, useState } from "react";
import ReactHowler from "react-howler";
import RecordHowlerGlobal from "./record-functions/recordHowlerGlobal";
import FileSaver from 'file-saver';

import "./style.scss";


const RecordButton = (props) => {
  const [recordingState, setRecordingState] = useState('default'); 
  const [playState, setPlayState] = useState(false);
  const [buttonText, setButtonText] = useState('Record');
  const [downloadText, setDownloadText] = useState('Download');
  const [resetText, setResetText] = useState('Reset');
  const [recording, setRecording] = useState('');

  /* === === */
  const toggleState = () => {
    if (recordingState === 'default') { // transition from default to start
      setButtonText('wait...');
      setRecordingState('setup');
      setTimeout(() => {
        setRecording('');
        setButtonText('recording');
        setRecordingState('start');
      }, 1000);
    } else if (recordingState === 'start') { // transition from start to stop
      setRecordingState('stop');
      setButtonText('play');
    } else if (recordingState === 'stop') {
        playState === true ? setPlayState(false) : setPlayState(true);
        buttonText === 'play' ? setButtonText('stop') : setButtonText('play');
    } 
  }

  const download = () => {
    if (recording !== '') {
      FileSaver.saveAs(recording, 'track.webm');
    } else {
      setDownloadText('error');
      setTimeout(() => {
        setDownloadText('Download');
      }, 1000)
    }
  }

  const reset = () => {
    if (recording !== '') {
      setRecording('');
      setRecordingState('default');
      setButtonText('Record');
    } else {
      setResetText('error');
      setTimeout(() => {
        setResetText('Reset');
      }, 1000)
    }
  }

  return (
    <div className="my-1 record-div">
      <p>Recording {props.text}</p>
      <div className="row m-1">
        <button class='sound-button' onClick={toggleState}>{buttonText}</button>
      </div>
      <div className="row m-1">
        <button class='download-button' onClick={download}>{downloadText}</button>
      </div>
      <div className="row m-1">
        <button class='download-button' onClick={reset}>{resetText}</button>
      </div>
      <RecordHowlerGlobal recordingState={recordingState} setRecordings={setRecording}/>
      {(recording === undefined || recording === null || recording === '') // to avoid any null errors if the recording state contains no value
        ? <></> 
        : <ReactHowler src={recording} playing={playState} format={['mp3', 'wav']} loop={true}/> }
    </div>
  )
}

export default RecordButton;