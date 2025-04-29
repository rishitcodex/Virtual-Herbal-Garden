import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLock, FaUser, FaCheck } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './RegisterPage.css';
import { LoadScript } from '@react-google-maps/api';

// Initialize EmailJS with your public key
emailjs.init("OpvjwIUHlvv_a78uz"); // Replace with your EmailJS public key

const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [storedOtp, setStoredOtp] = useState('');

  // Generate a random 4-digit OTP
  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.querySelector(`input[name=otp-${index - 1}]`);
      if (prevInput) prevInput.focus();
    }
  };

  const sendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const newOtp = generateOtp();
      setStoredOtp(newOtp);

      // Calculate expiration time (15 minutes from now)
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 15);

      // Send OTP via EmailJS
      const templateParams = {
        email: formData.email,
        passcode: newOtp,
        time: expirationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      console.log('Sending OTP with params:', {
        serviceId: 'service_ofhoja1',
        templateId: 'template_itit7h7',
        templateParams
      });

      const response = await emailjs.send(
        'service_ofhoja1',
        'template_itit7h7',
        templateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setOtpSent(true);
        setStep(2);
        // Start timer
        const interval = setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        throw new Error('Failed to send OTP. Please try again.');
      }
    } catch (err) {
      console.error('Detailed error:', err);
      setError(`Failed to send OTP: ${err.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (step === 1) {
      await sendOtp();
    } else {
      const enteredOtp = otp.join('');
      if (enteredOtp === storedOtp) {
        try {
          // Here you would typically make an API call to register the user
          await new Promise(resolve => setTimeout(resolve, 1000));
          navigate('/dashboard');
        } catch (err) {
          setError('Registration failed. Please try again.');
        }
      } else {
        setError('Invalid OTP. Please try again.');
      }
    }
    setLoading(false);
  };

  const resendOtp = async () => {
    if (timer > 0) return;
    setLoading(true);
    setError('');
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const newOtp = generateOtp();
      setStoredOtp(newOtp);

      // Calculate expiration time (15 minutes from now)
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 15);

      const templateParams = {
        to_email: formData.email,
        passcode: newOtp,
        time: expirationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        from_name: 'AYUSH',
        subject: 'AYUSH Registration OTP'
      };

      console.log('Resending OTP with params:', {
        serviceId: 'service_ofhoja1',
        templateId: 'template_itit7h7',
        templateParams
      });

      const response = await emailjs.send(
        'service_ofhoja1',
        'template_itit7h7',
        templateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setTimer(60);
        const interval = setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        throw new Error('Failed to resend OTP. Please try again.');
      }
    } catch (err) {
      console.error('Detailed error:', err);
      setError(`Failed to resend OTP: ${err.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      {/* Header Section */}
      <header className="register-header">
        <div className="header-top">
          <div className="header-content">
            <div className="header-info">
              <span>
                <FaMapMarkerAlt />
                Bennett University, Greater Noida, PIN - 201310
              </span>
              <span>
                <FaEnvelope />
                support.ayush@gmail.com
              </span>
              <span>
                <FaPhoneAlt />
                +91-8368570100
              </span>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="header-content">
        <div className="text-center border-2 border-primary rounded-lg p-2 shadow-md inline-block glass-effect">
            <h1 className="text-2xl font-bold text-primary m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>

          {/* <nav>
                      <ul className="flex m-0 p-0 mt-10">
                      <li className="mx-4 relative after:absolute after:-right-2 after:top-0 after:bottom-0 after:w-px after:bg-primary-dark">
                          <Link to="/Home" className="nav-link">Home</Link>
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
                    </nav> */}

          <Link to="/login" className="btn-primary">
            Already Have an Account?
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="register-main">
        <div className="register-content">
          <div className="register-grid">
            {/* Text Box on Left */}
            <div className="welcome-box">
              <h2 className="welcome-title">
                Join AYUSH
              </h2>
              <h3 className="welcome-subtitle">
                Begin Your Journey to Holistic Wellness
              </h3>
            </div>

            {/* Registration Box Section */}
            <div className="register-box">
              <h2 className="form-title">
                {step === 1 ? 'Create Account' : 'Verify Email'}
              </h2>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        <FaUser /> Full Name:
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <FaEnvelope /> Email ID:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        <FaPhoneAlt /> Phone Number:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        <FaLock /> Password:
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        <FaLock /> Confirm Password:
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                        className="input-field"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="verify-button"
                    >
                      {loading ? (
                        <>
                          <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending OTP...
                        </>
                      ) : 'Send OTP'}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="otp-container">
                      <p className="resend-text">
                        Enter the 4-digit OTP sent to <span className="text-primary">{formData.email}</span>
                      </p>
                    </div>
                    <div className="otp-inputs">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          name={`otp-${index}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          maxLength="1"
                          className="otp-input"
                          required
                        />
                      ))}
                    </div>
                    <div className="resend-container">
                      <p className="resend-text">
                        {timer > 0 ? (
                          <span className="resend-button">
                            <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Resend OTP in {timer}s
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={resendOtp}
                            className="resend-button"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Resend OTP
                          </button>
                        )}
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={loading || otp.join('').length !== 4}
                      className="verify-button"
                    >
                      {loading ? (
                        <>
                          <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <FaCheck />
                          Verify OTP
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>

              <div className="text-center mt-4">
                <p className="resend-text">
                  Already have an account? <Link to="/login" className="resend-button">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="register-footer">
        <p>
          © 2025 Virtual Herbal Garden |{' '}
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>{' '}
          |{' '}
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default RegisterPage; 