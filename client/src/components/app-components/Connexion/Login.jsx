import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../../contexts/UserContext";
import styles from "./Connexion.module.css";

function Login() {
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const navigate = useNavigate();
  const { setCurrentUser, userDatabase } = useUserContext();
  const [loginInfos, setLoginInfos] = useState({
    pseudo: "",
    password: "",
  });

  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (
      userDatabase.registerForm.pseudo === loginInfos.pseudo &&
      userDatabase.registerForm.password === loginInfos.password
    ) {
      setCurrentUser(userDatabase.registerForm);
      navigate("/");
      notifySuccess(`Bienvenue ${userDatabase.registerForm.pseudo}`);
    } else {
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className="nes-field">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          className="nes-input"
          value={loginInfos.pseudo}
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
          type="button"
          className="nes-btn is-green"
          onClick={handleLogin}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;
