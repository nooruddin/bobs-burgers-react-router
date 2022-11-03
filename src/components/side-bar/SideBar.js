import "./SideBar.scss";

export default function SideBar({ characters, onCharacterClick }) {
  return (
    <aside className="sidebar">
      {characters.map((character) => (
        <img
          className="sidebar__avatar"
          src={character.image}
          alt={character.name}
          key={character.name + character.id}
          onClick={(event) => onCharacterClick(event, character.id)}
        />
      ))}
    </aside>
  );
}
