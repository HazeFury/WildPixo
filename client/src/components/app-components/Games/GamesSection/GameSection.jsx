import styles from "./GameSection.module.css";
// import GameCard from "../GameCard/GameCard";

function GameSection() {
  return (
    <section className={styles.game_section_container}>
      <h1>Nos jeux préférés</h1>
      <button type="button" className="nes-btn">
        charger les jeux
      </button>
      <div className={styles.game_card_container}>
        <p>-- logique à coder --</p>
        {/* mettre le code ici */}
      </div>
    </section>
  );
}

export default GameSection;
