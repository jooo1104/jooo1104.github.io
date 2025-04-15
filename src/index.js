import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Portfolio.css';

function Portfolio() {
  const [currentView, setCurrentView] = useState('home');

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
              <p>Email: <a href="mailto:jonel@example.com">jonel@example.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonel</a></p>
              <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/jonel</a></p>
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
      {/* Navigation */}
      <nav className="simple-nav">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('about'); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('projects'); }}>Projects</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('tools'); }}>Tools</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('role'); }}>My Role</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('contact'); }}>Contacts</a>
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