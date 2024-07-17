//--- Import des l'image du Banner ---
import BackgroundImage from "../../Assets/Images/vallée.jpg";

//--- Import de composants ---
import Banner from "../../Components/Banner/Banner";
import Dropdown from "../../Components/Dropdown/Dropdown";

//--- Import du SASS ---
import "./PageAPropos.scss";

//--- Import des données pour la page A Propos ---
import Data from "../../Data/APropos.json";

//--- Fonction qui l'intégralité des composants pour la page A Propos  ---
export function PageAPropos() {
  return (
    <div className="about-container">
      <Banner img={BackgroundImage} />
      <ul className="dropdown-container-a-propos">
        {Data.map((element) => (
          <Dropdown
            elementTitle={element.title}
            elementListItems={element.description}
            key={Data.indexOf(element)}
          />
        ))}
      </ul>
    </div>
  );
}
