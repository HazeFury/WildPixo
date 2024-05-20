import PropTypes from "prop-types";
import styles from "./AboutCard.module.css";

function AboutCard({ data, isLeft }) {
  return (
    <article
      className={`${styles.article_container} ${isLeft === 1 ? styles.isLeft : styles.isRight}`}
    >
      <div>
        <img
          className={styles.article_img}
          src={data.profilePicture}
          alt={data.name}
        />
        <h4 className={styles.name}>{data.name}</h4>
        <p className={styles.job}>{data.job}</p>
      </div>
      <p className={styles.about_text}>{data.aboutText}</p>
    </article>
  );
}

AboutCard.propTypes = {
  isLeft: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    aboutText: PropTypes.number.isRequired,
  }).isRequired,
};

export default AboutCard;
