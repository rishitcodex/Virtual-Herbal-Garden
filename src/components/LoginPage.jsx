import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLock, FaUser } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


// Initialize EmailJS with your public key
emailjs.init("OpvjwIUHlvv_a78uz");

const LoginPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if (step === 1) {
      // Here you would typically verify the email and password with your backend
      // For demo purposes, we'll just send an OTP
      await sendOtp();
    } else {
      const enteredOtp = otp.join('');
      if (enteredOtp === storedOtp) {
        try {
          // Here you would typically make an API call to log in the user
          await new Promise(resolve => setTimeout(resolve, 1000));
          navigate('/dashboard');
        } catch (err) {
          setError('Login failed. Please try again.');
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
      const newOtp = generateOtp();
      setStoredOtp(newOtp);

      // Calculate expiration time (15 minutes from now)
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 15);

      const templateParams = {
        email: formData.email,
        passcode: newOtp,
        time: expirationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

          <Link to="/register" className="btn-primary">
            Create Account
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/public/images/bg2.jpg)' }}>        
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Box on Left */}
            <div className="p-5 rounded-xl text-secondary font-bold glass-effect">
              <h2 className="text-justify font-serif text-6xl font-bold uppercase tracking-wider mb-1">
                Welcome Back
              </h2>
              <h3 className="mt-1 font-serif text-3xl font-normal text-secondary">
                Continue Your Journey to Holistic Wellness
              </h3>
            </div>

            {/* Login Box Section */}
            <div className="glass-effect p-5 rounded-xl shadow-lg animate-fade-in">
              <h2 className="text-center text-xl mb-4">
                {step === 1 ? 'Login' : 'Verify Email'}
              </h2>
              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <>
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-bold mb-1">
                        <FaEnvelope className="inline mr-1" /> Email ID:
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

                    <div className="mb-4">
                      <label htmlFor="password" className="block font-bold mb-1">
                        <FaLock className="inline mr-1" /> Password:
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        className="input-field"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending OTP...' : 'Login'}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-4 text-center">
                      <p className="text-sm text-gray-600">
                        Enter the 4-digit OTP sent to {formData.email}
                      </p>
                    </div>
                    <div className="mb-4 flex justify-center gap-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          name={`otp-${index}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          maxLength="1"
                          className="w-12 h-12 text-center text-xl border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      ))}
                    </div>
                    <div className="mb-4 text-center">
                      <p className="text-sm text-gray-600">
                        {timer > 0 ? (
                          `Resend OTP in ${timer}s`
                        ) : (
                          <button
                            type="button"
                            onClick={resendOtp}
                            className="text-primary hover:underline"
                          >
                            Resend OTP
                          </button>
                        )}
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={loading || otp.join('').length !== 4}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                  </>
                )}
              </form>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-700">
                  Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline transition-colors">Register</Link>
                </p>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline transition-colors mt-2 block">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
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

export default LoginPage;