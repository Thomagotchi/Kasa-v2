//--- Import de composants ---
import Carousel from "../../Components/ListingComponents/Carousel/Carousel";
import ListingDescription from "../../Components/ListingComponents/ListingDescription/ListingDescription";

//--- Fonction qui l'intégralité des composants pour la page de logement  ---
const FicheLogement = ({ Listing }) => {
  return (
    <div className="body-container">
      {/* Carousel */}
      <Carousel Listing={Listing} />
      {/* Description */}
      <ListingDescription Listing={Listing} />
    </div>
  );
};

export default FicheLogement;
