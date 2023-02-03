import React from "react";

function Guess({ content }) {
  const lettersArray = content ? content.split("") : [];
  return (
    <p className="guess">
      <span className="cell">{lettersArray[0]}</span>
      <span className="cell">{lettersArray[1]}</span>
      <span className="cell">{lettersArray[2]}</span>
      <span className="cell">{lettersArray[3]}</span>
      <span className="cell">{lettersArray[4]}</span>
    </p>
  );
}

export default Guess;
