// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import ReactHowler from "react-howler";
import RecordHowlerGlobal from "./record-functions/recordHowlerGlobal";
import FileSaver from 'file-saver';

import RecordInputDevice from "./record-functions/recordInputDevice";

import "./style.scss";


const RecordButton = (props) => {
  const [recordingState, setRecordingState] = useState('default'); 
  const [playState, setPlayState] = useState(false);
  const [soundButtonText, setSoundButtonText] = useState('Record Browser');
  const [micButtonText, setMicButtonText] = useState('Record Mic');
  const [downloadText, setDownloadText] = useState('Download');
  const [resetText, setResetText] = useState('Reset');
  const [recording, setRecording] = useState('');
  const [isDelete, setIsDelete] = useState(false);

  const [startMicRecording, setStartMicRecording] = useState('default')

  /* === Toggle button state for Recording from Browser === */
  const toggleState = () => {
    if (recordingState === 'default') { // transition from default to start
      setSoundButtonText('wait...');
      setRecordingState('setup');
      setTimeout(() => {
        setRecording('');
        setSoundButtonText('recording');
        setRecordingState('start');
      }, 1000);
    } else if (recordingState === 'start') { // transition from start to stop
      setRecordingState('stop');
      setSoundButtonText('play');
    } else if (recordingState === 'stop') {
        playState === true ? setPlayState(false) : setPlayState(true);
        soundButtonText === 'play' ? setSoundButtonText('stop') : setSoundButtonText('play');
    } 
  }

  /* === Toggle button state for Recording from Mic === */
  const toggleVoiceRecordingButtonState = () => {
    if (micButtonText === 'Record Mic') {
      setMicButtonText('recording')
      setStartMicRecording('start');
    } else if (micButtonText === 'recording') {
      setStartMicRecording('stop');
      setMicButtonText('play')
    } else if (micButtonText === 'play') {
      setPlayState(true);
      setMicButtonText('stop');
    } else if (micButtonText === 'stop') {
      setPlayState(false);
      setMicButtonText('play');
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
      setSoundButtonText('Record Browser');
      setMicButtonText('Record Mic');
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
        <button class='sound-button' onClick={toggleState}>{soundButtonText}</button>
      </div>
      <div className="row m-1">
        <button class='sound-button' onClick={toggleVoiceRecordingButtonState}>{micButtonText}</button>
      </div>
      <div className="row m-1">
        <button class='download-button' onClick={download}>{downloadText}</button>
      </div>
      <div className="row m-1">
        <button class='download-button' onClick={reset}>{resetText}</button>
      </div>
      <div className="row m-1">
        <button class='download-button'>Delete</button>
      </div>
      <RecordInputDevice recordingState={startMicRecording} setRecording={setRecording}/>
      <RecordHowlerGlobal recordingState={recordingState} setRecordings={setRecording}/>
      {(recording === undefined || recording === null || recording === '') // to avoid any null errors if the recording state contains no value
        ? <></> 
        : <ReactHowler src={recording} playing={playState} format={['mp3', 'wav']} loop={true}/> }
    </div>
  )
}

export default RecordButton;