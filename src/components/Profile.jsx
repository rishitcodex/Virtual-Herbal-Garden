import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUser, FaCog, FaSignOutAlt, FaIdCard } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91-9876543210',
    aadharNumber: '1234-5678-9012-3456',
    address: '123 Main Street, City, State, Country'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl p-8 rounded-xl text-secondary font-bold glass-effect">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Profile Information</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="btn-primary"
              >
                Edit Profile
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-bold mb-1">
                <FaUser className="inline mr-1" /> Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-1">
                <FaEnvelope className="inline mr-1" /> Email ID:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block font-bold mb-1">
                <FaPhoneAlt className="inline mr-1" /> Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="aadharNumber" className="block font-bold mb-1">
                <FaIdCard className="inline mr-1" /> Aadhar Number:
              </label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={profileData.aadharNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block font-bold mb-1">
                <FaMapMarkerAlt className="inline mr-1" /> Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={profileData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field"
                rows="3"
              />
            </div>

            {isEditing && (
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn-primary bg-gray-600 hover:bg-gray-700 flex-1"
                >
                  Cancel
                </button>
              </div>
            )}
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

export default Profile; 