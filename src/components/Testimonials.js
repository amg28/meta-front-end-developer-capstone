import React from 'react';
import './../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      user: 'John Doe',
      photo: '/assets/user-1.jpg',
      review: 'The food is absolutely amazing! A must-try for everyone.',
    },
    {
      id: 2,
      rating: 4,
      user: 'Jane Smith',
      photo: '/assets/user-2.jpg',
      review: 'Cozy atmosphere and delicious dishes. Loved it!',
    },
    {
      id: 3,
      rating: 5,
      user: 'Bob Johnson',
      photo: '/assets/user-3.jpg',
      review: 'My family and I come here regularly. Never disappoints!',
    },
    {
      id: 4,
      rating: 3,
      user: 'Alice Williams',
      photo: '/assets/user-4.jpg',
      review: 'Good food, but the service could be improved.',
    },
  ];

  return (
    <section className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index} role="img" aria-label="star emoji">
                  ⭐
                </span>
              ))}
            </div>
            <div className="user-info">
              <img src={testimonial.photo} alt={testimonial.user} />
              <div>
                <p>{testimonial.user}</p>
                <p>{testimonial.review}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;