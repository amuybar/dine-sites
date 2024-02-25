import React, { useState } from 'react';
import '../css/Footer.css';import axios from 'axios';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3004/submit-email', { email });
      alert('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error('Failed to submit email:', error);
      alert('Failed to submit email. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="signup-container">
        <h3>Sign Up for Our Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="contacts-container">
        <h3>Contact Us</h3>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </footer>
  );
}

export default Footer;