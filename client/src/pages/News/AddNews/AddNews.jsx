import { useState } from "react";
import styles from "./AddNews.module.css";

function AddNews() {
  // const ApiUrl = import.meta.env.VITE_API_URL;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(newsForm);
  };

  return (
    <section className={styles.add_news_container}>
      <h1>Ajouter une news</h1>
      <form onSubmit={handleSubmit} className={styles.add_news_form}>
        <label htmlFor="title">
          {" "}
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={newsForm.title}
            onChange={handleUpdateForm}
            className={styles.form_input}
          />
        </label>
        <label htmlFor="intro">
          {" "}
          Intro
          <input
            type="text"
            name="intro"
            id="intro"
            value={newsForm.intro}
            onChange={handleUpdateForm}
            className={styles.form_input}
          />
        </label>
        <label htmlFor="content">
          {" "}
          Content
          <textarea
            name="content"
            id="content"
            value={newsForm.content}
            onChange={handleUpdateForm}
          />
        </label>
        <input type="submit" value="Publier" className={styles.submit_btn} />
      </form>
    </section>
  );
}

export default AddNews;
