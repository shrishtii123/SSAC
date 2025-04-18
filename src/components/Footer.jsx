import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 your addresss </p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 234 5678</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <ImLinkedin size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <BsGithub size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <BsTwitter size={20} />
            </a><a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={20} />
            </a><a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-text">© 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
