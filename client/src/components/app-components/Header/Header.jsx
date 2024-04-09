import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <p className={styles.header_title}>
        nous sommes la <br />
        <span className={styles.header_span}>Wild Pixo</span>
      </p>
      <p className={styles.header_title}>
        nous codons des <br />
        <span className={styles.header_span}>jeux-vidéos</span>
      </p>
      <button type="button" className="nes-btn is-violet toto">
        Découvrir <br />
        nos créations
      </button>
    </header>
  );
}

export default Header;
