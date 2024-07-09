import PropTypes from "prop-types";
import styles from "./ProfilData.module.css";
// https://robohash.org/

function ProfilData({ userData }) {
  return (
    <section className={styles.profil_data_container}>
      <img
        className={styles.profil_img}
        src={`https://robohash.org/${userData?.username}`}
        alt="avatar logo"
      />
      <div>
        <div className="nes-field">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            id="pseudo"
            className="nes-input"
            value={userData?.username}
            readOnly
          />
        </div>
        <div className="nes-field">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            id="mail"
            className="nes-input"
            value={userData?.mail}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}

ProfilData.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfilData;
