import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="app">
      <Header />

      <main id="contenido-principal" className="page-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;