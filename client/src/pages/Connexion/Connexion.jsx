import { useState } from "react";
import pageStyles from "../pages.module.css";
import styles from "./Connexion.module.css";
import "../../App.css";

import Login from "../../components/app-components/Connexion/Login";
import Register from "../../components/app-components/Connexion/Register";

function Connexion() {
  const [connexionType, setConnexionType] = useState(false);

  const handleChangetypeToTrue = () => {
    setConnexionType(true);
  };
  const handleChangetypeToFalse = () => {
    setConnexionType(false);
  };

  return (
    <section className={pageStyles.section_container}>
      <section className={styles.connexion_section}>
        <div className={styles.connexion_header}>
          <label>
            <input
              type="radio"
              className="nes-radio is-dark underlined"
              name="answer-dark"
              defaultChecked
              onClick={handleChangetypeToFalse}
            />
            <span>Se connecter</span>
          </label>

          <label>
            <input
              type="radio"
              className="nes-radio is-dark"
              name="answer-dark"
              onClick={handleChangetypeToTrue}
            />
            <span>S'inscrire</span>
          </label>
        </div>

        <div className={styles.connexion_content}>
          {connexionType ? <Register /> : <Login />}
        </div>
      </section>
    </section>
  );
}

export default Connexion;
