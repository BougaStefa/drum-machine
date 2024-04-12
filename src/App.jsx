import { Pad } from "./Pad";
import "./App.css";
import Controls from "./Controls";
import { useState } from "react";

function App() {
  const [instrument, setInstrument] = useState(true);
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [currentAudio, setCurrentAudio] = useState(null);

  return (
    <div id="drum-machine">
      <Pad
        instrument={instrument}
        power={power}
        setDisplay={setDisplay}
        volume={volume}
        setCurrentAudio={setCurrentAudio}
      />
      <Controls
        instrument={instrument}
        setInstrument={setInstrument}
        power={power}
        setPower={setPower}
        display={display}
        setDisplay={setDisplay}
        volume={volume}
        setVolume={setVolume}
        currentAudio={currentAudio}
        setCurrentAudio={setCurrentAudio}
      />
    </div>
  );
}

export default App;
