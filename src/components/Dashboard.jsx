import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube,FaLinkedinIn } from 'react-icons/fa';

const Dashboard = () => {
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
              <a href="https://www.facebook.com/profile.php?id=61574951247607" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-200 transition-colors"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-200 transition-colors"><FaTwitter /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-200 transition-colors"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCnNFon3CLF8_PdKxxcJH2PQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-green-200 transition-colors"><FaYoutube /></a>
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
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/nurseries" className="nav-link">Nurseries</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/services" className="nav-link">Vinayak</Link>
              </li>
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/products" className="nav-link">HerbalShop</Link>
              </li>
              <li className="mx-4">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link to="/profile" className="btn-primary flex items-center">
              <FaUser className="mr-2" /> Profile
            </Link>
            <Link to="/settings" className="btn-primary flex items-center">
              <FaCog className="mr-2" /> Settings
            </Link>
            <Link to="/login" className="btn-primary bg-red-600 hover:bg-red-700 flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl p-8 rounded-xl text-secondary font-bold glass-effect">
          <h2 className="text-justify font-serif text-4xl font-bold uppercase tracking-wider mb-4">
            Welcome to Your Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Your Profile</h3>
              <p className="text-gray-700">View and update your profile information</p>
              <Link to="/profile" className="btn-primary mt-4 inline-block">View Profile</Link>
            </div>
            <div className="p-6 bg-white/50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HerbalShop</h3>
              <p className="text-gray-700">Buy from us!</p>
              <Link to="/products" className="btn-primary mt-4 inline-block">Go to Store</Link>
            </div>
            <div className="p-6 bg-white/50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Nurseries</h3>
              <p className="text-gray-700">Browse and manage your nurseries</p>
              <Link to="/nurseries" className="btn-primary mt-4 inline-block">View Nurseries</Link>
            </div>
            <div className="p-6 bg-white/50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vinayak</h3>
              <p className="text-gray-700">Your Herbal Healing Companion</p>
              <Link to="/services" className="btn-primary mt-4 inline-block">View Services</Link>
            </div>
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

export default Dashboard; 