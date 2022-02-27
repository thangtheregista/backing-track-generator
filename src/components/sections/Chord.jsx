import React, { useState, useEffect } from "react";

const Chord = () => {
  const [homeKey, setHomeKey] = useState("");
  const clickSelect = () => {
    const e = document.getElementById("option1");
    const strUser = e.value;
    setHomeKey(strUser);
  };
  useEffect(() => {
    console.log(`You clicked ${homeKey} times`);
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
            <input type="button" value="<<" />
            <input type="button" value="" disabled />
            <input type="button" value="|| >" />
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
