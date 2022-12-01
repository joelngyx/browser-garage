import { useEffect } from "react";

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

const PreloadAudio = () => {
  const tracks = [Atmospheric1, Atmospheric2, Atmospheric3, Atmospheric4,
                  Atmospheric5, Atmospheric6, Atmospheric7, Atmospheric8,
                  Atmospheric9, Atmospheric10, Drums1, Drums2, Drums3,
                  Drums4, Drums5, Drums6, Drums7, Drums8, Drums9, Drums10];

  // preload tracks
  useEffect(() => {
    for (let i = 0; i < tracks.length; i++) {
      try {
      // eslint-disable-next-line
        let audio = new Audio(tracks[i]);
        console.log(`preloading track ${i}`);
      } catch (e) {
      console.log('error preloading tracks');
      }
    }
    // eslint-disable-next-line
  }, []);
}

export default PreloadAudio;