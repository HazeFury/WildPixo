import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <p className={styles.header_title}>Nous sommes la </p>
      <span className={styles.header_span}>Wild Pixo</span>

      <p className={styles.header_title}>Nous codons des </p>
      <span className={styles.header_span}>jeux-vidéos</span>

      <button type="button" className="nes-btn is-red toto">
        Découvrir <br />
        nos créations
      </button>
    </header>
  );
}

export default Header;
