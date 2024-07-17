//--- Import du SASS ---
import "./ListingTags.scss";

//--- Fonction qui retourne un li pour le tag  ---
const CreateTag = ({ Tag }) => {
  return (
    <li key={Tag} className="listing-tag">
      {Tag}
    </li>
  );
};

//--- Fonction qui retourne tout les tags pour le logement  ---
const ListingTags = ({ Listing }) => {
  return (
    <ul className="listing-tags-container">
      {Listing.tags.map((tag) => (
        <CreateTag Tag={tag} key={tag} />
      ))}
    </ul>
  );
};

export default ListingTags;
