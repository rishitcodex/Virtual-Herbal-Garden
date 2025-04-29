// ContactUs.jsx
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <header className="header-bar">
        <div className="header-top">
          <div className="header-info">
            <span><i className="fas fa-map-marker-alt"></i> Bennett University, Greater Noida, PIN - 201310</span>
            <span><i className="fas fa-envelope"></i>projectayush007@gmail.com</span>
            <span><i className="fas fa-phone-alt"></i> +91-8368570100</span>
          </div>
          <div className="header-icons">
            <a href="https://www.facebook.com/profile.php?id=61574951247607"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="www.linkedin.com/in/ayush-project-743546359"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/channel/UCnNFon3CLF8_PdKxxcJH2PQ"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="header-bottom">
          <div className="logo-container">
            <h1>AYUSH</h1>
            <p>The Virtual Herbal Garden</p>
          </div>
        </div>
      </header>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us for any queries, support, or feedback.</p>

        <div className="contact-details">
          <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> Bennett University, Greater Noida, PIN - 201310</p>
          <p><i className="fas fa-envelope"></i> <strong>Email:</strong> support.ayush@gmail.com</p>
          <p><i className="fas fa-phone-alt"></i> <strong>Phone:</strong> +91-8368570100</p>
        </div>

        <div className="contact-form">
          <form action="submit_form.php" method="POST">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message :</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Should be at least 100 characters"
              onInput={(e) => checkCharacterCount(e.target)}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
