"use client";

import { Character } from "../models/Character";

type CharacterProps = {
  character: Character;
};

export const CharacterHints = ({ character }: CharacterProps) => {
  return (
    <ol className="flex flex-col gap-2">
      <li className="border-b border-b-amber-800 p-2">
        {character.gender.toUpperCase()}
      </li>
      <li className="border-b border-b-amber-800 p-2">
        {character.hairColour.toUpperCase()} HAIR
      </li>
      <li className="border-b border-b-amber-800 p-2">
        {character.hogwartsStudent
          ? "HOGWARTS STUDENT"
          : "NOT A HOGWARTS STUDENT"}
      </li>
      <li className="border-b border-b-amber-800 p-2">
        {character.house.toUpperCase()}
      </li>
      <li className="border-b border-b-amber-800 p-2">
        {character.actor.toUpperCase()}
      </li>
    </ol>
  );
};
