import PropTypes from "prop-types";
import styles from "./NewsCard.module.css";

function NewsCard({ data }) {
  return (
    <article className={styles.news_card_container}>
      <p>{data.creation_date}</p>
      <h4>{data.title}</h4>
      <p>{data.intro_text}</p>
    </article>
  );
}

NewsCard.propTypes = {
  data: PropTypes.shape({
    creation_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro_text: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
