//--- Import de fonction React ---
import { Link } from "react-router-dom";

//--- Import du SASS ---
import "./PageError.scss";

//--- Fonction qui l'intégralité des composants pour la page d'erreur  ---
export function PageError() {
  return (
    <div className="error-container">
      {/* Titre */}
      <h1>404</h1>
      {/* Information supplémentaire */}
      <div className="error-info-container">
        <h2>Oups! La page que</h2>
        <h2>vous demandez n'existe pas.</h2>
      </div>
      {/* Lien vers la page d'accueil */}
      <Link to="/">Retournez sur la page d'acceuil</Link>
    </div>
  );
}
