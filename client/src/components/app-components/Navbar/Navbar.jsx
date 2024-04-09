import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import useScreenSize from "../../../hooks/useScreenSize";
import Logo from "../../../assets/images/logo-small.png";
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";
import User from "../../../assets/icons/users.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const screenSize = useScreenSize();
  const onMobileFormat = screenSize <= 1124;
  const onDesktopFormat = screenSize > 1124;

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseMenu);
    window.addEventListener("scroll", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", handleCloseMenu);
    };
  }, []);
  return (
    <>
      <nav className={styles.nav_container}>
        <Link className={styles.navlink_style} to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="Wild Pixo Logo" />
            {screenSize > 600 && <h1 style={{ marginLeft: 15 }}>Wild Pixo</h1>}
          </div>
        </Link>
        {onMobileFormat && (
          <button type="button" className="nes-btn" onClick={handleOpenMenu}>
            <img
              className={styles.nav_img}
              src={openMenu ? Close : Menu}
              alt="menu-icon"
            />
          </button>
        )}
        {onDesktopFormat && (
          <div className={styles.nav_link_container}>
            <NavLink className={styles.navlink_style} to="/">
              <span className="nes-text is-blue">Accueil</span>
            </NavLink>
            <NavLink className={styles.navlink_style} to="/">
              <span className="nes-text is-success">Jeux</span>
            </NavLink>
            <NavLink className={styles.navlink_style} to="/">
              <span className="nes-text is-warning">Actualités</span>
            </NavLink>
            <NavLink className={styles.navlink_style} to="/">
              <span className="nes-text is-error">À propos</span>
            </NavLink>
            <NavLink className={styles.navlink_style} to="/">
              <button type="button" className="nes-btn">
                <img
                  className={styles.nav_user_btn}
                  src={User}
                  alt="user-logo"
                />
              </button>
            </NavLink>
          </div>
        )}
      </nav>
      {openMenu && onMobileFormat && (
        <section className={styles.opened_menu_section}>
          <button
            type="button"
            className="nes-btn is-blue"
            onClick={handleCloseMenu}
          >
            Accueil
          </button>

          <Link to="/">
            <button
              type="button"
              className="nes-btn is-success"
              onClick={handleCloseMenu}
            >
              Jeux
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="nes-btn is-warning"
              onClick={handleCloseMenu}
            >
              Actualités
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="nes-btn is-error"
              onClick={handleCloseMenu}
            >
              À propos
            </button>
          </Link>
          <div style={{ marginTop: 30, borderTop: "solid white 2px" }}>
            <Link to="/">
              <button
                type="button"
                className="nes-btn"
                onClick={handleCloseMenu}
              >
                Se connecter
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default Navbar;
