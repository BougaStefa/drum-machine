import { Pad } from "./Pad";
import "./App.css";
import Controls from "./Controls";
import { useState } from "react";

function App() {
  const [instrument, setInstrument] = useState(true);
  const [power, setPower] = useState(true);

  return (
    <div id="drum-machine">
      <Pad instrument={instrument} power={power} />
      <Controls
        instrument={instrument}
        setInstrument={setInstrument}
        power={power}
        setPower={setPower}
      />
    </div>
  );
}

export default App;
