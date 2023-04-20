
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';


import {HashRouter, Routes, Route} from 'react-router-dom';


import Home from './pages/Home.js';
import Nervous from './pages/Nervous.js';
import Respiratory from './pages/Respiratory.js';
import Endocrine from './pages/Endocrine.js';
import Cardiovascular from './pages/Cardiovascular.js';
import Lymphatic from './pages/Lymphatic.js';

function App() {
  return (

    <HashRouter>
        <div className="App">

          <Header />
          <Nav />
          <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/nervous.js" element={<Nervous />} />
                <Route exact path="/respiratory.js" element={<Respiratory />} />
                <Route exact path="/endocrine.js" element={<Endocrine />} />
                <Route exact path="/cardiovascular.js" element={<Cardiovascular />} />
                <Route exact path="/lymphatic.js" element={<Lymphatic />} />
            </Routes>
          </main>

        </div>
        </HashRouter>


  );
}

export default App;
