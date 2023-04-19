
import './Nav.css';




function Nav() {
    return(
        <ul className="nav">
             <li className="nav__item">
                <a href="/" className="nav__link">Home page</a>
            </li>
            <li className="nav__item">
                <a href="/nervous.js" className="nav__link">Nervous system</a>
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
            </li>

        </ul>

    );
};

export default Nav;