function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>

        {enlace && (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="boton"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </article>
  );
}

export default TarjetaProyecto;