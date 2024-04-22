import styles from "./Connexion.module.css";

function Register() {
  return (
    <div className={styles.login_container}>
      <div className="nes-field">
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" id="pseudo" className="nes-input" />
      </div>
      <div className="nes-field">
        <label htmlFor="mail">Adresse mail</label>
        <input type="text" id="mail" className="nes-input" />
      </div>

      <div className="nes-field">
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" className="nes-input" />
      </div>
      <div className="nes-field">
        <label htmlFor="password">Confirmez le mot de passe</label>
        <input type="text" id="password" className="nes-input" />
      </div>
      <div className={styles.btn_box}>
        <button type="button" className="nes-btn is-blue">
          S'enregistrer
        </button>
      </div>
    </div>
  );
}

export default Register;
