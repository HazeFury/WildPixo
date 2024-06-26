import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../../contexts/UserContext";
import styles from "./Connexion.module.css";

function Login() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const navigate = useNavigate();

  const { setCurrentUser } = useUserContext();
  const [loginInfos, setLoginInfos] = useState({
    mail: "",
    password: "",
  });

  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`${ApiUrl}/user/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfos),
      });

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const user = await response.json();

        setCurrentUser(true);

        navigate("/");
        notifySuccess(`Bienvenue ${user.user.username}`);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        notifyFail("Une erreur s'est produite");
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleLogin}>
        <div className="nes-field">
          <label htmlFor="mail">Adresse mail</label>
          <input
            type="mail"
            name="mail"
            className="nes-input"
            value={loginInfos.mail}
            onChange={handleLoginInfos}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="nes-input"
            value={loginInfos.password}
            onChange={handleLoginInfos}
          />
        </div>
        <div className={styles.btn_box}>
          <button
            type="submit"
            className="nes-btn is-green"
            onClick={handleLogin}
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
