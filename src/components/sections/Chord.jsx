import React from "react";

const Chord = (props) => {
  const { setRunningText, chord, setChord, progression, setProgression } =
    props;
  const next = () => {
    const str = document.getElementById("option1").value;
    setChord(str);
    setRunningText("Choose progression!!!");
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

    const e = document.getElementById("vinyl");
    e.setAttribute("id", "vinyl-spin");
    const e2 = document.getElementById("arm");
    e2.setAttribute("id", "arm-move");
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
            <option value="actual value 1">A</option>
            <option value="actual value 2">B</option>
            <option value="actual value 3">C</option>
            <option value="actual value 4">D</option>
            <option value="actual value 5">E</option>
            <option value="actual value 6">F</option>
            <option value="actual value 7">G</option>
          </select>
          <div>
            <input
              type="button"
              value="<<"
              onClick={() => {
                previous();
              }}
            />
            <input type="button" value="" disabled />
            <input
              type="button"
              value="[]>"
              onClick={() => {
                play();
              }}
            />
          </div>
        </div>
      ) : chord && progression ? (
        <div>
          <select size="4" disabled>
            <option value="actual value 1">A</option>
            <option value="actual value 2">B</option>
            <option value="actual value 3">C</option>
            <option value="actual value 4">D</option>
            <option value="actual value 5">E</option>
            <option value="actual value 6">F</option>
            <option value="actual value 7">G</option>
          </select>
          <div>
            <input
              type="button"
              value="O"
              onClick={() => {
                stop();
              }}
            />
            <input type="button" value="" disabled />
            <input
              type="button"
              value="[]"
              onClick={() => {
                pause();
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <select id="option1" size="4">
            <option value="actual value 1">A</option>
            <option value="actual value 2">B</option>
            <option value="actual value 3">C</option>
            <option value="actual value 4">D</option>
            <option value="actual value 5">E</option>
            <option value="actual value 6">F</option>
            <option value="actual value 7">G</option>
          </select>
          <div>
            <input type="button" value="" disabled />
            <input type="button" value="" disabled />
            <input
              type="button"
              value=">>"
              onClick={() => {
                next();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chord;
