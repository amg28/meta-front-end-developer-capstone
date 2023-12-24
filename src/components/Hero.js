import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Little Lemon</h1>
          <p>Located in Chicago</p>
          <p>
            A charming place offering delightful food and a cozy atmosphere for
            an unforgettable dining experience. Join us and savor the flavors
            that make The Little Lemon special.
          </p>
          <Link to="/booking" className="reserve-button" aria-label="Reserve a Table">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/restaurant-hero.jpg"
            alt="Interior of The Little Lemon restaurant"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
