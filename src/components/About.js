import React from 'react';
import './../styles/About.css';

function About() {
  return (
    <section className="about-container">
      <article className="about-text">
        <h2>Little Lemon</h2>
        <p>
          Welcome to Little Lemon, located in the heart of Chicago. Our
          restaurant offers a delightful dining experience with a focus on
          quality ingredients and exceptional service. Explore a world of
          flavors and enjoy a memorable culinary journey.
        </p>
      </article>
      <figure className="about-images">
        <img
          src="/assets/about-image1.jpg"
          alt="Mario and Adrian cooking"
          className="image2"
        />
      </figure>
    </section>
  );
}

export default About;
