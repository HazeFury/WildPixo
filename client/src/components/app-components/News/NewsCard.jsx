import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Modal from "../../ui-components/Modal/Modal";
import scrollToTop from "../../../utils/scrollToTop";
import styles from "./NewsCard.module.css";
import { useUserContext } from "../../../contexts/UserContext";

function NewsCard({ data, handleRefresh }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { id } = data;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);

  const { user, logout } = useUserContext();
  const userIsAdmin = user?.role === "admin";

  const handleDelete = async () => {
    try {
      const response = await fetch(`${ApiUrl}/news/delete`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 200) {
        notifySuccess("L'opération a réussie");
      } else if (response.status === 401) {
        logout(true);
      } else if (response.status === 403) {
        const message = await response.json();
        logout(false);
        notifyFail(message);
      } else {
        notifyFail("L'opération a échouée");
      }
      handleRefresh(); // to refresh the data when the news has been deleted
    } catch (err) {
      console.error(err);
      notifyFail("Une erreur s'est produite");
    }
  };

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
        {userIsAdmin === true && (
          <>
            <Modal
              openBtnText="Supprimer"
              openBtnColor="red"
              yesBtnText="Oui"
              noBtnText="Non"
              descriptionText={`Êtes-vous sûr de vouloir supprimer la news : ${data.title}`}
              action={handleDelete}
            />
            <Link to={`/news/edit/${data.id}`}>
              <button
                type="button"
                onClick={scrollToTop}
                className="nes-btn is-blue"
              >
                Modifier
              </button>
            </Link>
          </>
        )}
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
  handleRefresh: PropTypes.func.isRequired,
};

export default NewsCard;
