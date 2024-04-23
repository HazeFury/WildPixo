import pageStyle from "../pages.module.css";
import styles from "./Profil.module.css";
import ProfilData from "../../components/app-components/Profil/ProfilData";

function Profil() {
  return (
    <section className={pageStyle.section_container}>
      <div className={styles.profil_container}>
        <ProfilData />
      </div>
    </section>
  );
}

export default Profil;
