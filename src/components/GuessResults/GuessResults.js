import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  const guessesArray = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {guessesArray.map((guessIndex) => {
        return <Guess key={guessIndex} content={guesses[guessIndex]} />;
      })}
    </div>
  );
}

export default GuessResults;
