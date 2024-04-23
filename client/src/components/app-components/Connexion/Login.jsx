import styles from "./Connexion.module.css";

function Login() {
  return (
    <div className={styles.login_container}>
      <div className="nes-field">
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" id="pseudo" className="nes-input" />
      </div>
      <div className="nes-field">
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" className="nes-input" />
      </div>
      <div className={styles.btn_box}>
        <button type="button" className="nes-btn is-green">
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;
