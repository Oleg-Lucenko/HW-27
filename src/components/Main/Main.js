import './Main.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from '../../pages/Home.js';
import Nervous from '../../pages/Nervous.js';
import Respiratory from '../../pages/Respiratory.js';
import Endocrine from '../../pages/Endocrine.js';
import Cardiovascular from '../../pages/Cardiovascular.js';
import Lymphatic from '../../pages/Lymphatic.js';


function Main() {
    return (
        <main className='main'>
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nervous.js" element={<Nervous />} />
            <Route exact path="/respiratory.js" element={<Respiratory />} />
            <Route exact path="/endocrine.js" element={<Endocrine />} />
            <Route exact path="/cardiovascular.js" element={<Cardiovascular />} />
            <Route exact path="/lymphatic.js" element={<Lymphatic />} />
            </Routes>
        </Router>
            

        </main>
    );
};

export default Main;