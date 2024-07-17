//--- Import des etoiles pour les Ratings ---
import ActiveStar from "../../../Assets/RatingStars/RedStar.svg";
import InactiveStar from "../../../Assets/RatingStars/GreyStar.svg";

//--- Import du SASS ---
import "./Ratings.scss";

//--- Fonction qui retourne les avis du logement  ---
const Ratings = ({ Listing }) => {
  // Note du logement
  const activeStarsIndex = Listing.rating;
  // Note maximal
  const MaxRating = [1, 2, 3, 4, 5];

  return (
    <ul className="ratings-container">
      {/* Cela compare la note du logement et note maximal et puis renvoie les étoiles rouge/gris approprier */}
      {MaxRating.map((Star) => {
        const checkStar = activeStarsIndex < Star ? InactiveStar : ActiveStar;

        return (
          <li key={Star}>
            <img src={checkStar} alt="Étoile"></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Ratings;
