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
  const { logout, setCurrentUser, currentUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate("/");
    notifyInfo("À bientôt :)");
  };

  // useEffect(() => {
  //   if (currentUser === null) {
  //     navigate("/connexion");
  //   }
  // }, [currentUser, navigate]);

  const getProfile = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`${ApiUrl}/user/user/profile`, {
        credentials: "include", // envoyer / recevoir le cookie à chaque requête
        headers: {
          "Content-Type": "application/json",

          // Authorization: `Bearer ${token}`,  // Inclusion du jeton JWT (ancienne version)
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        // console.log("la réponse à la requête est :", data);
        setIsLoading(false);
        setUserData(data);
      } else if (response.status !== 200) {
        console.error(response);
        navigate("/login");
      } else {
        // Log des détails de la réponse en cas d'échec

        navigate("/login");
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      getProfile();
    } else {
      navigate("/login");
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
