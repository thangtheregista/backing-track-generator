import "./App.scss";
import RunningText from "./components/header/RunningText.jsx";
import "./components/header/RunningText.scss";
import Vinyl from "./components/main/Vinyl";
import "./components/main/Vinyl.scss";
import Chordify from "./components/sections/Chordify";
import "./components/sections/Chordify.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [runningText, setRunningText] = useState("Choose a chord");
  const [chord, setChord] = useState("");
  const [progression, setProgression] = useState("");
  var scale = [];
  var chordProg = [];

  // return an array of scale of a key.
  const findScale = (chord) => {
    const chords = ["A", "B", "C", "D", "E", "F", "G"];
    //create new array of chordsx2
    var newArray = chords;
    newArray.push(...chords);
    //find the first index of the key
    var indexKey = newArray.indexOf(chord);
    //new array of scale
    for (var i = 0; i < 6; i++) {
      var minorPosition = [1, 2, 5];
      if (minorPosition.indexOf(i) >= 0) {
        scale.push(newArray[indexKey + i].concat("m"));
      } else {
        scale.push(newArray[indexKey + i]);
      }
    }
    console.log(scale);
  };

  const convertToStr = (progression, chord) => {
    console.log(chord);
    console.log(progression);

    var prog = [];
    progression = progression.toUpperCase().split("-");
    for (let i = 0; i < progression.length; i++) {
      let string = "";
      switch (progression[i]) {
        case "I":
          string = "1";
          break;
        case "II":
          string = "2";
          break;
        case "III":
          string = "3";
          break;
        case "IV":
          string = "4";
          break;
        case "V":
          string = "5";
          break;
        case "VI":
          string = "6";
          break;
      }
      prog.push(string); // progression in numbers
    }
    console.log(prog);
    // return an array of scale of a key.
    const chords = ["A", "B", "C", "D", "E", "F", "G"];
    //create new array of chordsx2
    var newArray = chords;
    newArray.push(...chords);
    //find the first index of the key
    var indexKey = newArray.indexOf(chord);
    //new array of scale
    for (var i = 0; i < 6; i++) {
      var minorPosition = [1, 2, 5];
      if (minorPosition.indexOf(i) >= 0) {
        scale.push(newArray[indexKey + i].concat("m"));
      } else {
        scale.push(newArray[indexKey + i]);
      }
    }
    console.log(scale);
    // convert progression into an array of chords
    for (let j = 0; j < prog.length; j++) {
      chordProg.push(scale[prog[j] - 1]);
    }
    console.log(chordProg);
  };

  return (
    <div className="App">
      <div className="container">
        <RunningText runningText={runningText} />
        <Vinyl />
        <Chordify
          setRunningText={setRunningText}
          chord={chord}
          setChord={setChord}
          progression={progression}
          setProgression={setProgression}
          findScale={findScale}
          scale={scale}
          convertToStr={convertToStr}
        />
      </div>
    </div>
  );
}

export default App;
