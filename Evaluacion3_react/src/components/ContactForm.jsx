import { useState } from "react";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "Escribe tu nombre.";
    }

    if (!correo.trim()) {
      nuevosErrores.correo = "Escribe tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      nuevosErrores.correo = "Escribe un correo válido.";
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    setErrores(nuevosErrores);
    setConfirmacion("");

    if (Object.keys(nuevosErrores).length === 0) {
      setConfirmacion(
        `Gracias, ${nombre.trim()}. El formulario se completó correctamente.`
      );

      setNombre("");
      setCorreo("");
      setMensaje("");
    }
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre *</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(evento) => {
            setNombre(evento.target.value);
            setConfirmacion("");
          }}
          required
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
        />

        {errores.nombre && (
          <p id="error-nombre" className="error">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico *</label>
        <input
          id="correo"
          name="correo"
          type="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={correo}
          onChange={(evento) => {
            setCorreo(evento.target.value);
            setConfirmacion("");
          }}
          required
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={errores.correo ? "error-correo" : undefined}
        />

        {errores.correo && (
          <p id="error-correo" className="error">
            {errores.correo}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(evento) => {
            setMensaje(evento.target.value);
            setConfirmacion("");
          }}
          required
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
        />

        {errores.mensaje && (
          <p id="error-mensaje" className="error">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button type="submit" className="boton boton-enviar">
        Enviar mensaje
      </button>

      <p className="confirmacion" role="status">
        {confirmacion}
      </p>
    </form>
  );
}

export default ContactForm;