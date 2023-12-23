import React from 'react';
import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>The Little Lemon</h1>
            <p>Located in Chicago</p>
            <p>A charming place offering delightful food.</p>
            <button className="reserve-button">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src="/restaurant-hero.jpg" alt="Restaurant Interior" />
          </div>
        </div>
      </div>
    );
  }
  export default Hero;