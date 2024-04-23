import "./App.css";
import "nes.css/css/nes.min.css";
import "./contrib/nesOverride.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/app-components/Navbar/Navbar";
import Footer from "./components/app-components/Footer/Footer";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </UserProvider>
  );
}

export default App;
