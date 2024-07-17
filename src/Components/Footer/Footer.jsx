//--- Import du logo Kasa ---
import logo from "../../Assets/Logos/white-logo.svg";

//--- Import du SASS ---
import "./Footer.scss";

//--- Fonction qui retourne le Footer  ---
export function PageFooter() {
  //--- L'année du footer, récupérer dynamiquement  ---
  const currentDate = new Date();
  const getDate = currentDate.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        {/* Logo */}
        <img src={logo} alt="Logo Kasa blanc" />
        {/* Date et texte */}
        <p>© {getDate} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
