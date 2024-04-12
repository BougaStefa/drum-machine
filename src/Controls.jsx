import "./Controls.css";
import PropTypes from "prop-types";

function Controls({ setInstrument, instrument, power, setPower }) {
  const changeInst = () => {
    setInstrument(!instrument);
  };
  const changePower = () => {
    setPower(!power);
  };
  return (
    <div id="controls">
      <div id="power" onClick={changePower}>
        {power ? "ON" : "OFF"}
      </div>
      <div id="display"></div>
      <div id="volume">
        <input max="1" min="0" step="0.01" type="range"></input>
      </div>
      <div id="mode" onClick={changeInst}>
        {instrument ? "Piano" : "Drums"}
      </div>
    </div>
  );
}

Controls.propTypes = {
  setInstrument: PropTypes.func.isRequired,
  instrument: PropTypes.bool.isRequired,
  setPower: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
};

export default Controls;
