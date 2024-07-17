//--- Import du SASS ---
import "./Author.scss";

//--- Fonction qui retourne le composant Author  ---
const Author = ({ Listing }) => {
  //Cela split le nom de l'auteur pour facilité la mis-en-page
  const NameSplit = Listing.host.name.split(" ");

  return (
    <div className="author-card-container">
      <div className="author-name-container">
        {/* Cela retourne un element h2 pour chaque nom de l'auteur */}
        {NameSplit.map((element) => {
          return (
            <h2 className="author-name" key={element}>
              {element}
            </h2>
          );
        })}
      </div>
      {/* L'image de l'auteur */}
      <img
        src={Listing.host.picture}
        alt={Listing.host.name}
        className="author-picture"
      ></img>
    </div>
  );
};

export default Author;
