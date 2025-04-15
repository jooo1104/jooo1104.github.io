import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Portfolio.css';

function Portfolio() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return (
          <>
            <h1>Jonel Almazan Castillo</h1>
            <h2>Web Developer | React Enthusiast | UI/UX Designer</h2>
            
            <button className="resume-button">
              View Resume & Cover Letter
            </button>

            <p className="description">
              Passionate about creating beautiful, functional web applications with clean code 
              and intuitive user interfaces. Experienced in frontend development using React, 
              building responsive designs with modern CSS, and working with REST APIs. Currently 
              exploring full-stack development to expand my expertise.
            </p>

            <button 
              className="work-button"
              onClick={() => setCurrentView('projects')}
            >
              View My Work
            </button>
          </>
        );
// In your index.js, update the projects case in the renderContent function:
case 'projects':
  return (
    <div className="projects-view">
      <div className="projects-list">
        <div className="project-card">
          <h3>BOAT-A-LITY: IoT Water Quality Monitor</h3>
          <p>An IoT-based remote-controlled boat system for monitoring water quality in fish cages</p>
          <div className="project-links">
            <a 
              href="https://boat-a-lity.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-button"
            >
              View Project
            </a>
          </div>
          <div className="project-details">
            <h4>Key Features:</h4>
            <ul>
              <li>Monitors dissolved oxygen, pH, and temperature in real-time</li>
              <li>500m operational range with remote control</li>
              <li>Cloud data storage and web-based analytics</li>
              <li>GPS mapping for location tracking</li>
              <li>Helps prevent fish kills through proactive monitoring</li>
            </ul>
          </div>
        </div>
        {/* Rest of your project cards */}
      </div>
      
    </div>
  );
  case 'contact':
    return (
      <div className="contact-view">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-details">
              <p>Email: <a href="mailto:akosijonel04@gmail.com">akosijonel04@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/castillo-jonel-almazan-7a29091b9/" target="_blank" rel="noopener noreferrer">linkedin.com/in/castillo-jonel-almazan</a></p>
              <p>GitHub: <a href="https://github.com/jooo1104" target="_blank" rel="noopener noreferrer">github.com/jooo1104</a></p>
            </div>
          </div>
        </div>
      </div>
    );  
      default:
        return (
          <>
            <h1>{currentView.charAt(0).toUpperCase() + currentView.slice(1)}</h1>
            <p className="description">This section is under construction.</p>
            <button 
              className="back-button"
              onClick={() => setCurrentView('home')}
            >
              Back to Home
            </button>
          </>
        );
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation - Updated with active state */}
      <nav className="simple-nav">
        <button 
          className={`nav-button ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => handleNavigation('home')}
        >
          Home
        </button>
        <button 
          className={`nav-button ${currentView === 'about' ? 'active' : ''}`}
          onClick={() => handleNavigation('about')}
        >
          About
        </button>
        <button 
          className={`nav-button ${currentView === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavigation('projects')}
        >
          Projects
        </button>
        <button 
          className={`nav-button ${currentView === 'tools' ? 'active' : ''}`}
          onClick={() => handleNavigation('tools')}
        >
          Tools
        </button>
        <button 
          className={`nav-button ${currentView === 'role' ? 'active' : ''}`}
          onClick={() => handleNavigation('role')}
        >
          My Role
        </button>
        <button 
          className={`nav-button ${currentView === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavigation('contact')}
        >
          Contact
        </button>
      </nav>

      {/* Main Content */}
      <main className="portfolio-content">
        {renderContent()}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);