import React, {useEffect, useState} from 'react';
import MediaRecorder from './mediaRecorder';

/**
 * Sets up a stream from the user's default audioinput device
 */
const RecordInputDevice = (props) => {
  const [stream, setStream] = useState();
  const [recording, setRecording] = useState();
  

  useEffect(() => {
    const getMedia = async () => {
      let audioParams = 'default';
      let myStreamObj = await navigator.mediaDevices.getUserMedia({audio: audioParams});
      setStream(myStreamObj);
    }

    getMedia();
  }, [])

  return (
    // <MediaRecorder stream={stream} blob={props.blob} setBlob={props.setBlob} recordingState={props.recordingState} setRecordings={props.setRecording}/>
    <MediaRecorder stream={stream} recordingState={props.recordingState} setRecordings={props.setRecording}/>
  )
}

export default RecordInputDevice;
