import React from "react";

function Guess({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    setGuesses([...guesses, guess]);
    console.log({ guess });
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Guess;
