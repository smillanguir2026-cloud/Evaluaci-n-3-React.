import { Link } from "react-router-dom";
import fotoPerfil from "../assets/img/perfil.jpg";

function Inicio() {
  return (
    <>
      <section className="presentacion" aria-labelledby="titulo-inicio">
        <div>
          <h1 id="titulo-inicio">Hola, soy Simón Millanguir</h1>
          <h2>Estudiante de Ingeniería Civil Informática UCT</h2>

          <p>
            Bienvenido a mi portafolio React. Aquí puedes conocer
            más sobre mí, mis habilidades y mis proyectos.
          </p>

          <Link to="/proyectos" className="boton">
            Explorar proyectos
          </Link>
        </div>

        <img
          src={fotoPerfil}
          alt="Foto de Simón Millanguir"
          className="foto-perfil"
        />
      </section>

      <section className="caracteristicas" aria-label="Mis intereses y valores">
        <article className="caracteristica">
          <h3>Desarrollo frontend</h3>
          <p>Aprendiendo a crear interfaces web.</p>
        </article>

        <article className="caracteristica">
          <h3>Proyectos</h3>
          <p>Aplicando lo aprendido en mis trabajos.</p>
        </article>

        <article className="caracteristica">
          <h3>Aprendizaje continuo</h3>
          <p>Conociendo nuevas herramientas.</p>
        </article>

        <article className="caracteristica">
          <h3>Compromiso</h3>
          <p>Mejorando con cada desafío.</p>
        </article>
      </section>
    </>
  );
}

export default Inicio;