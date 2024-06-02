import React, { useEffect, useState } from "react";
import RecordHowlerGlobal from "./record-functions/recordHowlerGlobal";
import FileSaver from 'file-saver';


const RecordButton = (props) => {
  const [recordingState, setRecordingState] = useState('default'); 
  const [playState, setPlayState] = useState(false);
  const [buttonText, setButtonText] = useState('Record');
  const [downloadText, setDownloadText] = useState('download');
  const [recordings, setRecordings] = useState('');
  
  const toggleState = () => {
    if (recordingState === 'default') {
      // setRecordings('drums1');
      setButtonText('ready in a second!');
      setRecordingState('setup');
      setTimeout(() => {
        setRecordings('');
        setButtonText('recording');
        setRecordingState('start');
      }, 1000);
    } else if (recordingState === 'start') {
      setRecordingState('stop');
      setButtonText('play');
      addRecordingToList(recordings);
    } else if (recordingState === 'stop') {
        playState === true ? setPlayState(false) : setPlayState(true);
        buttonText === 'play' ? setButtonText('stop') : setButtonText('play');
    } 
  }

  const download = () => {
    // const file = new Blob([recordings], { 'type' : 'audio/wav; codecs=0' });
    if (recordings !== '') {
      FileSaver.saveAs(recordings, 'track.webm');
    } else {
      setDownloadText('error');
      setTimeout(() => {
        setDownloadText('download');
      }, 1000)
    }
  }

  const addRecordingToList = (recordings) => {
    props.setListOfRecordings((prev) => ({
      ...prev,
      sounds: [...prev.sounds, recordings] 
    }));
    console.log(`Add recording`);
  };

  useEffect(() => {
    console.log(recordings);
    // addRecordingToList(recordings);
    // console.log(props.listOfRecordings);
  }, [recordings]);

  return (
    <div className="my-1">
      <div className="row m-0">
        <button class='sound-button' onClick={toggleState}>{buttonText}</button>
      </div>
      <div className="row m-0">
        <button class='download-button' onClick={download}>{downloadText}</button>
      </div>
      <RecordHowlerGlobal recordingState={recordingState} setRecordings={setRecordings}/>
    </div>
  )
}

export default RecordButton;