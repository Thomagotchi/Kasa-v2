//--- Import de fonction React ---
import { useState } from "react";

//--- Import de la fleche  ---
import arrow from "../../Assets/Arrows/arrow.svg";

//--- Import du SASS ---
import "./Dropdown.scss";

//--- Cette fonction retourne la description du Dropdown en list ---
const PrintDescription = ({ elementListItem }) => {
  return <li>{elementListItem}</li>;
};

//--- Fonction qui retourne le Dropdown ---
const Dropdown = ({ elementListItems, elementTitle }) => {
  //--- L'état du Dropdown (Ouvert / Fermé) ---
  const [active, setActive] = useState(true);

  //--- Toggle de l'état ---
  function toggleActive() {
    setActive(!active);
  }

  return (
    <div className={`dropdown-box ${active}`}>
      <div className="dropdown-top-bar">
        {/* --- Titre du Dropdown --- */}
        <h2 className="dropdown-title">{elementTitle}</h2>
        {/* --- Titre du Dropdown --- */}
        <img
          src={arrow}
          alt="dropdown arrow"
          onClick={toggleActive}
          className={`dropdown-arrow-${active}`}
        />
      </div>
      {/* --- Description du Dropdown --- */}
      <ul className={`dropdown-info ${active}`}>
        {elementListItems.map((elementListItem) => (
          <PrintDescription
            elementListItem={elementListItem}
            key={elementListItem.split(" ").slice(0, 1).join("")}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
