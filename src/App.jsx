import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import './styles/base.css';
import Settings from './components/Settings';
import AI from './components/Ai';
import './styles/globals.css';
import NurseryPage from './components/NurseryPage';
import HerbalShop from './components/HerbalShop';
import PrivacyPolicy from './components/Privacy Policy';
import ContactUs from './components/ContactUs';
import ForgotPassword from './components/ForgotPassword';
import About from './components/About'; // ✅ Real About component

// Placeholder components for other static routes
const Services = () => <div className="min-h-screen p-8">Services Page</div>;
const Pages = () => <div className="min-h-screen p-8">Pages</div>;
// const About = () => <div className="min-h-screen p-8">About Page</div>; 
// const Privacy = () => <div className="min-h-screen p-8">Privacy Policy Page</div>;

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
          <Route path="/products" element={<HerbalShop />} />
          <Route path="/services" element={<AI />} />
          <Route path="/about" element={<About />} /> {/* ✅ Using actual About component */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
