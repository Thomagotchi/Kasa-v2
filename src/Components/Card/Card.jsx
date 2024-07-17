//--- Import de fonction React ---
import { Link } from "react-router-dom";

//--- Import du SASS ---
import "./Card.scss";

//--- Composant Card pour la page Acceuil ---
const Card = ({ id, title, cover }) => {
  return (
    //--- La carte renvoie l'ID du logement en paramètres URL et puis renvoie l'utilisateur à la fonction 'Redirectlogement' ---
    <Link to={id} className="gallery-card">
      {/*--- Image de la carte ---*/}
      <div className="cover-container">
        <img src={cover} alt={title} className="gallery-image" />
      </div>

      {/*--- Titre de la carte ---*/}
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
