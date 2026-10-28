import TarjetaProyecto from "../components/TarjetaProyecto";

function Proyectos() {
  return (
    <>
      <h1 id="titulo-proyectos">Mis proyectos</h1>
      <p>Algunos de los trabajos que he realizado.</p>

      <section
        className="proyectos-lista"
        aria-labelledby="titulo-proyectos"
      >
        <TarjetaProyecto
          titulo="Mini portafolio con React"
          descripcion="Portafolio desarrollado con React y React Router.
          Incluye cinco páginas: Inicio, Sobre mí, Habilidades,
          Proyectos y Contacto."
          enlace="https://github.com/smillanguir2026-cloud/Evaluaci-n-3-React."
        />

        <TarjetaProyecto
          titulo="Portafolio personal de Simón Millanguir"
          descripcion="Portafolio web personal desarrollado con HTML5
          semántico y CSS3 responsivo. Evaluación P2 - Desarrollo de
          Frontend. Tecnologías: CSS (52,6 %) y HTML (47,4 %)."
          enlace="https://github.com/smillanguir2026-cloud/portafolio-personal-simon-millanguir"
        />

        <TarjetaProyecto
          titulo="Calculadora de límites"
          descripcion="Calculadora de límites desarrollada durante el
          primer semestre para EID 1. Lenguaje utilizado: Python (100 %)."
          enlace="https://github.com/smillanguir2026-cloud/Calculadora-Limites"
        />

        <TarjetaProyecto
          titulo="Animación matemática con Manim — Grupo 4"
          descripcion="Trabajo grupal con código fuente en Manim para
          generar un video explicativo sobre la transición de una suma
          finita de Riemann con rectángulos a la integral definida.
          Incluye un ejemplo numérico resuelto de f(x) = x² + 1 en el
          intervalo [0, 2]. Lenguaje utilizado: Python (100 %)."
          enlace="https://github.com/smillanguir2026-cloud/video-grupo-4-EID-smillanguir-rgonzalez-grivas"
        />

        <TarjetaProyecto
          titulo="JUEGOFALSO — Juego personal"
          descripcion="Juego simple creado por mí, Simón Millanguir,
          como proyecto personal. Lenguaje utilizado: Python (100 %)."
          enlace="https://github.com/smillanguir2026-cloud/JUEGOFALSO"
        />
      </section>
    </>
  );
}

export default Proyectos;