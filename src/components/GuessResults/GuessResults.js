import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  const guessesArray = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {guessesArray.map((guessIndex) => {
        return (
          <Guess key={guessIndex} value={guesses[guessIndex]} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessResults;
