import { useState, useEffect } from "react";
import styles from "../pages.module.css";
import NewsCard from "../../components/app-components/News/NewsCard";
import Loader from "../../components/ui-components/Loader/Loader";

function News() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = () => {
    fetch(`${ApiUrl}/news`)
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchNews();
    // ne pas mettre fetchGames() dans le tableau de dépendance sous peine de déclencher une boucle infini
    // on admet donc un eslint disable pour éviter un warning inutile ;)
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
    <section className={styles.section_container}>
      <h1>News</h1>
      {newsData && newsData.length > 0 ? (
        newsData.map((news) => <NewsCard key={news.id} data={news} />)
      ) : (
        <p>Pas de news à afficher</p>
      )}
    </section>
  );
}

export default News;
