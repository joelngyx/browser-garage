// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import RecordInputDevice from '../record-button/record-functions/recordInputDevice';
import ReactHowler from 'react-howler';

// eslint-disable-next-line
const RecordInputAudioButton = (props) => {
  const [startMicRecording, setStartMicRecording] = useState('default'); // states are 'default', 'start', 'stop'
  const [recording, setRecording] = useState('');
  const [playState, setPlayState] = useState(false);

  
  return(<div>
    Record Input Audio
    <button onClick={() => setStartMicRecording('start')}>Record ON</button>
    <button onClick={() => setStartMicRecording('stop')}>Record OFF</button>
    <button onClick={() => setPlayState(true)}>Play ON</button>
    <button onClick={() => setPlayState(false)}>Play OFF</button>
    {(playState === true && recording !== "" && recording !== undefined)
          ?  <ReactHowler src={recording} format={['mp3', 'wav']} playing={playState} loop={true}/>
          : <></>}
    {/* <RecordInputDevice blob={audioBlob} setBlob={setAudioBlob} recordingState={startMicRecording} setMediaBlob={setMediaBlob} setRecording={setRecording}/> */}
    <RecordInputDevice recordingState={startMicRecording} setRecording={setRecording}/>
  </div>);
}

export default RecordInputAudioButton;