import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./GameById.module.css";
import Loader from "../../../components/ui-components/Loader/Loader";
import RatingStars from "../../../components/ui-components/Loader/RatingStars";
import scrollToTop from "../../../utils/scrollToTop";

function GameById() {
  const { slug } = useParams();
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState([]);


  const fetchGame = () => {
    fetch(`${ApiUrl}/games/${slug}`)
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
            backgroundImage: `url('${game.picture}')`,
          }}
        />
      </div>
      <article
        className={`${styles.news_by_id_box} ${"nes-container is-dark up"}`}
      >
        <h3 className={styles.box_title}>{game.name}</h3>
        <RatingStars score={80 + Math.floor(Math.random() * 20)} />
        <p className={styles.box_intro}> {game.intro_text}</p>
        <p className={styles.box_created_date}>
          Publié le {game.release_date.slice(0, 10)} par {game.publisher}
        </p>
        <p className={styles.box_content}>{game.description}</p>
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
