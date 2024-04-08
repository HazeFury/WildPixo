import "./App.css";
import "nes.css/css/nes.min.css";
import "./contrib/nesOverride.css";
import Navbar from "./components/app-components/Navbar/Navbar";
import Footer from "./components/app-components/Footer/Footer";
import Header from "./components/app-components/Header/Header";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Footer />
    </main>
  );
}

export default App;
