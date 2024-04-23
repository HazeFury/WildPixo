import styles from "./ProfilData.module.css";

function ProfilData() {
  const userInfo = {
    pseudo: "HazeFury",
    mail: "HazeFury@gmail.com",
  };

  return (
    <section className={styles.profil_data_container}>
      <img
        className={styles.profil_img}
        src="https://robohash.org/HazeFury"
        alt="avatar logo"
      />
      <div>
        <div className="nes-field">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            id="pseudo"
            className="nes-input"
            value={userInfo.pseudo}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            id="mail"
            className="nes-input"
            value={userInfo.mail}
          />
        </div>
      </div>
    </section>
  );
}

export default ProfilData;
