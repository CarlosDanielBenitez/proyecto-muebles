import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./NavBar.css";
const NavBarLargeScreen = () => {
  return (
    <nav className="navbar-large">
      <ul id="nav-links" className="nav-links">
        <li>
          <Link to="/muebles">Muebles</Link> {/* Reemplaza href por to */}
        </li>
        <li>
          <Link to="/calzados">Calzados</Link> {/* Reemplaza href por to */}
        </li>
        <li>
          <Link to="/colchones">Colchones</Link> {/* Reemplaza href por to */}
        </li>
        <li>
          <Link to="/herramientas">Herramientas</Link>{" "}
          {/* Reemplaza href por to */}
        </li>
        <li className="ofertasContainer">
          <Link to="/" id="ofertas">
            Ofertas
          </Link>{" "}
          {/* Reemplaza href por to */}
          <img src="/images/fire-icon.svg" alt="fire-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLargeScreen;
