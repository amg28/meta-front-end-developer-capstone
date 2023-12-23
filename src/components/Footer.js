import './../styles/Footer.css';

function Footer() {
    return (
      <footer className="footer">
      <div className="footer-column">
        <img src="/Logo.svg" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
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