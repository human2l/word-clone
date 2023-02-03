import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  } else {
    return (
      <p className="guess">
        {checkGuess(value, answer).map((letterObj, index) => {
          return (
            <span key={index} className={`cell ${letterObj.status}`}>
              {letterObj.letter}
            </span>
          );
        })}
      </p>
    );
  }
}

export default Guess;
