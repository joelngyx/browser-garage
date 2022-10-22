import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";

// Atmospheric Sounds
import AtmosphericAA from '../../assets/atmospheric-sounds/PG_ManyModsAA.wav';
import AtmosphericAC from '../../assets/atmospheric-sounds/PG_ManyModsAC.wav';
import AtmosphericAD from '../../assets/atmospheric-sounds/PG_ManyModsAD.wav';

// Drum Sounds
import DrumHiHat1 from '../../assets/drum-sounds/trap-hihat-01.wav';
import DrumHiHat2 from '../../assets/drum-sounds/trap-hihat-02.wav';
import DrumHiHat3 from '../../assets/drum-sounds/trap-hihat-03.wav';

const SoundPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const clearCurrentTrack = () => {
    props.setTrack('');
  }

  useEffect(() => {
    if (props.currentTrack === '') {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [props.currentTrack]);

  switch (props.currentTrack) {
    case 'atmos1':
      return <ReactHowler loop={false} playing={isPlaying} src={AtmosphericAA} onEnd={clearCurrentTrack}/>
    case 'atmos2':
      return <ReactHowler loop={false} playing={isPlaying} src={AtmosphericAC} onEnd={clearCurrentTrack}/>
    case 'atmos3':
      return <ReactHowler loop={false} playing={isPlaying} src={AtmosphericAD} onEnd={clearCurrentTrack}/>
    case 'drums1':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumHiHat1} onEnd={clearCurrentTrack}/>
    case 'drums2':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumHiHat2} onEnd={clearCurrentTrack}/>
    case 'drums3':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumHiHat3} onEnd={clearCurrentTrack}/>
    default:
      return
  }
}

export default SoundPlayer;