import PropTypes from "prop-types";
import { useEffect } from "react";

const pianoKit = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    label: "Q",
    id: "Chord 1",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    label: "W",
    id: "Chord 2",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    label: "E",
    id: "Chord 3",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    label: "A",
    id: "Shaker",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    label: "S",
    id: "Open HH",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    label: "D",
    id: "Closed HH",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    label: "Z",
    id: "Punchy Kick",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    label: "X",
    id: "Side Stick",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    label: "C",
    id: "Snare",
  },
];
const heaterKit = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    label: "Q",
    id: "Heater 1",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    label: "W",
    id: "Heater 2",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    label: "E",
    id: "Heater 3",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    label: "A",
    id: "Heater 4",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    label: "S",
    id: "Clap",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    label: "D",
    id: "Open HH",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    label: "Z",
    id: "Kick n' Hat",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    label: "X",
    id: "Kick",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    label: "C",
    id: "Closed HH",
  },
];

export function Pad({
  instrument,
  power,
  setDisplay,
  volume,
  setCurrentAudio,
}) {
  const playAudio = (audioElement) => {
    if (power && audioElement) {
      setCurrentAudio(audioElement.label);
      const kit = instrument ? pianoKit : heaterKit;
      const item = kit.find((item) => item.label === audioElement.id);
      if (item) {
        setDisplay(item.id);
      }
      audioElement.volume = volume;
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };

  const handleDivClick = (e) => {
    const audioElement = e.target.querySelector("audio");
    playAudio(audioElement);
  };

  useEffect(() => {
    const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const handleKeyboard = (e) => {
      const key = e.key.toUpperCase();
      if (validKeys.includes(key)) {
        const audioElement = document.getElementById(key);
        playAudio(audioElement);
      }
    };
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [power, instrument, volume]);

  return (
    <div id="pads-container">
      {(instrument ? pianoKit : heaterKit).map((file, index) => (
        <div
          key={index}
          id={index}
          onClick={handleDivClick}
          className="drum-pad"
        >
          <audio src={file.src} id={file.label} className="clip"></audio>
          {file.label}
        </div>
      ))}
    </div>
  );
}

Pad.propTypes = {
  instrument: PropTypes.bool.isRequired,
  power: PropTypes.bool.isRequired,
  setDisplay: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  setCurrentAudio: PropTypes.func.isRequired,
};
