//--- Import de fonction React ---
import { NavLink } from "react-router-dom";

//--- Import du logo Kasa ---
import logo from "../../Assets/Logos/red-logo.svg";

//--- Import du SASS ---
import "./Header.scss";

//--- Fonction qui retourne le Header  ---
export function PageHeader() {
  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="Logo du site Kasa" className="red-logo" />
      {/* Nav menu */}
      <nav className="nav-menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/A-Propos">A Propos</NavLink>
      </nav>
    </header>
  );
}
