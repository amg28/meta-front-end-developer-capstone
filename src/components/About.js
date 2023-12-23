
import React from 'react';
import './../styles/About.css';

function About() {
    return (
        <div className="about-container">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <p>
            Welcome to Little Lemon, located in the heart of Chicago. Our
            restaurant offers a delightful dining experience with a focus on
            quality ingredients and exceptional service. Explore a world of
            flavors and enjoy a memorable culinary journey.
          </p>
        </div>
        <div className="about-images">
          <img
            src="/assets/about-image1.jpg"
            alt="Mario and Adrian"
            className="image1"
          />
          <img
            src="/assets/about-image2.jpg"
            alt="Mario and Adrian"
            className="image2"
          />
        </div>
      </div>
    );
  }
  export default About;