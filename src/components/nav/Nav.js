import logo from "assets/logo.svg";
import ThemeToggle from "utils/ThemeToggle";
import styles from "./Nav.module.scss";

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.brand}>
                <a href="/"><img src={ logo } alt="logo" /></a>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="about">about</a></li>
                    <li><a href="projects">experience</a></li>
                    <li><a href="contact">contact</a></li>
                    <li><ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
