import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";

// Atmospheric Sounds
import Atmospheric1 from '../../assets/atmospheric-sounds/PG_HogChain-A.wav';
import Atmospheric2 from '../../assets/atmospheric-sounds/PG_HogChain-C.wav';
import Atmospheric3 from '../../assets/atmospheric-sounds/PG_HogChain-C2.wav';
import Atmospheric4 from '../../assets/atmospheric-sounds/PG_HogChain-D.wav';
import Atmospheric5 from '../../assets/atmospheric-sounds/PG_HogChain-G.wav';
import Atmospheric6 from '../../assets/atmospheric-sounds/PG_ManyMods-A.wav';
import Atmospheric7 from '../../assets/atmospheric-sounds/PG_ManyMods-C.wav';
import Atmospheric8 from '../../assets/atmospheric-sounds/PG_ManyMods-D.wav';
import Atmospheric9 from '../../assets/atmospheric-sounds/PG_ManyMods-G.wav';
import Atmospheric10 from '../../assets/atmospheric-sounds/PG_ManyMods-G2.wav';

// Drum Sounds
import Drums1 from '../../assets/drum-sounds/trap-cymbal-02.wav';
import Drums2 from '../../assets/drum-sounds/trap-cymbal-07.wav';
import Drums3 from '../../assets/drum-sounds/trap-hihat-06.wav';
import Drums4 from '../../assets/drum-sounds/trap-hihat-08.wav';
import Drums5 from '../../assets/drum-sounds/trap-hihat-12.wav';
import Drums6 from '../../assets/drum-sounds/trap-kicks-07.wav';
import Drums7 from '../../assets/drum-sounds/trap-kicks-09.wav';
import Drums8 from '../../assets/drum-sounds/trap-kicks-17.wav';
import Drums9 from '../../assets/drum-sounds/trap-snare-02.wav';
import Drums10 from '../../assets/drum-sounds/trap-snare-14.wav';


const SoundPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const clearCurrentTrack = () => {
    props.setTrack('');
    props.setRef('');
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
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric1} onEnd={clearCurrentTrack}/>
    case 'atmos2':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric2} onEnd={clearCurrentTrack}/>
    case 'atmos3':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric3} onEnd={clearCurrentTrack}/>
    case 'atmos4':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric4} onEnd={clearCurrentTrack}/>
    case 'atmos5':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric5} onEnd={clearCurrentTrack}/>  
    case 'atmos6':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric6} onEnd={clearCurrentTrack}/>
    case 'atmos7':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric7} onEnd={clearCurrentTrack}/>
    case 'atmos8':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric8} onEnd={clearCurrentTrack}/>
    case 'atmos9':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric9} onEnd={clearCurrentTrack}/>
    case 'atmos10':
      return <ReactHowler loop={false} playing={isPlaying} src={Atmospheric10} onEnd={clearCurrentTrack}/>
    case 'drums1':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums1} onEnd={clearCurrentTrack}/>
    case 'drums2':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums2} onEnd={clearCurrentTrack}/>
    case 'drums3':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums3} onEnd={clearCurrentTrack}/>
    case 'drums4':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums4} onEnd={clearCurrentTrack}/>
    case 'drums5':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums5} onEnd={clearCurrentTrack}/>
    case 'drums6':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums6} onEnd={clearCurrentTrack}/>
    case 'drums7':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums7} onEnd={clearCurrentTrack}/>
    case 'drums8':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums8} onEnd={clearCurrentTrack}/>
    case 'drums9':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums9} onEnd={clearCurrentTrack}/>
    case 'drums10':
      return <ReactHowler loop={false} playing={isPlaying} src={Drums10} onEnd={clearCurrentTrack}/>
    case 'recording':
      if (props.blob !== '' && props.blob !== null) {
        return <ReactHowler loop={true} playing={props.isPlaying} src={props.blob} format={['mp3', 'wav']}/>
      }
      break;
    default:
      return
  }
}

export default SoundPlayer;