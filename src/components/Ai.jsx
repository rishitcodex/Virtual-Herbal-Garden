import React from 'react';
import './AI.css';

const AI = () => {
  return (
    <div className="ai-container">
      <div className="ai-background-shape left"></div>
      <div className="ai-background-shape right"></div>
      
      <div className="ai-header">
        <div className="ai-logo">
          <div className="ai-logo-circle"></div>
          <div className="ai-logo-text">Vinayak</div>
        </div>
        <p className="ai-tagline">"Your Herbal Healing Companion." 🌿</p>
      </div>
      
      <div className="ai-content">
        <div className="ai-frame-container">
          <div className="ai-frame-decoration top-left"></div>
          <div className="ai-frame-decoration top-right"></div>
          <div className="ai-frame-decoration bottom-left"></div>
          <div className="ai-frame-decoration bottom-right"></div>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/PndUyCtIVk408vib0vmqO"
            width="100%"
            className="ai-iframe"
            frameBorder="0"
            title="AI Chatbot"
          ></iframe>
        </div>
      </div>
      
      <div className="ai-footer">
        <div className="ai-pulse"></div>
        <p>Powered by advanced AI technology</p>
      </div>
    </div>
  );
};

export default AI;