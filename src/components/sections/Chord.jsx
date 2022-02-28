import React, { useState, useEffect } from "react";

const Chord = (props) => {
  const [homeKey, setHomeKey] = useState("");
  const [progression, setProgression] = useState("");

  const clickSelect = () => {
    const strUser = document.getElementById("option1").value;
    setHomeKey(strUser);
    props.setRunningText("Choose progression!!!");
  };
  const clickPrev = () => {
    setHomeKey("");
    setProgression("");
    props.setRunningText("Choose a chord!");

    const e = document.getElementById("vinyl-spin");
    e.setAttribute("id", "vinyl");
    const e2 = document.getElementById("arm-move");
    e2.setAttribute("id", "arm");
  };
  const clickStart = () => {
    const e3 = document.getElementById("option2");
    const strUser = e3.value;
    setProgression(strUser);
    const e = document.getElementById("vinyl");
    e.setAttribute("id", "vinyl-spin");
    const e2 = document.getElementById("arm");
    e2.setAttribute("id", "arm-move");
  };
  useEffect(() => {
    console.log(`You clicked ${homeKey} ${progression} times`);
  });
  return (
    <div>
      {homeKey.length ? (
        <div id="two">
          <div className="options">
            <select id="option2">
              <option value="actual value 1">I-V</option>
              <option value="actual value 2">I-ii</option>
              <option value="actual value 3">I-IV-V</option>
            </select>
          </div>
          <div className="buttons-group">
            <input
              type="button"
              value="<<"
              onClick={() => {
                clickPrev();
              }}
            />
            <input type="button" value="" disabled />
            {progression.length ? (
              <input
                type="button"
                value="|| "
                onClick={() => {
                  const e = document.getElementById("vinyl-spin");
                  e.setAttribute("id", "vinyl");
                  const e2 = document.getElementById("arm-move");
                  e2.setAttribute("id", "arm");
                  setProgression("");
                  props.setRunningText("Choose a progression");
                }}
              />
            ) : (
              <input
                type="button"
                value="|| >"
                onClick={() => {
                  clickStart();
                  props.setRunningText("Now playing...");
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="one">
          {" "}
          <div className="options">
            {" "}
            <select id="option1">
              {" "}
              <option value="actual value 1">A</option>{" "}
              <option value="actual value 2">B</option>{" "}
              <option value="actual value 3">C</option>{" "}
              <option value="actual value 3">D</option>{" "}
              <option value="actual value 3">E</option>{" "}
              <option value="actual value 3">F</option>{" "}
              <option value="actual value 3">G</option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="buttons-group">
            {" "}
            <input type="button" value="" disabled />{" "}
            <input
              type="button"
              value="Select"
              onClick={() => {
                clickSelect();
              }}
            />{" "}
            <input type="button" value="" disabled />{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Chord;
