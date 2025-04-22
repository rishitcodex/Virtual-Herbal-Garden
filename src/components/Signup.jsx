import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = () => {
    if (email && password) {
      // Simulated fetch call
      setMessage('OTP sent to your email');
    } else {
      setMessage('Please enter email and password.');
    }
  };

  const handleVerifyOtp = () => {
    if (otp && email && password) {
      // Simulated fetch call
      setMessage('OTP verified successfully');
      setIsVerified(true);
    } else {
      setMessage('Please enter OTP.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (isVerified) {
      alert(`Signup successful for ${email}`);
      // You can redirect the user or perform other actions here
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <header>
        <div className="w-full bg-green-600 text-white text-sm">
          <div className="flex justify-between items-center p-2">
            <div className="header-info">
              <span className="mr-4"><i className="fas fa-map-marker-alt"></i> Bennett University, Greater Noida, PIN - 201310</span>
              <span className="mr-4"><i className="fas fa-envelope"></i> projectayush007@gmail.com</span>
              <span><i className="fas fa-phone-alt"></i> +91-8368570100</span>
            </div>
            <div className="header-icons">
              <a href="https://www.facebook.com/profile.php?id=61574951247607" className="text-white ml-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white ml-2"><i className="fab fa-instagram"></i></a>
              <a href="www.linkedin.com/in/ayush-project-743546359" className="text-white ml-2"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/channel/UCnNFon3CLF8_PdKxxcJH2PQ" className="text-white ml-2"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white">
          <div className="flex flex-col justify-center items-center text-center p-2 border-3 border-green-600 rounded-lg bg-opacity-5 w-full max-w-md mx-auto">
            <h1 className="text-2xl text-green-600 m-0">AYUSH</h1>
            <p className="text-sm text-gray-600 m-0">The Virtual Herbal Garden</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="mt-5 mb-12 bg-white p-5 rounded-xl shadow-md max-w-md w-full animate-fadeIn">
          <h2 className="text-center">Create a new account</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-1">
                <i className="fas fa-envelope"></i> Email ID:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-1 mt-1 border border-gray-300 rounded h-8"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold mb-1">
                <i className="fas fa-lock"></i> Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-1 mt-1 border border-gray-300 rounded h-8"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-1/5 mb-4 p-1 bg-green-900 border-none text-white text-xs rounded-lg cursor-pointer transition-all duration-300 font-medium hover:bg-green-600 hover:scale-105"
            >
              Send OTP
            </button>
          
            <div className="mb-4">
              <label htmlFor="otp" className="block font-bold mb-1">
                <i className="fas fa-key"></i> Enter OTP:
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP"
                className="w-full p-1 mt-1 border border-gray-300 rounded h-8"
                required
              />
            </div>  
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-1/5 mb-4 p-1 bg-green-900 border-none text-white text-xs rounded-lg cursor-pointer transition-all duration-300 font-medium hover:bg-green-600 hover:scale-105"
            >
              Verify OTP
            </button>
            <button
              type="submit"
              disabled={!isVerified}
              className="w-full mb-4 p-2 bg-green-900 border-none text-white text-base rounded-lg cursor-pointer transition-all duration-300 font-medium hover:bg-green-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign Up
            </button>
          </form>
          <div id="message" className="text-center text-sm">{message}</div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-2 text-center text-xs w-full">
        <p>© 2025 Virtual Herbal Garden | <a href="" className="text-green-600 mx-1 hover:underline">Terms and Conditions & Privacy Policy</a> | <a href="#" className="text-green-600 mx-1 hover:underline">Contact Us</a></p>
      </footer>
    </div>
  );
};

export default SignupPage;