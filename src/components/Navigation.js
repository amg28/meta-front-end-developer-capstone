import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Navigation() {
  return (
    <nav className="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link> {/* Use Link instead of a */}
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Menu</Link>
      </li>
      <li>
        <Link to="/booking">Reservations</Link>
      </li>
      <li>
        <Link to="/">Order Online</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navigation;