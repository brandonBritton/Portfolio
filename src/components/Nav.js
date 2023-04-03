import logo from "assets/logo.svg";
import ThemeButton from "components/ThemeToggle";
import "styles/Nav.scss";

const Nav = () => {

    return (
        <nav className="nav">
            <div className="brand">
                <a href="/"><img src={ logo } alt="logo" /></a>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="about">about</a></li>
                    <li><a href="projects">experience</a></li>
                    <li><a href="contact">contact</a></li>
                    <li><ThemeButton /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
