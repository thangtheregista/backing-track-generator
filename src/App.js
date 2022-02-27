import "./App.scss";
import RunningText from "./components/header/RunningText.jsx";
import "./components/header/RunningText.scss";
import Vinyl from "./components/main/Vinyl";
import "./components/main/Vinyl.scss";
import Chord from "./components/sections/Chord";
import "./components/sections/Chord.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [runningText, setRunningText] = useState("Choose a chord");
  return (
    <div className="App">
      <div className="container">
        <RunningText runningText={runningText} />
        <Vinyl />
        <Chord setRunningText={setRunningText} />
      </div>
    </div>
  );
}

export default App;
