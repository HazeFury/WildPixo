import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../contexts/UserContext";
import Loader from "../../components/ui-components/Loader/Loader";
import pageStyle from "../pages.module.css";
import styles from "./Profil.module.css";
import ProfilData from "../../components/app-components/Profil/ProfilData";

function Profil() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifyInfo = (text) => toast.info(text);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { user, logout } = useUserContext();

  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

  const getProfile = async () => {
    try {
      const response = await fetch(`${ApiUrl}/user/profile`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();

        setIsLoading(false);
        setUserData(data);
      } else if (response.status === 401) {
        setIsLoading(false);
        logout(true);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    if (user !== "null" || user !== null) {
      getProfile();
    } else {
      navigate("/connexion");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading === true) {
    return (
      <section className={styles.section_container}>
        <Loader />
      </section>
    );
  }

  if (isLoading === false && userData !== null) {
    return (
      <section className={pageStyle.section_container}>
        <div className={styles.profil_container}>
          <ProfilData userData={userData} />
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
}

export default Profil;
