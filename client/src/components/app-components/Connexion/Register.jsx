import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Connexion.module.css";

function Register({ switchToLogin }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(`${ApiUrl}/user/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerForm),
      });

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        switchToLogin();
        notifySuccess(
          "Votre profil à bien été créé. Vous pouvez vous connecter"
        );
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
    <form onSubmit={handleSubmitForm} className={styles.register_container}>
      <div className="nes-field">
        <label htmlFor="username">Pseudo</label>
        <input
          type="text"
          name="username"
          className="nes-input"
          value={registerForm.username}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="mail">Adresse mail</label>
        <input
          type="mail"
          name="mail"
          className="nes-input"
          value={registerForm.mail}
          onChange={handleRegisterForm}
        />
      </div>

      <div className="nes-field">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          className="nes-input"
          value={registerForm.password}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          className="nes-input"
          value={registerForm.confirmPassword}
          onChange={handleRegisterForm}
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

Register.propTypes = {
  switchToLogin: PropTypes.string.isRequired,
};

export default Register;
