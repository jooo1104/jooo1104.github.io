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
      case 'projects':
        return (
          <div className="projects-view">
            <h1>My Projects</h1>
            <div className="projects-list">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>A responsive portfolio built with React</p>
              </div>
              <div className="project-card">
                <h3>Task Manager App</h3>
                <p>A productivity application with React</p>
              </div>
              <div className="project-card">
                <h3>Weather Dashboard</h3>
                <p>Weather application using API integration</p>
              </div>
            </div>
            <button 
              className="back-button"
              onClick={() => setCurrentView('home')}
            >
              Back to Home
            </button>
          </div>
        );
      case 'contact':
        return (
          <div className="contact-view">
            <h1>Contact Me</h1>
            <div className="contact-details">
              <p>Email: <a href="mailto:akosijonel04@gmail.com">akosijonel04@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/castillo-jonel-almazan-7a29091b9/" target="_blank" rel="noopener noreferrer">linkedin.com/in/castillo-jonel-almazan</a></p>
              <p>GitHub: <a href="https://github.com/jooo1104" target="_blank" rel="noopener noreferrer">github.com/jooo1104</a></p>
            </div>
            <button 
              className="back-button"
              onClick={() => setCurrentView('home')}
            >
              Back to Home
            </button>
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