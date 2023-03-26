import logo from 'assets/logo.svg';
import theme from 'assets/theme-button.svg';

const Nav = () => {

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
                    <li><a href='/'><img src={ theme } alt='theme' /></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
