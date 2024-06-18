import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "../../ui-components/Modal/Modal";
import scrollToTop from "../../../utils/scrollToTop";
import styles from "./NewsCard.module.css";

function NewsCard({ data }) {
  return (
    <article
      className={`${styles.news_card_container} ${"nes-container is-dark"}`}
    >
      <p className={styles.news_card_date}>{data.date.slice(0, 10)}</p>
      <h4 className={styles.news_card_title}>{data.title}</h4>
      <p className={styles.news_card_intro}>{data.intro}</p>
      <div className={styles.news_card_btn_box}>
        <Link to={`/news/${data.id}`}>
          <button
            type="button"
            onClick={scrollToTop}
            className="nes-btn is-orange"
          >
            Voir
          </button>
        </Link>
        <Modal
          openBtnText="Supprimer"
          yesBtnText="Oui"
          noBtnText="No"
          descriptionText="Êtes-vous sûr de vouloir supprimer cette news."
        />
      </div>
    </article>
  );
}

NewsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
