import { useParams } from "react-router-dom";
import styles from "./NewsById.module.css";
import newsData from "../newsData";

function NewsById() {
  const { id } = useParams();
  const data = newsData[id - 1];
  return (
    <section className={styles.news_by_id_container}>
      <div className={styles.news_by_id_header_box}>
        <header className={styles.news_by_id_header} />
      </div>
      <article
        className={`${styles.news_by_id_box} ${"nes-container is-dark up"}`}
      >
        <h3 className={styles.box_title}>{data.title}</h3>
        <p className={styles.box_intro}> {data.intro_text}</p>
        <p className={styles.box_created_date}>
          Publié le {data.creation_date} par {data.author}
        </p>
        <p className={styles.box_content}>{data.content}</p>
      </article>
    </section>
  );
}

export default NewsById;
