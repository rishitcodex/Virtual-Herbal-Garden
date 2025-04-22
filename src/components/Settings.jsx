import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUser, FaCog, FaSignOutAlt, FaBell, FaLock, FaLanguage } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    language: 'en',
    theme: 'light',
    twoFactorAuth: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the settings
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg2 bg-cover bg-fixed">
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
                <Link to="/pages" className="nav-link">Pages</Link>
              </li>
              <li className="mx-4">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link to="/dashboard" className="btn-primary flex items-center">
              <FaUser className="mr-2" /> Dashboard
            </Link>
            <Link to="/profile" className="btn-primary flex items-center">
              <FaUser className="mr-2" /> Profile
            </Link>
            <Link to="/login" className="btn-primary bg-red-600 hover:bg-red-700 flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl p-8 rounded-xl text-secondary font-bold glass-effect">
          <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

          <form onSubmit={handleSubmit}>
            {/* Notification Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <FaBell className="mr-2" /> Notification Settings
              </h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Enable Push Notifications
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="emailUpdates"
                    checked={settings.emailUpdates}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Receive Email Updates
                </label>
              </div>
            </div>

            {/* Language Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <FaLanguage className="mr-2" /> Language Settings
              </h3>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="input-field"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>
            </div>

            {/* Theme Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Theme Settings</h3>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                className="input-field"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>

            {/* Security Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <FaLock className="mr-2" /> Security Settings
              </h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  checked={settings.twoFactorAuth}
                  onChange={handleChange}
                  className="mr-2"
                />
                Enable Two-Factor Authentication
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Save Changes
            </button>
          </form>
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

export default Settings; 