import logo from 'assets/logo.svg';
import { ReactComponent as ThemeButton } from 'assets/theme-button-light.svg';
import 'styles/Nav.scss';

const Nav = () => {

    const showEvent = message => {
        console.log('theme click');
    };

    return (
        <nav className='nav'>
            <div className='brand'>
                <a href='/'><img src={ logo } alt='logo' /></a>
            </div>
            <div className='menu'>
                <ul>
                    <li><a href='about'>about</a></li>
                    <li><a href='projects'>experience</a></li>
                    <li><a href='contact'>contact</a></li>
                    <li><ThemeButton onClick={showEvent}/></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
