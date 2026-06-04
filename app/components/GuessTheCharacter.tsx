"use client";
import { useEffect, useState } from "react";
import { getCharacters } from "../lib/getCharacters";
import { Character } from "../models/Character";
import { CharacterHints } from "./CharacterHints";
import { Guess } from "./Guess";

export const GuessTheCharacter = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  const fetchCharacter = async () => {
    const characterToGuess = await getCharacters();
    setCharacter(characterToGuess);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      {character && <CharacterHints character={character} />}
      {character && <Guess character={character} onGuess={fetchCharacter} />}
    </>
  );
};
