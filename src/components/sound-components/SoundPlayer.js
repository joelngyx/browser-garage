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
import DrumHiHat4 from '../../assets/drum-sounds/trap-hihat-04.wav';
import DrumHiHat5 from '../../assets/drum-sounds/trap-hihat-5.wav';
import DrumTrap1 from '../../assets/drum-sounds/trap-808-01.wav';
import DrumTrap2 from '../../assets/drum-sounds/trap-808-02.wav';
import DrumTrap3 from '../../assets/drum-sounds/trap-808-03.wav';
import DrumCrash1 from '../../assets/drum-sounds/trap-crash-rvs-01.wav';
import DrumCrash2 from '../../assets/drum-sounds/trap-crash-rvs-02.wav';
import DrumCrash3 from '../../assets/drum-sounds/trap-crash-rvs-03.wav';
import DrumCymbals1 from '../../assets/drum-sounds/trap-cymbal-01.wav';
import DrumCymbals2 from '../../assets/drum-sounds/trap-cymbal-02.wav';
import DrumCymbals3 from '../../assets/drum-sounds/trap-cymbal-03.wav';
import DrumKicks1 from '../../assets/drum-sounds/trap-kicks-01.wav';
import DrumKicks2 from '../../assets/drum-sounds/trap-kicks-02.wav';
import DrumKicks3 from '../../assets/drum-sounds/trap-kicks-03.wav';
import DrumSnare1 from '../../assets/drum-sounds/trap-snare-01.wav';
import DrumSnare2 from '../../assets/drum-sounds/trap-snare-01.wav';
import DrumSnare3 from '../../assets/drum-sounds/trap-snare-01.wav';

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
    case 'drums4':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumHiHat4} onEnd={clearCurrentTrack}/>
    case 'drums5':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumHiHat5} onEnd={clearCurrentTrack}/>
    case 'drums6':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumTrap1} onEnd={clearCurrentTrack}/>
    case 'drums7':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumTrap2} onEnd={clearCurrentTrack}/>
    case 'drums8':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumTrap3} onEnd={clearCurrentTrack}/>
    case 'drums9':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCrash1} onEnd={clearCurrentTrack}/>
    case 'drums10':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCrash2} onEnd={clearCurrentTrack}/>
    case 'drums11':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCrash3} onEnd={clearCurrentTrack}/>
    case 'drums12':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCymbals1} onEnd={clearCurrentTrack}/>
    case 'drums13':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCymbals2} onEnd={clearCurrentTrack}/>
    case 'drums14':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumCymbals3} onEnd={clearCurrentTrack}/>
    case 'drums15':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumKicks1} onEnd={clearCurrentTrack}/>
    case 'drums16':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumKicks2} onEnd={clearCurrentTrack}/>
    case 'drums17':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumKicks3} onEnd={clearCurrentTrack}/>
    case 'drums18':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumSnare1} onEnd={clearCurrentTrack}/>
    case 'drums19':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumSnare2} onEnd={clearCurrentTrack}/>
    case 'drums20':
      return <ReactHowler loop={false} playing={isPlaying} src={DrumSnare3} onEnd={clearCurrentTrack}/>
    default:
      return
  }
}

export default SoundPlayer;