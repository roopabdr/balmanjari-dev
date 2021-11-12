import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

import './App.css';

function App() {
  const [navSelect, setNavSelect] = useState("home");

  return (
    <div className="App">
      <Router>
        <div className="topnav" id="myTopnav">
          {/* <Link to="/" className={navSelect === "home" ? "active" : null} onClick={() => {setNavSelect("home"); document.getElementById("myTopnav").classList.remove("responsive");}}>Home</Link> */}
          <Link to="/balmanjari-dev" className={navSelect === "home" ? "active" : null} onClick={() => { setNavSelect("home"); document.getElementById("myTopnav").classList.remove("responsive"); }}>Home</Link>
          <Link to="/about" className={navSelect === "about" ? "active" : null} onClick={() => { setNavSelect("about"); document.getElementById("myTopnav").classList.remove("responsive"); }}>About Us</Link>
          <Link to="/gallery" className={navSelect === "gallery" ? "active" : null} onClick={() => { setNavSelect("gallery"); document.getElementById("myTopnav").classList.remove("responsive"); }}>Image Gallery</Link>
          <Link to="/contact" className={navSelect === "contact" ? "active" : null} onClick={() => { setNavSelect("contact"); document.getElementById("myTopnav").classList.remove("responsive"); }}>Contact</Link>
          <span className="icon" onClick={hamburger}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/balmanjari-dev" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <div className="om">&#2384;</div> */}
    </div>
  );
}

function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default App;