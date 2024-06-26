import { useUserContext } from "../../../contexts/UserContext";
import styles from "./ProfilData.module.css";
// https://robohash.org/

function ProfilData() {
  const { currentUser } = useUserContext();

  return (
    <section className={styles.profil_data_container}>
      <img
        className={styles.profil_img}
        src={`https://robohash.org/${currentUser?.user.username}`}
        alt="avatar logo"
      />
      <div>
        <div className="nes-field">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            id="pseudo"
            className="nes-input"
            value={currentUser?.user.username}
            readOnly
          />
        </div>
        <div className="nes-field">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            id="mail"
            className="nes-input"
            value={currentUser?.user.mail}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}

export default ProfilData;
