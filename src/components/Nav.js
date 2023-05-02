import logo from "./icons/logo.svg";
import ThemeToggle from "utils/ThemeToggle";
import styles from "styles/Nav.module.scss";
import { navLinks } from "config";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.menu}>
        <ul>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url}>{name}</a>
              </li>
            ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
