import './App.css';
import bitcoin from './assets/bitcoin.png';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_COINS_API_KEY;

function App() {

    const [marketData, setMarketData] = useState({});
    const formatData = (data) => {
        console.log('volumechange: ', data.volumeChange);
        if (data.volumeChange < 0) {
            console.log('less');
        } else {
            console.log('more');
        }

        return data;
    }

    const fetchMarketData = async () => {
        try {
            const marketEndpoint = 'https://openapiv1.coinstats.app/markets';
            const response = await fetch(marketEndpoint, {
                method: 'GET',
                headers: {
                    "X-API-KEY": API_KEY
                },
            });

            if (!response.ok) {
                console.log('Network error: ');
            }

            const data = await response.json();
            setMarketData(formatData(data));
            
        } catch (error) {
            console.log('error: ', error);
        }
    };

    useEffect(() => {
        fetchMarketData();
    }, []);

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
                {marketData && (
                    <>
                        <div className={`blocks ${marketData.marketCapChange < 0 ? 'block-red' : 'block-green'}`}>
                            <div className="box-text">
                                <span className="box-title">Market Cap</span>
                                <span className="box-content">₹{marketData.marketCap}</span>
                                {/* <span className="box-box box-red">⮟ {marketData.marketCapChange}%</span> */}
                                <span className={`box-box ${marketData.marketCapChange < 0 ? 'box-red' : 'box-green'}`}>
                                    {marketData.marketCapChange < 0 ? '⮟' : '⮝'}
                                    {marketData.marketCapChange}%
                                </span>
                            </div>
                        </div>
                        <div className={`blocks ${marketData.volumeChange < 0 ? 'block-red' : 'block-green'}`}>
                            <div className="box-text">
                                <span className="box-title">Volume</span>
                                <span className="box-content">₹{marketData.volume}</span>
                                {/* <span className="box-box box-green">⮝ {marketData.volumeChange}%</span> */}
                                <span className={`box-box ${marketData.volumeChange < 0 ? 'box-red' : 'box-green'}`}>
                                    {marketData.volumeChange < 0 ? '⮟' : '⮝'}
                                    {marketData.volumeChange}%
                                </span>
                            </div>
                        </div>
                        <div className={`blocks ${marketData.btcDominanceChange < 0 ? 'block-red' : 'block-green'}`}>
                            <div className="box-text">
                                <span className="box-title">BTC Dominance</span>
                                <span className="box-content">{marketData.btcDominance}%</span>
                                {/* <span className="box-box box-green">⮝ {marketData.btcDominanceChange}%</span> */}
                                <span className={`box-box ${marketData.btcDominanceChange < 0 ? 'box-red' : 'box-green'}`}>
                                    {marketData.btcDominanceChange < 0 ? '⮟' : '⮝'}
                                    {marketData.btcDominanceChange}%
                                </span>
                            </div>
                        </div>
                    </>
                )}
                
            </div>
        </div>
        <Dashboard />
        </div>
    );
}

export default App;
