import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/Sobre-mi";
import Habilidades from "./pages/Habilidades";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contacto />} />

        <Route
          path="*"
          element={
            <>
              <h1>Página no encontrada</h1>
              <p>La dirección que visitaste no existe.</p>

              <Link to="/" className="boton">
                Volver al inicio
              </Link>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;