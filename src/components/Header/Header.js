import './Header.css';
import {Link} from 'react-router-dom';

import {activeLinks} from '../Nav/Nav.js'


// function homePageActive() {
//     let links = document.querySelectorAll("a");

//     for (var i = 0; i < links.length; i++) {
//       links[i].classList.remove("active");
//     }

//     let homePageLink = document.querySelector('.nav > .nav__item > a');
//     homePageLink.classList.add('active');
// };

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img src={require('../../images/logo.png')} className='header__logo-img' onClick={activeLinks}/>
            </Link>

        </div>
    );
};

export default Header;