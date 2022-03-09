import React, { useEffect } from "react";

import {
  BiPause,
  BiPlay,
  BiStopCircle,
  BiChevronsRight,
  BiChevronsLeft,
} from "react-icons/bi";

const Chord = (props) => {
  const {
    setRunningText,
    chord,
    setChord,
    progression,
    setProgression,
    findScale,
    chordProg,
    convertToStr,
  } = props;
  //Choose chord
  const next = () => {
    const str = document.getElementById("option1").value;
    setChord(str);
    setRunningText("Choose progression!!!");
    findScale(str);
  };

  const previous = () => {
    setChord("");
    setProgression("");
    setRunningText("Choose a chord!");
  };
  const play = () => {
    const str = document.getElementById("option2").value;
    setProgression(str);
    setRunningText("Now playing...");
    convertToStr(str, chord);
    const e = document.getElementById("vinyl");
    e.setAttribute("id", "vinyl-spin");
    const e2 = document.getElementById("arm");
    e2.setAttribute("id", "arm-move");
    alert(chordProg);
  };
  const pause = () => {
    setProgression("");
    setRunningText("Choose progression!!!");
    const e = document.getElementById("vinyl-spin");
    e.setAttribute("id", "vinyl");
    const e2 = document.getElementById("arm-move");
    e2.setAttribute("id", "arm");
  };
  const stop = () => {
    setChord("");
    setProgression("");
    setRunningText("Choose a chord!");

    const e = document.getElementById("vinyl-spin");
    e.setAttribute("id", "vinyl");
    const e2 = document.getElementById("arm-move");
    e2.setAttribute("id", "arm");
  };
  return (
    <div className="chord-container">
      {chord && !progression ? (
        <div>
          <select id="option2" size="4">
            <option value="I-V-vi-IV">I-V-vi-IV</option>
            <option value="I-IV-V-IV">I-IV-V-IV</option>
            <option value="I-vi-IV-V">I-vi-IV-V</option>
            <option value="I-V-iv-iii">I-V-iv-iii</option>
            <option value="IV-I-IV-V">IV-I-IV-V</option>
          </select>
          <div>
            {/* <input
              type="button"
              value="<<"
              onClick={() => {
                previous();
              }}
            /> */}
            <button
              onClick={() => {
                previous();
              }}
            >
              <BiChevronsLeft />
            </button>
            {/* <input type="button" value="" disabled /> */}
            <button type="button" disabled></button>

            {/* <input
              type="button"
              value="[]>"
              onClick={() => {
                play();
              }}
            /> */}
            <button
              onClick={() => {
                play();
              }}
            >
              <BiPlay />
            </button>
          </div>
        </div>
      ) : chord && progression ? (
        <div>
          <select size="4" disabled>
            <option value="I-V-vi-IV">I-V-vi-IV</option>
            <option value="I-IV-V-IV">I-IV-V-IV</option>
            <option value="I-vi-IV-V">I-vi-IV-V</option>
            <option value="I-V-iv-iii">I-V-iv-iii</option>
            <option value="IV-I-IV-V">IV-I-IV-V</option>
          </select>
          <div>
            {/* <input
              type="button"
              value="O"
              onClick={() => {
                stop();
              }}
            />
            <input type="button" value="" disabled /> */}

            <button
              onClick={() => {
                stop();
              }}
            >
              <BiStopCircle />
            </button>
            <button type="button" disabled></button>

            {/* <input
              type="button"
              value="[]"
              onClick={() => {
                pause();
              }}
            /> */}
            <button
              onClick={() => {
                pause();
              }}
            >
              <BiPause />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <select id="option1" size="4">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
          </select>
          <div>
            {/* <input type="button" value="" disabled /> */}
            <button type="button" disabled></button>

            {/* <input type="button" value="" disabled /> */}
            <button type="button" disabled></button>

            {/* <input
              type="button"
              value=">>"
              onClick={() => {
                next();
              }}
            /> */}
            <button
              onClick={() => {
                next();
              }}
            >
              <BiChevronsRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chord;
