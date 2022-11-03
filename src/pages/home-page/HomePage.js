import SideBar from "../../components/side-bar/SideBar";
import CharacterDetails from "../../components/character-details/CharacterDetails";

export default function HomePage({ characters, characterDetails, onClick }) {
  return (
    <section className="app__container">
      <CharacterDetails character={characterDetails} />
      <SideBar characters={characters} onCharacterClick={onClick} />
    </section>
  );
}
