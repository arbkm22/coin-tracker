import React, { useState, useEffect } from "react";
import './Dashboard.css';
import Coins from "../Coins/Coins";

const API_KEY = process.env.REACT_APP_COINS_API_KEY;

const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;

function Dashboard() {   

    const [coinsData, setCoinsData] = useState({});

    const formatData = (coinsData2) => {
        Object.entries(coinsData2).map(([key, value]) => {
            let priceInt = Math.round(value.price);
            let marketCapInt = Math.round(value.marketCap);
            let volumeInt = Math.round(value.volume);

            let priceStr = '₹' + priceInt;
            let marketCapStr = '₹';
            let volumeStr = '₹';

            // Market Cap
            if (marketCapInt >= MILLION && marketCapInt < BILLION) {
                marketCapInt = Math.round(marketCapInt/MILLION);
                marketCapStr += marketCapInt + 'M';
            } else if (marketCapInt >= BILLION && marketCapInt < TRILLION) {
                marketCapInt = Math.round(marketCapInt/1000000000);
                marketCapStr += marketCapInt + 'B';
            } else if (marketCapInt >= TRILLION) {
                marketCapInt = Math.round(marketCapInt/TRILLION);
                marketCapStr += marketCapInt + 'T';
            }

            // Volume
            if (volumeInt >= MILLION && volumeInt < BILLION) {
                volumeInt = Math.round(volumeInt/MILLION);
                volumeStr += volumeInt + 'M';
            } else if (volumeInt >= BILLION && volumeInt < TRILLION) {
                volumeInt = Math.round(volumeInt/1000000000);
                volumeStr += volumeInt + 'B';
            } else if (volumeInt >= TRILLION) {
                volumeInt = Math.round(volumeInt/TRILLION);
                volumeStr += volumeInt + 'T';
            }

            value.price = priceStr;
            value.marketCap = marketCapStr;
            value.volume = volumeStr;
        });
    }

    const fetchCoinData = async () => {
        try {
            const marketEndpoint = 'https://openapiv1.coinstats.app/coins?currency=INR';
            const response = await fetch(marketEndpoint, {
                method: 'GET',
                headers: {
                    "X-API-KEY": API_KEY,
                },
            });

            if (!response.ok) {
                console.log('Network error: ');
            }

            const data = await response.json();
            
            if (data !== undefined || data !== null) {
                formatData(data.result);
                setCoinsData(data.result);
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    useEffect(() => {
        fetchCoinData();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="nos">#</div>
                <div className="name">Name</div>
                <div className="1h common small">1h%</div>
                <div className="24h common small">24h%</div>
                <div className="7d common small">7d%</div>
                <div className="price common small">Price</div>
                <div className="market-cap common">Market Cap</div>
                <div className="volume-24h common">Volume 24h</div>
                <div className="price-graph common">Price Graph</div>
            </div>
            <Coins data={coinsData} />
        </>
    );
}

export default Dashboard;