import fotoPerfil from "../assets/img/perfil.jpg";

function SobreMi() {
  return (
    <>
      <section className="presentacion" aria-labelledby="titulo-sobre-mi">
        <img
          src={fotoPerfil}
          alt="Foto de Simón Millanguir"
          className="foto-perfil"
        />

        <div>
          <h1 id="titulo-sobre-mi">Sobre mí</h1>

          <p>
            Soy Simón Millanguir, estudiante de Ingeniería Civil
            Informática. Me interesa el desarrollo web y aprender
            a crear aplicaciones útiles. Quiero formarme en backend,
            frontend y programación. Me apasionan la creación de
            videojuegos y el diseño de páginas interactivas.
          </p>
        </div>
      </section>

      <section className="sobre-detalle" aria-labelledby="titulo-estudios">
        <h2 id="titulo-estudios">¿Qué estudio?</h2>

        <p>
          Estudio Ingeniería Civil Informática en la Universidad
          Católica de Temuco. Tengo 19 años y soy del signo Géminis.
          Minecraft y los juegos independientes despertaron mi interés
          por la programación.
        </p>

        <h2>¿Qué me interesa?</h2>

        <ul>
          <li>El desarrollo web y las tecnologías frontend.</li>
          <li>Aprender nuevas herramientas de programación.</li>
          <li>Aplicar mis conocimientos en proyectos prácticos.</li>
          <li>Crear videojuegos y experiencias interactivas.</li>
        </ul>

        <h2>¿Hacia dónde quiero ir?</h2>

        <p>
          Quiero fortalecer mis conocimientos de programación y
          desarrollar aplicaciones que resuelvan problemas reales.
          También quiero practicar el desarrollo de videojuegos
          y la creación de experiencias interactivas, para convertirme
          en un profesional competente y creativo.
        </p>
      </section>
    </>
  );
}

export default SobreMi;