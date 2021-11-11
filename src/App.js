import './App.css';
import './App.scss';
import BalmanjariLogo from './Logo/Balmanjari_logo-2.png';
// import BalmanjariLogo from './Logo/Balmanjari logo.png';

function App() {
  return (
    <div className="App">
      {/* <div className="om">&#2384;</div> */}
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

export default App;
