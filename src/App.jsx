import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import './styles/base.css';
import Settings from './components/Settings';
import './styles/globals.css';
import NurseryPage from './components/NurseryPage';
import HerbalShop from './components/HerbalShop'; // Make sure this path is correct
// import './ComponentName.css';

// Placeholder components for routes
const Services = () => <div className="min-h-screen p-8">Services Page</div>;
const Pages = () => <div className="min-h-screen p-8">Pages</div>;
const About = () => <div className="min-h-screen p-8">About Page</div>;
const ForgotPassword = () => <div className="min-h-screen p-8">Forgot Password Page</div>;
const Privacy = () => <div className="min-h-screen p-8">Privacy Policy Page</div>;
const Contact = () => <div className="min-h-screen p-8">Contact Us Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/nurseries" element={<NurseryPage />} />
          <Route path="/products" element={<HerbalShop />} /> {/* Added products route */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;