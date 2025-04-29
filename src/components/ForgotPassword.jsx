import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './LoginPage.css'; // Reusing LoginPage CSS

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`A password reset link has been sent to ${email}`);
  };

  return (
    <div className="login-container">
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
          <div className="text-center border-2 border-primary rounded-lg p-2 shadow-md inline-block">
            <h1 className="text-2xl font-bold text-primary m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>

          <nav>
            <ul className="flex m-0 p-0 mt-10">
              <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                <Link to="/home" className="nav-link">Home</Link>
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

          <Link to="/register" className="btn-primary">
            Create Account
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-main">
        <div className="login-content">
          <div className="login-grid">
            {/* Left Text */}
            <div className="login-box">
              <h2 className="text-6xl font-serif text-secondary font-bold uppercase tracking-wider mb-2">
                Forgot Password
              </h2>
              <h3 className="text-3xl font-serif text-secondary font-normal">
                Recover Your Account
              </h3>
            </div>

            {/* Right Form */}
            <div className="login-box">
              <h2 className="login-title">Reset Password</h2>

              {message && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md text-sm">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="inline mr-1" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Reset Link
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-700">
                  Remember your password?{' '}
                  <Link to="/login" className="text-primary font-bold hover:underline transition-colors">
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/90 text-white py-2 text-center text-xs w-full backdrop-blur-sm mt-auto">
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

export default ForgotPassword;
