
import './Nav.css';
import {Link} from 'react-router-dom';


const activeLinks = e => {
    let links = document.querySelectorAll("a");

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };



function Nav () {
 

    return(
        <ul className="nav">

            
            <li className="nav__item">
                <Link to="/" className='nav__link' onClick={activeLinks}>Home page</Link>
            </li>
            <li className="nav__item">
                <Link to="/nervous.js" className='nav__link' onClick={activeLinks}>Nervous system</Link>
            </li>
            <li className="nav__item">
                <Link to="/respiratory.js" className='nav__link' onClick={activeLinks}>Respiratory system</Link>
            </li>
            <li className="nav__item">
                <Link to="/cardiovascular.js" className='nav__link' onClick={activeLinks}>Cardiovascular system</Link>
            </li>
            <li className="nav__item">
                <Link to="/endocrine.js" className='nav__link' onClick={activeLinks}>Endocrine system</Link>
            </li>
            <li className="nav__item">
                <Link to="/lymphatic.js" className='nav__link' onClick={activeLinks}>Lymphatic system</Link>
            </li>

        </ul>

    );
};

export default Nav;

