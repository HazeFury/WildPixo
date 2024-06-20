import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AddNews.module.css";

function AddNews() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [editMode] = useState(location.pathname.startsWith("/news/edit"));
  const [actualNews, setActualNews] = useState({});
  const [isNewsToEdit, setIsNewsToEdit] = useState(false);
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "-");

  const [newsForm, setNewsForm] = useState({
    title: "",
    intro: "",
    content: "",
    date: formattedDate,
    id: "",
  });

  useEffect(() => {
    if (editMode === true) {
      fetch(`${ApiUrl}/news/${id}`)
        .then((response) => response.json())
        .then((data) => setActualNews(data))
        .then(() => setIsNewsToEdit(true));
    }
  }, [ApiUrl, editMode, id, location.pathname]);

  useEffect(() => {
    if (isNewsToEdit === true && Object.keys(actualNews).length > 0) {
      newsForm.title = actualNews.title;
      newsForm.intro = actualNews.intro;
      newsForm.content = actualNews.content;
      newsForm.date = actualNews.date.slice(0, 10);
      newsForm.id = actualNews.id;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewsToEdit, actualNews]);

  const handleUpdateForm = (e) => {
    setNewsForm({ ...newsForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${ApiUrl}/news/${editMode === true ? "edit" : "add"}`,
        {
          method: editMode === true ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newsForm),
        }
      );

      if (response.status === 201) {
        const { insertId } = await response.json();
        navigate(`/news/${insertId}`);
        notifySuccess("l'opération a réussie");
      } else if (response.status === 200) {
        navigate(`/news`);
        notifySuccess("l'opération a réussie");
      } else {
        notifyFail("l'opération a échouée");
      }
    } catch (err) {
      console.error(err);
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <section className={styles.add_news_container}>
      <h1>Ajouter une news</h1>
      <form onSubmit={handleSubmit} className={styles.add_news_form}>
        <label htmlFor="title">
          Titre
          <input
            type="text"
            name="title"
            id="title"
            required
            value={newsForm.title}
            onChange={handleUpdateForm}
            className={styles.form_input}
          />
        </label>
        <label htmlFor="intro">
          Intro
          <input
            type="text"
            name="intro"
            id="intro"
            required
            value={newsForm.intro}
            onChange={handleUpdateForm}
            className={styles.form_input}
          />
        </label>
        <label htmlFor="content">
          Contenu
          <textarea
            name="content"
            id="content"
            value={newsForm.content}
            required
            onChange={handleUpdateForm}
          />
        </label>
        <input type="submit" value="Publier" className={styles.submit_btn} />
      </form>
    </section>
  );
}

export default AddNews;
