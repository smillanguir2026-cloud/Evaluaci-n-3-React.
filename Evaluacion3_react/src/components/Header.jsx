import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2 className="header-logo">MiPortafolio React</h2>

      <nav className="header-nav" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/sobre-mi">
          Sobre mí
        </NavLink>

        <NavLink to="/habilidades">
          Habilidades
        </NavLink>

        <NavLink to="/proyectos">
          Proyectos
        </NavLink>

        <NavLink to="/contacto">
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;