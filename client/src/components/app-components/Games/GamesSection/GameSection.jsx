import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./GameSection.module.css";
import GameCard from "../GameCard/GameCard";

function GameSection({ numberOfResults }) {
  const ApiKey = import.meta.env.VITE_GAMES_API_KEY;
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=${ApiKey}&page_size=${numberOfResults}`
    )
      .then((response) => response.json())
      .then((data) => setGames(data.results));
  };

  return (
    <section className={styles.game_section_container}>
      <h1>Nos jeux préférés</h1>
      <button type="button" className="nes-btn" onClick={fetchGames}>
        charger les jeux
      </button>
      <div className={styles.game_card_container}>
        {games.map((game) => (
          <GameCard key={game.id} gameData={game} />
        ))}
      </div>
    </section>
  );
}

GameSection.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
};

export default GameSection;
