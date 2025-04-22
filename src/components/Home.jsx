import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg2 bg-cover bg-fixed" style={{ backgroundImage: "url('./public/images/bg2.jpg')" }}>
      {/* Header Section */}
      <header className="w-full">
        <div className="bg-primary text-white text-sm h-7">
          <div className="flex justify-between items-center px-2 py-1 max-w-7xl mx-auto">
            <div className="flex gap-4">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                Bennett University, Greater Noida, PIN - 201310
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-1" />
                support.ayush@gmail.com
              </span>
              <span className="flex items-center">
                <FaPhoneAlt className="mr-1" />
                +91-8368570100
              </span>
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-200 transition-colors"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-200 transition-colors"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-200 transition-colors"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-green-200 transition-colors"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 py-4 bg-transparent max-w-7xl mx-auto">
          <div className="text-center border-2 border-primary rounded-lg p-2 shadow-md inline-block glass-effect">
            <h1 className="text-2xl font-bold text-primary m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>

          <nav>
            <ul className="flex m-0 p-0 mt-10">
              <li className="mx-4 relative">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/nurseries" className="nav-link">Nurseries</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/products" className="nav-link">HerbalShop</Link>
              </li>
              <li className="mx-4">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </nav>

          <Link to="/register" className="btn-primary">
            Embark on Your Herbal Journey
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] p-5 rounded-xl text-secondary font-bold glass-effect text-center">
      <h2 className="text-center font-serif text-6xl font-bold uppercase tracking-wide mb-1">
         Welcome to AYUSH
      </h2>

          <h3 className="mt-1 font-serif text-3xl font-normal text-secondary">
            Your Gateway to Traditional Medicine
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Discover the ancient wisdom of Ayurveda, Yoga, Unani, Siddha, and Homeopathy.
            Start your journey towards holistic wellness today.
          </p>
          <div className="mt-6">
            <Link to="/register" className="btn-primary mr-4">Get Started</Link>
            <Link to="/about" className="btn-primary bg-white text-primary hover:bg-gray-100">Learn More</Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800/90 text-white py-2 text-center text-xs w-full backdrop-blur-sm">
        <p>
          © 2025 Virtual Herbal Garden |{' '}
          <Link to="/privacy" className="text-green-400 mx-1 hover:underline transition-colors">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/contact" className="text-green-400 mx-1 hover:underline transition-colors">
            Contact Us
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home; 