import React from "react";

function Scoreboard(props) {
  return (
    <div>
      <h2>Scoreboard</h2>
      <p>Player X: {props.xScore}</p>
      <p>Player O: {props.oScore}</p>
    </div>
  );
}

export default Scoreboard;
