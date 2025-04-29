import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Header (same as Login/Forgot) */}
      <header className="about-header">
        <div className="bg-primary text-white text-sm h-7">
          <div className="flex justify-between items-center px-2 py-1 max-w-7xl mx-auto">
            <div className="flex gap-4">
              <span className="flex items-center"><FaMapMarkerAlt className="mr-1" /> Bennett University, Greater Noida, PIN - 201310</span>
              <span className="flex items-center"><FaEnvelope className="mr-1" /> support.ayush@gmail.com</span>
              <span className="flex items-center"><FaPhoneAlt className="mr-1" /> +91-8368570100</span>
            </div>
            <div className="flex gap-3">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 py-4 bg-transparent max-w-7xl mx-auto">
          <div className="text-center border-2 border-primary rounded-lg p-2 shadow-md">
            <h1 className="text-2xl font-bold text-primary m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>

          {/* <nav>
            <ul className="flex m-0 p-0 mt-10">
              <li className="mx-4"><Link to="/home" className="nav-link">Home</Link></li>
              <li className="mx-4"><Link to="/nurseries" className="nav-link">Nurseries</Link></li>
              <li className="mx-4"><Link to="/services" className="nav-link">Services</Link></li>
              <li className="mx-4"><Link to="/pages" className="nav-link">Pages</Link></li>
              <li className="mx-4"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav> */}

          <Link to="/Dashboard" className="btn-primary">Dashboard</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <div className="about-content">
          <h2>About AYUSH</h2>
          <p>
            AYUSH – The Virtual Herbal Garden is a digital initiative promoting the use, cultivation, and knowledge of India’s rich heritage of medicinal plants.
            Our platform provides virtual nurseries, herbal product access, and educational content rooted in Ayurveda.
          </p>
          <p>
            Created by a passionate student team from Bennett University, AYUSH bridges tradition and technology, fostering eco-conscious learning and engagement.
          </p>

          <h3>Our Mission</h3>
          <p>
            To build a sustainable digital ecosystem that empowers communities through herbal awareness, environmental responsibility, and digital accessibility.
          </p>

          <h3>Meet the Team</h3>
          <ul>
            <li>Team 10 – B.Tech Students at Bennett University</li>
            <li>Members: Rishit Bhatnagar, Bhavya Bhutani, Shray Bhardwaj</li>
          </ul>
        </div>
      </main>

      {/* Footer (same as other pages) */}
      <footer className="about-footer">
        <p>
          © 2025 Virtual Herbal Garden | <Link to="/privacy">Privacy Policy</Link> | <Link to="/contact">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default About;
