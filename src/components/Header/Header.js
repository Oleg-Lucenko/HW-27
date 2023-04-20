import './Header.css';
import {Link} from 'react-router-dom';

import {activeLinks} from '../Nav/Nav.js'




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