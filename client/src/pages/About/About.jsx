import pageStyles from "../pages.module.css";
import styles from "./About.module.css";
import AboutCard from "../../components/app-components/About/AboutCard";
import aboutWildPixoMembers from "./AboutData";

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
      {aboutWildPixoMembers.length > 0 &&
        aboutWildPixoMembers.map((member) => (
          <AboutCard key={member.id} data={member} isLeft={member.id % 2} />
        ))}
    </section>
  );
}

export default About;
