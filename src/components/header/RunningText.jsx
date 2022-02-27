import React from "react";

const RunningText = (props) => {
  return (
    <div className="running-text-container">
      <div className="running-text-wrapper">
        <p>{props.runningText}</p>
      </div>
    </div>
  );
};

export default RunningText;
