function Habilidades() {
  const habilidades = [
    { nombre: "HTML", nivel: 60 },
    { nombre: "CSS", nivel: 50 },
    { nombre: "JavaScript", nivel: 50 },
    { nombre: "React", nivel: 40 },
    { nombre: "Python", nivel: 70 },
  ];

  const herramientas = ["Git", "GitHub", "VS Code"];

  return (
    <>
      <h1>Habilidades y lenguajes</h1>

      <section aria-labelledby="titulo-tecnologias">
        <h2 id="titulo-tecnologias">Tecnologías</h2>

        <div className="habilidades-grid">
          {habilidades.map((habilidad) => (
            <article className="habilidad" key={habilidad.nombre}>
              <h3>{habilidad.nombre}</h3>

              <progress
                value={habilidad.nivel}
                max="100"
                aria-label={`Nivel de ${habilidad.nombre}`}
              />

              <p>{habilidad.nivel}%</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="titulo-herramientas">
        <h2 id="titulo-herramientas">Herramientas</h2>

        <ul className="herramientas">
          {herramientas.map((herramienta) => (
            <li key={herramienta}>{herramienta}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Habilidades;