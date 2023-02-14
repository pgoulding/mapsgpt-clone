import logo from './mapsGPT-logo.png';
import './App.css';
import ContentFormContainer from './ContentFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="marquee-wrapper">
          <p> Marquee Placeholder 1 </p>
          <p> Marquee Placeholder 2 </p>
          <p> Marquee Placeholder 3 </p>
        </div>
        <div>
          <img src={logo} />
        </div>
      </header>
      <ContentFormContainer />
    </div>
  );
}

export default App;
