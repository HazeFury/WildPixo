import pageStyles from "../pages.module.css";
import styles from "./About.module.css";
import Marco from "../../assets/images/marco.png";
// import Matthieu from "../../assets/images/matthieu.png";
// import Vivien from "../../assets/images/vivien.png";

function About() {
  return (
    <section className={pageStyles.section_container}>
      <div className={styles.about_container}>
        <h1>À propos de la WildPixo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugiat doloremque, optio aut enim impedit obcaecati numquam cupiditate
          commodi quaerat dignissimos maiores et saepe. Eaque officia qui quia,
          harum exercitationem in totam provident tempore odit cupiditate eum
          molestias placeat mollitia corrupti blanditiis repudiandae aut fuga
          commodi cum veritatis tempora. Cumque neque eos quam facere nisi
          delectus ab quas velit culpa?
        </p>
        <h2>Notre équipe</h2>
      </div>
      <article className={styles.article_container}>
        <div>
          <img className={styles.article_img} src={Marco} alt="Marco" />
          <h4>HazeFury</h4>
          <p>développeur web</p>
        </div>
        <p>
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, dignissimos. Magni quo tempora similique amet ex unde
          possimus illo illum!"
        </p>
      </article>
    </section>
  );
}

export default About;
