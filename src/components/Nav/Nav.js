
import './Nav.css';
import {Link} from 'react-router-dom';




function Nav() {
    return(
        <ul className="nav">
             {/* <li className="nav__item">
                <a href="/" className="nav__link">Home page</a>
            </li>
            <li className="nav__item">
                <a href="/nervous.js" className="nav__link">Nervous system</a>
                <Link to="/nervous.js" className="nav__link">Nervous system</Link>
            </li>
            <li className="nav__item">
                <a href="/respiratory.js" className="nav__link">Respiratory system</a>
            </li>
            <li className="nav__item">
                <a href="/cardiovascular.js" className="nav__link">Cardiovascular system</a>
            </li>
            <li className="nav__item">
                <a href="/endocrine.js" className="nav__link">Endocrine system</a>
            </li>
            <li className="nav__item">
                <a href="/lymphatic.js" className="nav__link">Lymphatic system</a>
            </li> */}
            
            <li className="nav__item">
            <Link to="/" className="nav__link">Home page</Link>
            </li>
            <li className="nav__item">
             <Link to="/nervous.js" className="nav__link">Nervous system</Link>
            </li>
                <li className="nav__item">
                    <Link to="/respiratory.js" className="nav__link">Respiratory system</Link>
                </li>
                <li className="nav__item">
                    <Link to="/cardiovascular.js" className="nav__link">Cardiovascular system</Link>
                </li>
                <li className="nav__item">
                    <Link to="/endocrine.js" className="nav__link">Endocrine system</Link>
                </li>
                <li className="nav__item">
                    <Link to="/lymphatic.js" className="nav__link">Lymphatic system</Link>
                </li>

        </ul>

    );
};

export default Nav;