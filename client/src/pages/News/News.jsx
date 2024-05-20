import styles from "../pages.module.css";
import NewsCard from "../../components/app-components/News/NewsCard";
import newsData from "./newsData";

function News() {
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
