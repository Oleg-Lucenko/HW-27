import './Header.css';





function Header() {
    return (
        <div className='header'>
            <a href='/'>
            <img src={require('../../images/logo.png')} className='header__logo-img'/>
            </a>

        </div>
    );
};

export default Header;