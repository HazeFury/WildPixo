import styles from "../pages.module.css";
import GameSection from "../../components/app-components/Games/GamesSection/GameSection";

function Games() {
  return (
    <div className={styles.section_container}>
      <GameSection numberOfResults={20} />
    </div>
  );
}

export default Games;
