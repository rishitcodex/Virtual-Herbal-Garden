import React from 'react';
import './Privacy Policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <header className="header-bar">
        <div className="header-top">
          <div className="header-info">
            <span><i className="fas fa-map-marker-alt"></i> Bennett University, Greater Noida, PIN - 201310</span>
            <span><i className="fas fa-envelope"></i> support.ayush@gmail.com</span>
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

      <div className="privacy-policy-container">
        <h2>Terms and Conditions & Privacy Policy</h2>
        <p><strong>Last Updated:</strong> 20/03/2025</p>

        <h3>1. Terms and Conditions</h3>

        <h4>1.1 Acceptance of Terms</h4>
        <p>By using our platform, you confirm that you are at least 18 years old or using it with parental/guardian consent. Your continued use indicates agreement with these terms.</p>

        <h4>1.2 User Obligations</h4>
        <p>Users must provide accurate and up-to-date information during registration. Misuse of website content, including the herbal encyclopedia, gardening tips, or yoga guides, for unethical, commercial, or unlawful purposes is prohibited.</p>
        <p>Users are responsible for ensuring that any herbal treatments or gardening techniques followed are safe for their health and environment.</p>

        <h4>1.3 Intellectual Property Rights</h4>
        <p>All content, including images, videos, software, and text, is owned by Virtual Herbal Garden or its partners. Users cannot copy, modify, distribute, sell, or reproduce any content without written permission.</p>
        <p>User-generated content (e.g., comments, reviews, or shared gardening tips) may be used by Virtual Herbal Garden for platform improvement and research.</p>

        <h4>1.4 Service Modifications & Availability</h4>
        <p>We may modify, suspend, or discontinue any part of the website without prior notice. We are not responsible for any technical errors, interruptions, or downtime caused by external factors.</p>

        <h4>1.5 Account Termination</h4>
        <p>We reserve the right to suspend or delete user accounts if there is a violation of these terms, or if users engage in fraudulent, illegal, or harmful activities.</p>

        <h4>1.6 Limitation of Liability</h4>
        <p>Virtual Herbal Garden is not liable for any injuries, allergic reactions, or damages resulting from the use of herbal treatments or gardening techniques shared on our platform. Users should consult a medical professional before using any herbal remedies.</p>

        <h3>2. Privacy Policy</h3>

        <h4>2.1 Information We Collect</h4>
        <p>We collect the following types of data:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, email, and location (if using the nursery locator).</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on the site, and search history.</li>
        </ul>

        <h4>2.2 How We Use Your Information</h4>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Send you updates, newsletters, and promotional content (only with your consent).</li>
          <li>Analyze website traffic and user behavior.</li>
        </ul>

        <h4>2.3 Data Sharing & Security</h4>
        <p>We do not sell or rent your data to third parties.</p>
        <p>We may share data with trusted partners (e.g., payment providers, delivery services) to process transactions. Your data is protected using encryption and security protocols.</p>

        <h4>2.4 Cookies & Tracking Technologies</h4>
        <p>We use cookies to enhance user experience and track site performance. You can disable cookies in your browser settings, but some features may not work properly.</p>

        <h4>2.5 Your Rights</h4>
        <p>Users have the right to:</p>
        <ul>
          <li>Request access to their personal data.</li>
          <li>Request deletion of their data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
