//--- Import de l'image du Banner ---
import BackgroundImage from "../../Assets/Images/falaise.jpg";

//--- Import de composants ---
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";

//--- Import du SASS ---
import "./PageAccueil.scss";

//--- Import des données des logements ---
import Listings from "../../Data/Listings.json";

//--- Fonction qui l'intégralité des composants pour la page d'Accueil  ---
export function PageAccueil() {
  return (
    <div className="body-container">
      {/* Banner */}
      <Banner
        img={BackgroundImage}
        text1="Chez vous,"
        text2="partout et ailleurs"
        key={1}
      />
      {/* Cartes logements */}
      <div className="gallery">
        {Listings.map((element) => (
          <Card
            id={element.id}
            title={element.title}
            cover={element.cover}
            key={element.id}
          />
        ))}
      </div>
    </div>
  );
}
