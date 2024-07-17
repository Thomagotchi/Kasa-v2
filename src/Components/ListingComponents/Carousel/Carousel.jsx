//--- Import de fonction React ---
import { useState } from "react";

//--- Import des fleches pour le Carousel ---
import leftArrow from "../../../Assets/Arrows/leftArrow.svg";
import rightArrow from "../../../Assets/Arrows/rightArrow.svg";

//--- Import du SASS ---
import "./Carousel.scss";

//--- Fonction qui retourne le composant Carousel  ---
const Carousel = ({ Listing }) => {
  // Index pour l'image précédente
  const [prevImageIndex, setPrevImageIndex] = useState(
    Listing.pictures.length - 1
  );

  // Index pour l'image actuelle
  const [imageIndex, setImageIndex] = useState(0);

  // Index pour l'image suivante
  const [nextImageIndex, setNextImageIndex] = useState(1);

  // Cette fonction applique la classe 'Prev' si l'image est à l'index de l'image précédente
  const checkPrevImageIndex = (elementIndex) => {
    if (Listing.pictures.length > 1) {
      return prevImageIndex === elementIndex ? "prev" : "";
    } else {
      // La fonction ne retourne rien si il n'y a que une image
      return "";
    }
  };

  // Cette fonction applique la classe 'Active' si l'image est à l'index de l'image actuelle
  const checkCurrentImageIndex = (elementIndex) => {
    return imageIndex === elementIndex ? "active" : "";
  };

  // Cette fonction applique la classe 'Next' si l'image est à l'index de l'image suivante
  const checkNextImageIndex = (elementIndex) => {
    if (Listing.pictures.length > 1) {
      return nextImageIndex === elementIndex ? "next" : "";
    } else {
      // La fonction ne retourne rien si il n'y a que une image
      return "";
    }
  };

  // Ces deux fonctions changes les 3 Indexes quand une des flèches est utiliser
  const PreviousImage = () => {
    !prevImageIndex
      ? setPrevImageIndex(Listing.pictures.length - 1)
      : setPrevImageIndex(prevImageIndex - 1);

    !imageIndex
      ? setImageIndex(Listing.pictures.length - 1)
      : setImageIndex(imageIndex - 1);

    !nextImageIndex
      ? setNextImageIndex(Listing.pictures.length - 1)
      : setNextImageIndex(nextImageIndex - 1);
  };

  const NextImage = () => {
    prevImageIndex === Listing.pictures.length - 1
      ? setPrevImageIndex(0)
      : setPrevImageIndex(prevImageIndex + 1);

    imageIndex === Listing.pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);

    nextImageIndex === Listing.pictures.length - 1
      ? setNextImageIndex(0)
      : setNextImageIndex(nextImageIndex + 1);
  };

  // Retour des elements HTML
  return (
    <div className="carousel-container">
      {/* Renvoie toutes les images du logement */}
      {Listing.pictures.map((element) => {
        return (
          <img
            src={element}
            alt={Listing.title}
            key={Listing.pictures.indexOf(element)}
            className={`carousel-image ${checkPrevImageIndex(
              Listing.pictures.indexOf(element)
            )}${checkCurrentImageIndex(
              Listing.pictures.indexOf(element)
            )}${checkNextImageIndex(Listing.pictures.indexOf(element))}`}
          />
        );
      })}

      {/* Si le logement as plusieurs images, cela affiche les flèches et compteur */}
      {Listing.pictures.length > 1 && (
        <div className="carousel-elements">
          {/* Flèche gauche */}
          <img
            src={leftArrow}
            alt="Left arrow."
            onClick={PreviousImage}
            className="carousel-arrow"
          />
          {/* Compteur */}
          <div className="carousel-counter">
            {imageIndex + 1}/{Listing.pictures.length}
          </div>
          {/* Flèche droite */}
          <img
            src={rightArrow}
            alt="Right arrow."
            onClick={NextImage}
            className="carousel-arrow"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
