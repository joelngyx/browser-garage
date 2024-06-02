import {useEffect, useState} from 'react';
import {Howler} from 'howler';
import MediaRecorder from './mediaRecorder';

/**
 * Uses Howler JS and Web Audio API:
 * - Set up a Media Stream Destination - an AudioNode that acts as a destination
 * - Connect Howler to this Destination
 * - All Howls will pass into this Destination; the inputs into this Destination
 *   can be streamed into, and recorded with a MediaRecorder
 */
const RecordHowlerGlobal = (props) => {
  const [attempt, setAttempt] = useState(0);
  const [dest, setDest] = useState();

  const setupDest = async () => {
    try {
      setDest(Howler.ctx.createMediaStreamDestination());
      Howler.masterGain.connect(dest);
    } catch (e) {
      console.log(e);
    }
  }

  const incrementAttempt = () => {
    if (dest === undefined) {
      setAttempt(attempt + 1);
    }
  }

  /**
   * Attempts to execute setupRecorder,
   * runs again in 250ms if the MediaStreamDestination node is not created
   * [Perhaps useEffect based on dest?]
   */
  useEffect(() => {
    if (props.recordingState === 'setup') {
      setTimeout(setupDest, 10);
      setTimeout(incrementAttempt, 11);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt, props.recordingState]);

  if (dest === undefined) {
    // return (<h1>loading...</h1>)
  } else {
    return (
      <MediaRecorder stream={dest.stream}
        recordingState={props.recordingState}
        setRecordings={props.setRecordings}/>
    )
  }
}

export default RecordHowlerGlobal;
