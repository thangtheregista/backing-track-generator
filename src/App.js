import "./App.scss";
import RunningText from "./components/header/RunningText.jsx";
import "./components/header/RunningText.scss";
import Vinyl from "./components/main/Vinyl";
import "./components/main/Vinyl.scss";
import Chord from "./components/sections/Chord";
import "./components/sections/Chord.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <RunningText />
        <Vinyl />
        <Chord />
      </div>
    </div>
  );
}

export default App;
