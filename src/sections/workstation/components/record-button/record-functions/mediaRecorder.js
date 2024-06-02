import React, { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';


const MediaRecorder = (props) => {
  const [audioBlob, setAudioBlob] = useState(null);

  const {startRecording,
    stopRecording} = useReactMediaRecorder({customMediaStream: props.stream, 
    video: false, 
    audio: true, 
    onStop: (blob) => {setAudioBlob(blob)}, 
      blobPropertyBag: {type: 'audio/webm'}});

  useEffect(() => {
    // eslint-disable-next-line 
    switch (props.recordingState) {
      case 'default':
        break;
      case 'start':
        startRecording();
        break;
      case 'stop':
        stopRecording();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.recordingState]);

  useEffect(() => {
    console.log(audioBlob)
    props.setRecordings(audioBlob);
    // eslint-disable-next-line 
  }, [audioBlob]);


  return(<></>);
}

export default MediaRecorder;