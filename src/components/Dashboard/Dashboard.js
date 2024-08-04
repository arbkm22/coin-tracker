import React, { useState, useEffect } from "react";
import './Dashboard.css';

function Dashboard() {

    function getCoinData() {
        
    }      

    return (
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
    );
}

export default Dashboard;