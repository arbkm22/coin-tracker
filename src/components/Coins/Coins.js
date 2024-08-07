import React, { useEffect, useState } from "react";
import './Coins.css';

function Coins(props) {

    const [coinsData, setCoinsData] = useState({});

    useEffect(() => {
        const updateCoinsData = () => {
            if (props.data) {
                setCoinsData(props.data);
            }
        }

        Object.entries(coinsData).map(([key, value]) => {
            console.log(`key: ${key} | value: ${value.name}`);
        });

        updateCoinsData();
        const intervalId = setInterval(updateCoinsData, 60000);

        return () => clearInterval(intervalId);
    }, [props.data]);
    

    console.log('coinsData size: ', coinsData);
    

    return (
        <>
            {coinsData ? (
                <div className="coins">
                    {/* Render your coins data here */}
                    {Object.entries(coinsData).map(([key, value]) => (
                        <div className="coins-dash">
                            <div className="nos">{value.rank}</div>
                            <div className="name">{value.name}</div>
                            <div className="1h common">{value.priceChange1h}</div>
                            <div className="24h common">{value.priceChange1d}</div>
                            <div className="7d common">{value.priceChange1w}</div>
                            <div className="price common">{value.price}</div>
                            <div className="market-cap common">{value.marketCap}</div>
                            <div className="volume-24h common">{value.volume}</div>
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

