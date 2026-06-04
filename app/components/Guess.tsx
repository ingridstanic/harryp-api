"use client";

import { ChangeEvent, useState } from "react";
import { Character } from "../models/Character";

type CharacterProps = {
  character: Character;
  onGuess: () => Promise<void>;
};

export const Guess = ({ character, onGuess }: CharacterProps) => {
  const [guess, setGuess] = useState<string>("");
  const [isCorrect, setCorrect] = useState(false);
  const [message, setMessage] = useState("");

  const handleGuess = (e: ChangeEvent<HTMLInputElement>) => {
    const userGuess = e.target.value;
    setGuess(userGuess);
  };

  const handleNewRound = () => {
    setMessage("");
    setCorrect(false);
    onGuess();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.toUpperCase().trim() === character.name.toUpperCase()) {
            setCorrect(true);
            setMessage("Correct guess!");
          } else {
            setMessage("Wrong, try again...");
          }
          setGuess("");
        }}
      >
        <input
          type="text"
          placeholder="GUESS THE CHARACTER..."
          value={guess}
          onChange={handleGuess}
        />
        <button>GUESS</button>
      </form>
      {isCorrect ? (
        <div>
          <p>{message}</p>
          <img src={character.image} alt={character.name} />
          <button onClick={handleNewRound}>NEXT</button>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </>
  );
};
