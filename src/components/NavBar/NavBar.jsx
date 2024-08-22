import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./NavBar.css";
import NavigationCheckIn from "../CheckIn/NavigationCheckIn";
import Search from "../Search/Search";
import SearchMobile from "../SearchMobile/SearchMobile";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="headerGlobal">
        <nav className="navbar">
          {/* Menú hamburguesa */}
          <div className="titleHambContent">
            <div className="menu-icon closed" onClick={toggleMenu}>
              {isOpen && <h1 className="store-title">Mi Tienda</h1>}
              <Hamburger
                toggled={isOpen}
                direction="right"
                size={12}
                toggledColor="#5E5E5E"
              />
            </div>
          </div>

          {/* Menú de navegación */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Muebles</Link> {/* Reemplaza href por to */}
            </li>
            <li>
              <Link to="/">Calzados</Link> {/* Reemplaza href por to */}
            </li>
            <li>
              <Link to="/">Colchones</Link> {/* Reemplaza href por to */}
            </li>
            <li>
              <Link to="/">Herramientas</Link> {/* Reemplaza href por to */}
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

        {/* Condición para mostrar o no NavigationCheckIn */}
        {!isOpen && (
          <div className="navigationCheckInAll">
            <h1>
              <Link className="store-title" to="/">
                Mi Tienda
              </Link>{" "}
              {/* Reemplazar href por to */}
            </h1>
            <Search />
            <div className="iconsHeader">
              <NavigationCheckIn />
              <Link to="/">
                <img src="/images/shopping-cart.svg" alt="cart" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="search-header-global-mobile">
        <SearchMobile />
      </div>
    </div>
  );
};

export default NavBar;
