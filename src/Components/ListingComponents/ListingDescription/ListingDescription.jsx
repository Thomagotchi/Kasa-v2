//--- Import des composants pour la description de la fiche logement ---
import Dropdown from "../../Dropdown/Dropdown";
import ListingTitle from "../ListingTitle/ListingTitle";
import ListingTags from "../Tags/ListingTags";
import Data from "../../../Data/Listings.json";
import Author from "../Author/Author";
import Rating from "../Ratings/Ratings";

//--- Import du SASS ---
import "./ListingDescription.scss";

//--- Fonction qui retourne le composant Listing Description  ---
const ListingDescription = ({ Listing }) => {
  return (
    <>
      <div className="listing-description">
        {/* Colonne de gauche */}
        <div className="listing-left-column">
          {/* Titre du logement */}
          <ListingTitle Listing={Listing} />
          {/* Tags du logement */}
          <ListingTags Listing={Listing} />
        </div>
        {/* Colonne de droite */}
        <div className="listing-right-column">
          {/* Auteur du logement */}
          <Author Listing={Listing} />
          {/* Avis du logement */}
          <Rating Listing={Listing} />
        </div>
      </div>
      <div className="listing-dropdowns">
        {/* Dropdowns */}
        <div className="dropdown-container">
          <Dropdown
            elementTitle={"Description"}
            elementListItems={Listing.description}
            key={Data.indexOf(Listing)}
          />
          <Dropdown
            elementTitle={"Équipement"}
            elementListItems={Listing.equipments}
            key={Listing.title}
          />
        </div>
      </div>
    </>
  );
};

export default ListingDescription;
