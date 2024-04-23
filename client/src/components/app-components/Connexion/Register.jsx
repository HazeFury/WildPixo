import { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import styles from "./Connexion.module.css";

function Register() {
  const { userDatabase, setUserDatabase } = useUserContext();
  const [registerForm, setRegisterForm] = useState({
    pseudo: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegiserForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (registerForm.password === registerForm.confirmPassword) {
      setUserDatabase({ ...userDatabase, registerForm });
    }
  };

  return (
    <form className={styles.login_container}>
      <div className="nes-field">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          className="nes-input"
          value={registerForm.pseudo}
          onChange={handleRegiserForm}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="mail">Adresse mail</label>
        <input
          type="text"
          name="mail"
          className="nes-input"
          value={registerForm.mail}
          onChange={handleRegiserForm}
        />
      </div>

      <div className="nes-field">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          className="nes-input"
          value={registerForm.password}
          onChange={handleRegiserForm}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          className="nes-input"
          value={registerForm.confirmPassword}
          onChange={handleRegiserForm}
        />
      </div>
      <div className={styles.btn_box}>
        <button
          type="submit"
          className="nes-btn is-blue"
          onClick={handleSubmitForm}
        >
          S'enregistrer
        </button>
      </div>
    </form>
  );
}

export default Register;
