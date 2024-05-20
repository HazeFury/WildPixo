import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./GameById.module.css";
import Loader from "../../../components/ui-components/Loader/Loader";
import RatingStars from "../../../components/ui-components/Loader/RatingStars";
import scrollToTop from "../../../utils/scrollToTop";

function GameById() {
  const { slug } = useParams();
  const ApiKey = import.meta.env.VITE_GAMES_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);

  const fetchGame = () => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=${ApiKey}`)
      .then((response) => response.json())
      .then((data) => setGame(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchGame();
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
    <section className={styles.news_by_id_container}>
      <div className={styles.news_by_id_header_box}>
        <header
          className={styles.news_by_id_header}
          style={{
            backgroundImage: `url('${game.background_image}')`,
          }}
        />
      </div>
      <article
        className={`${styles.news_by_id_box} ${"nes-container is-dark up"}`}
      >
        <h3 className={styles.box_title}>{game.name}</h3>
        <RatingStars score={game.metacritic} />
        <p className={styles.box_intro}> {game.intro_text}</p>
        <p className={styles.box_created_date}>
          Publié le {game.released} par {game.developers[0].name}
        </p>
        <p className={styles.box_content}>{game.description_raw}</p>
        <div className={styles.center}>
          <Link to="/games">
            <button
              type="button"
              onClick={scrollToTop}
              className="nes-btn is-orange"
            >
              Revenir aux jeux
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default GameById;
