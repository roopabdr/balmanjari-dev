import { useState } from 'react';
import './App.css';
import './App.scss';
import BalmanjariLogo from './Logo/Balmanjari_logo-2.png';
// import BalmanjariLogo from './Logo/Balmanjari logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [navSelect, setNavSelect] = useState("home");

  return (
    <div className="App">
      <Router>
        <div className="topnav" id="myTopnav">
          <Link to="/" className={navSelect === "home" ? "active" : null} onClick={() => {setNavSelect("home"); document.getElementById("myTopnav").classList.remove("responsive");}}>Home</Link>
          <Link to="/about" className={navSelect === "about" ? "active" : null} onClick={() => { setNavSelect("about"); document.getElementById("myTopnav").classList.remove("responsive"); }}>About Us</Link>
          <Link to="/gallery" className={navSelect === "gallery" ? "active" : null} onClick={() => { setNavSelect("gallery"); document.getElementById("myTopnav").classList.remove("responsive"); }}>Image Gallery</Link>
          <Link to="/contact" className={navSelect === "contact" ? "active" : null} onClick={() => { setNavSelect("contact"); document.getElementById("myTopnav").classList.remove("responsive"); }}>Contact</Link>
          <span className="icon" onClick={hamburger}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="balmanjariLogo">
          <img src={BalmanjariLogo} alt="Balmanjari" />
          <span>Balmanjari</span>
        </div>
        <div>
          <span className="heading" data-shadow='Sanskar Science &amp; Shlokas'>Sanskar Science &amp; Shlokas</span>
        </div>
      </div>
      <div className="homeContent">
        The concept of Balmanjari is Sanskar Science and Shlokas. It's an effort to teach children what is Sanatana Dharma is and that it's not a religion but science.
      </div>
    </div>
  );
}

function About() {
  return (<h2>About</h2>);
}
function Gallery() {
  return (<h2>Image Gallery</h2>);
}
function Contact() {
  return (<h2>Contact</h2>);
}

export default App;
