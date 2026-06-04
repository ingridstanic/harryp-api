import { Character } from "../models/Character";

export const getCharacters = async () => {
  try {
    const response = await fetch(`https://hp-api.onrender.com/api/characters`);

    const data: Character[] = await response.json();

    const charactersWithImg = data.filter((character) => character.image);

    const randomIndex = Math.floor(Math.random() * charactersWithImg.length);
    const randomCharacter = charactersWithImg[randomIndex];

    return randomCharacter;
  } catch (error) {
    throw new Error("Could not fetch data...");
  }
};
