import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import pageStyle from "../pages.module.css";
import styles from "./Profil.module.css";
import ProfilData from "../../components/app-components/Profil/ProfilData";

function Profil() {
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (currentUser === null) {
      navigate("/connexion");
    }
  }, [currentUser, navigate]);

  return (
    <section className={pageStyle.section_container}>
      <div className={styles.profil_container}>
        <ProfilData />
        <button
          type="button"
          className={`nes-btn is-red ${styles.logout_btn}`}
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </div>
    </section>
  );
}

export default Profil;
