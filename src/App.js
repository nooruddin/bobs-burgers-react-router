import "./App.scss";

import { useState } from "react";

// components
import Header from "./components/header/Header";

// pages
import HomePage from "./pages/home-page/HomePage";

// utils
import getCharacters, { getCharacterDetails } from "./utils/utils";

export default function App() {
  const [charId, setCharId] = useState(48);
  const [characters, setCharacters] = useState(getCharacters(charId));
  const [characterDetails, setCharacterDetails] = useState(
    getCharacterDetails(charId)
  );

  const handleClick = (event, characterId) => {
    event.preventDefault();
    setCharId(characterId);
    setCharacters(getCharacters(characterId));
    setCharacterDetails(getCharacterDetails(characterId));
  };

  return (
    <div className="app">
      <Header />
      <HomePage
        characters={characters}
        characterDetails={characterDetails}
        onClick={handleClick}
      />
    </div>
  );
}
