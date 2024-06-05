import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import scrollToTop from "../../../../utils/scrollToTop";
import styles from "./GameCard.module.css";

function GameCard({ gameData }) {
  return (
    <figure className={styles.game_card_box}>
      <img
        className={styles.game_card_img}
        src={gameData.picture}
        alt={gameData.name}
      />
      <h3
        className={
          gameData.name.length > 18
            ? `${styles.small_policy}`
            : `${styles.normal_policy}`
        }
      >
        {gameData.name}
      </h3>
      <div className={styles.more_detail_card}>
        <p>date de sortie :</p>
        <p>{gameData.release_date.slice(0,10)}</p>
      </div>
      <div className={styles.more_detail_card}>
        <p>notation :</p>
        <p>
          {80 + Math.floor(Math.random() * 20)}
        </p>
      </div>
      <div className={styles.btn_box}>  
        <Link to={`/game/${gameData.slug}`}>
          <button
            type="button"
            onClick={scrollToTop}
            className="nes-btn is-orange"
          >
            Voir
          </button>
        </Link>
      </div>
    </figure>
  );
}

GameCard.propTypes = {
  gameData: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
