import React from 'react';
import './../styles/Highlights.css';

function Highlights() {

    const specials = [
        {
          id: 1,
          name: 'Special Dish 1',
          description: 'A delightful dish with unique flavors.',
          price: '$15.99',
          imageUrl: '/assets/special-dish-1.jpg',
        },
        {
          id: 2,
          name: 'Special Dish 2',
          description: 'Exquisite blend of ingredients for a memorable taste.',
          price: '$18.99',
          imageUrl: '/assets/special-dish-2.jpg',
        },
        {
          id: 3,
          name: 'Special Dish 3',
          description: 'A culinary masterpiece that will satisfy your cravings.',
          price: '$12.99',
          imageUrl: '/assets/special-dish-3.jpg',
        },
      ];

    return (
        <div className="highlights-container">
      <div className="highlights-header">
        <h2>Specials</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="highlights-scroll-container">
        {specials.map((special) => (
          <div key={special.id} className="highlight-card">
            <img src={special.imageUrl} alt={special.name} />
            <div className="highlight-details">
              <div className="highlight-name">{special.name}</div>
              <div className="highlight-price">{special.price}</div>
              <p>{special.description}</p>
              <div className="order-delivery">
                <strong>
                  Order a delivery{' '}
                  <span role="img" aria-label="scooter emoji">
                    🛵
                  </span>
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  }
  export default Highlights;