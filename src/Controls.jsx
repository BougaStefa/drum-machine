import { useEffect } from "react";
import "./Controls.css";
import PropTypes from "prop-types";

function Controls({
  setInstrument,
  instrument,
  power,
  setPower,
  display,
  setDisplay,
  volume,
  setVolume,
  currentAudio,
}) {
  const changeInst = () => {
    setInstrument(!instrument);
    setDisplay(!instrument ? "Piano" : "Drums");
  };
  const changePower = () => {
    setPower(!power);
    setDisplay(!power ? "Power on" : "Power off");
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    setDisplay(Math.round(e.target.value * 100));
    setVolume(e.target.value);
  };

  useEffect(() => {
    if (currentAudio) {
      document.getElementById(currentAudio).volume = volume;
    }
  }, [volume, currentAudio]);

  return (
    <div id="controls">
      <div id="power" onClick={changePower}>
        Power Switch
      </div>
      <div id="display">{display}</div>
      <div id="volume">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          onChange={handleVolumeChange}
        ></input>
      </div>
      <div id="mode" onClick={changeInst}>
        Change Kit
      </div>
    </div>
  );
}

Controls.propTypes = {
  setInstrument: PropTypes.func.isRequired,
  instrument: PropTypes.bool.isRequired,
  setPower: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  currentAudio: PropTypes.string.isRequired,
};

export default Controls;
