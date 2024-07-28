import logo from './logo.svg';
import './App.css';
import bitcoin from './assets/bitcoin.png';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="logo">
            <img className="logo-img" src={bitcoin} alt="bitcoin symbol" />
        </span>
        <span className="title">Coin Tracker</span>
      </header> 
      <div className="body">
        <span className="main-text">
            Crypto Prices by Market Cap
        </span>
        <span className="below-text">
            The worldwide cryptocurrency market capitalization today stands at an 
            estimated ₹212.5T , seeing a 1.81% movement over the last 24 hours. 
            The total cryptocurrency trading volume in the past day is roughly ₹6T. 
            Bitcoin's market dominance is at about 53.1%.
        </span>    
        <div className="block-container">
            <div className="blocks one">
                <div className="box-text">
                    <span className="box-title">Market Cap</span>
                    <span className="box-content">₹209,060,685,209,763.62</span>
                    <span className="box-box box-red">⮟ 0.96%</span>
                </div>
            </div>
            <div className="blocks two">
                <div className="box-text">
                    <span className="box-title">Volume</span>
                    <span className="box-content">₹7,682,975,788,227.84</span>
                    <span className="box-box box-green">⮝ 27.8%</span>
                </div>
            </div>
            <div className="blocks three">
                <div className="box-text">
                    <span className="box-title">BTC Dominance</span>
                    <span className="box-content">53.3%</span>
                    <span className="box-box box-green">⮝ 0.17%</span>
                </div>
            </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
