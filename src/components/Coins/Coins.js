import React, { useEffect, useState } from "react";
import './Coins.css';

function Coins(props) {

    const [coinsData, setCoinsData] = useState({});

    console.log('coinsData: ', coinsData);

    useEffect(() => {
        const updateCoinsData = () => {
            if (props.data) {
                setCoinsData(props.data);
            }
        }

        updateCoinsData();
        const intervalId = setInterval(updateCoinsData, 60000);

        return () => clearInterval(intervalId);
    }, [props.data]);

    return (
        <>
            {coinsData ? (
                <div className="coins">
                    {Object.entries(coinsData).map(([key, value]) => (
                        <div className="coins-dash">
                            <div className="nos">{value.rank}</div>
                            <div className="name">
                                <div className="name-image">
                                    <img src={value.icon} className="image"></img>
                                </div>
                                <div className="name-name">{value.name} • </div>
                                <div className="name-symbol">{value.symbol}</div>
                            </div>
                            <div className="1h common">
                                <div className={`coin-box ${value.priceChange1h < 0 ? 'coin-box-red' : 'coin-box-green'}`}>
                                    {value.priceChange1h < 0 ? '⮟' : '⮝'}
                                    {Math.abs(value.priceChange1h)}%
                                </div>
                            </div>
                            <div className="24h common">
                                <div className={`coin-box ${value.priceChange1d < 0 ? 'coin-box-red' : 'coin-box-green'}`}>
                                    {value.priceChange1d < 0 ? '⮟' : '⮝'}
                                    {Math.abs(value.priceChange1d)}%
                                </div>
                            </div>
                            <div className="7d common">
                                <div className={`coin-box ${value.priceChange1w < 0 ? 'coin-box-red' : 'coin-box-green'}`}>
                                    {value.priceChange1w < 0 ? '⮟' : '⮝'}
                                    {Math.abs(value.priceChange1w)}%
                                </div>
                            </div>
                            <div className="price common">
                                {value.price}
                            </div>
                            <div className="market-cap common">
                                {value.marketCap}
                            </div>
                            <div className="volume-24h common">
                                {value.volume}
                            </div>
                            <div className="price-graph common"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </>
    )
}

export default Coins;

