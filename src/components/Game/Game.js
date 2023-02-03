import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import Guess from "../Guess/Guess";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessList guesses={guesses} />
      <Guess guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
