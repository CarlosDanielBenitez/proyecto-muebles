import { Link, useLocation } from "react-router-dom";
import "./checkStyles.css";

const NavigationCheckIn = () => {
  const location = useLocation();

  // Estilos para el Link cuando está activo
  const linkStyles = {
    color: "black", // Cambia el color del texto a negro
    textDecoration: "none", // Elimina la decoración de texto subrayado
  };

  // Mostrar el icono solo si no está en la página de CheckIn
  if (location.pathname !== "/CheckIn") {
    return (
      <Link to="/CheckIn" style={linkStyles}>
        <div className="icon-user-container">
          <img className="iconsAll" src="images/user-icon.svg" alt="user" />
          <p>Mi cuenta</p>
        </div>
      </Link>
    );
  } else {
    // Devolver un componente alternativo cuando está en la página de CheckIn
    return (
      <Link to="/CheckIn" style={linkStyles}>
        <div className="icon-user-container">
          <img className="iconsAll" src="images/user-icon.svg" alt="user" />
          <p>Mi cuenta</p>
        </div>
      </Link>
    );
  }
};

export default NavigationCheckIn;
