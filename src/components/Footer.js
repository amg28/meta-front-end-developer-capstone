import { Link } from 'react-router-dom';
import './../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="/assets/about-image2.jpg" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: +123456789</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Social Media links</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
