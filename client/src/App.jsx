import "./App.css";
import "nes.css/css/nes.min.css";
import "./contrib/nesOverride.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/app-components/Navbar/Navbar";
import Footer from "./components/app-components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
