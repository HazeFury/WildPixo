import { useState, useEffect } from "react";
import styles from "./GameSection.module.css";
import GameCard from "../GameCard/GameCard";
import Loader from "../../../ui-components/Loader/Loader";

function GameSection() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch(`${ApiUrl}/games`)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchGames();
    // ne pas mettre fetchGames() dans le tableau de dépendance sous peine de déclencher une boucle infini
    // on admet donc un eslint disable pour éviter un warning inutile ;)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading === true) {
    return (
      <section className={styles.game_section_container}>
        <Loader />
      </section>
    );
  }

  return (
    <section className={styles.game_section_container}>
      <h1>Nos jeux préférés</h1>
      <div className={styles.game_card_container}>
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} gameData={game} />)
        ) : (
          <p>Une erreur s'est produite pendant le chargement !</p>
        )}
      </div>
    </section>
  );
}

export default GameSection;
