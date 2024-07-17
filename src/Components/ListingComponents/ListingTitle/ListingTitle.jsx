//--- Import du SASS ---
import "./ListingTitle.scss";

//--- Fonction qui retourne le Titre du logement  ---
const ListingTitle = ({ Listing }) => {
  return (
    <>
      {/* Titre du logement */}
      <h1 className="listing-title">{Listing.title}</h1>
      {/* Localisation du logement */}
      <p className="listing-location">{Listing.location}</p>
    </>
  );
};

export default ListingTitle;
