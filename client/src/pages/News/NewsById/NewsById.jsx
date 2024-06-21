import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./NewsById.module.css";
import Loader from "../../../components/ui-components/Loader/Loader";
import scrollToTop from "../../../utils/scrollToTop";

function NewsById() {
  const { id } = useParams();
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    fetch(`${ApiUrl}/news/${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading === true) {
    return (
      <section className={styles.section_container}>
        <Loader />
      </section>
    );
  }

  return (
    <section className={styles.news_by_id_container}>
      <div className={styles.news_by_id_header_box}>
        <header className={styles.news_by_id_header} />
      </div>
      <article
        className={`${styles.news_by_id_box} ${"nes-container is-dark up"}`}
      >
        <h3 className={styles.box_title}>{news.title}</h3>
        <p className={styles.box_intro}> {news.intro}</p>
        <p className={styles.box_created_date}>
          Publié le {news.date?.slice(0, 10)} par HazeFury
        </p>
        <p className={styles.box_content}>{news.content}</p>
        <div className={styles.test}>
          <Link to="/news">
            <button
              type="button"
              onClick={scrollToTop}
              className="nes-btn is-orange"
            >
              Revenir aux actualités
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default NewsById;
