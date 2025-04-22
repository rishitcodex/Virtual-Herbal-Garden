import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg2 bg-cover bg-fixed" style={{ backgroundImage: "url('./public/images/bg2.jpg')" }}>
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="glass-effect p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your one-stop solution for all your needs. Join us today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
              <p className="text-gray-300">Description of the first amazing feature of our platform.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
              <p className="text-gray-300">Description of the second amazing feature of our platform.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
              <p className="text-gray-300">Description of the third amazing feature of our platform.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 