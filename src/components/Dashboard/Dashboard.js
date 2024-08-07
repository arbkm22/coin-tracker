import React, { useState, useEffect } from "react";
import './Dashboard.css';
import Coins from "../Coins/Coins";

const API_KEY = process.env.REACT_APP_COINS_API_KEY;

function Dashboard() {     

    const [coinsData, setCoinsData] = useState({});

    const fetchCoinData = async () => {
        try {
            const marketEndpoint = 'https://openapiv1.coinstats.app/coins';
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
            
            if (data !== undefined || data !== null) {
                setCoinsData(data.result);
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    useEffect(() => {
        fetchCoinData();
    }, [])

    return (
        <>
            <div className="dashboard">
                <div className="nos">#</div>
                <div className="name">Name</div>
                <div className="1h common">1h%</div>
                <div className="24h common">24h%</div>
                <div className="7d common">7d%</div>
                <div className="price common">Price</div>
                <div className="market-cap common">Market Cap</div>
                <div className="volume-24h common">Volume 24h</div>
                <div className="price-graph common">Price Graph</div>
            </div>
            <Coins data={coinsData} />
        </>
        
    );
}

export default Dashboard;