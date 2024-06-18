import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AddNews.module.css";

function AddNews() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "-");

  const [newsForm, setNewsForm] = useState({
    title: "",
    intro: "",
    content: "",
    date: formattedDate,
  });

  const handleUpdateForm = (e) => {
    setNewsForm({ ...newsForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ApiUrl}/news/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsForm),
      });

      if (response.status === 201) {
        const { insertId } = await response.json();
        navigate(`/news/${insertId}`);
        notifySuccess("l'opération a réussie");
      }
      else {
        notifyFail("l'opération a échouée")
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
