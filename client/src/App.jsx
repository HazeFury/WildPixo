import "./App.css";
import "nes.css/css/nes.min.css";
import "./contrib/nesOverride.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </UserProvider>
  );
}

export default App;
