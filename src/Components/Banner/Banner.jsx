//--- Import SASS ---
import "./Banner.scss";

//--- Composant Banner ---
const Banner = ({ img, text1, text2 }) => {
  //--- Si le banner reçoit une image en props et pas de text cela retourne une 'alt' différente ---
  if (!text1 || !text2) {
    return (
      <div className="banner-container">
        {/*--- Image du Banner ---*/}
        <img
          src={img}
          alt="Panoramique d'une vallée."
          className="banner-photo-propos"
        />
      </div>
    );
  } else {
    return (
      <div className="banner-container">
        {/*--- Image du Banner ---*/}
        <img
          src={img}
          alt="Panoramique de falaises."
          className="banner-photo"
        />
        {/*--- Text du Banner ---*/}
        <div className="banner-title">
          <h1 className="banner-text">{text1}</h1>
          <h1 className="banner-text second-text">{text2}</h1>
        </div>
      </div>
    );
  }
};

export default Banner;
