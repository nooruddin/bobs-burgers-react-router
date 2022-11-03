import bobBurgersChars from "../data/characters.json";
import bobBurgersCharsDetails from "../data/characterDetails.json";

const getCharacters = (characterId) => {
  return bobBurgersChars.filter((char) => char.id !== characterId);
};

export const getCharacterDetails = (characterId) => {
  return bobBurgersCharsDetails.find((char) => char.id === characterId);
};

export default getCharacters;
