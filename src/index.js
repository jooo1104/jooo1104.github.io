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
            <h2>Future Software Engineer || Future Quality Automation Engineer</h2>
            
            <button className="resume-button">
              View Resume & Cover Letter
            </button>

            <p className="description">
            Driven by a passion for building reliable, high-quality software that not only works — but works well.
             Skilled in frontend development with React and modern CSS, and experienced in integrating REST APIs. 
             Currently expanding into full-stack development and test automation to strengthen my ability to build and ensure robust,
             scalable applications. I’m especially interested in creating seamless user experiences while maintaining high standards 
             of code quality, testing, and performance.
            </p>

            <button 
              className="work-button"
              onClick={() => setCurrentView('projects')}
            >
              View My Work
            </button>
          </>
        );
      
      case 'about':
        return (
          <div className="about-view">
            <div className="about-content">
              <p>
                Hi! I'm Jonel Almazan Castillo. 
                I'm a fresh graduate with a Bachelor's degree in IT, 
                Major in Network Technology from Batangas State University, 
                eager to launch my career in software quality assurance and automation.
              </p>
              
              <h3>My Journey into IT </h3>
              <p>
                During my studies, I developed a strong foundation in network systems, programming, 
                and troubleshooting. Now, I'm channeling that technical expertise into 
                 software testing, where I combine my analytical mindset with a 
                passion for ensuring seamless user experiences. Though new to the field, I'm diving 
                deep into manual testing principles and automation tools 
                to build robust testing strategies.
              </p>
              <h3>My Values & Passion</h3>
              <ul>
                <li><strong>Curiosity</strong>: I thrive on dissecting how systems work and where they can break.</li>
                <li><strong>Adaptability</strong>: My network tech background taught me to solve problems flexibly.</li>
                <li><strong>Growth</strong>: I'm committed to upskilling in automation frameworks and best practices.</li>
              </ul>
              
              <h3>Fun Fact About me</h3>
              <p>
                I love tackling challenges head-on—whether it's debugging code, optimizing networks, 
                or learning a new tool over coffee!
              </p>
            </div>
          </div>
        );

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
        case 'tools':
          return (
            <div className="tools-view">
              <h2>Programming Languages</h2>
              <div className="tools-grid">
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
              </div>
        
              <h2>Development Tools</h2>
              <div className="tools-grid">
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                  <span>VS Code</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>GitHub</span>
                </div>
              </div>
        
              <h2>IoT & Embedded Systems</h2>
              <div className="tools-grid">
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" />
                  <span>Arduino</span>
                </div>
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi" />
                  <span>Raspberry Pi</span>
                </div>
              </div>
        
              <h2>Backend Testing</h2>
              <div className="tools-grid">
                <div className="tool-card">
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                  <span>Postman</span>
                </div>
                <div className="tool-card">
                  <img src="https://jmeter.apache.org/images/logo.svg" alt="JMeter" />
                  <span>JMeter</span>
                </div>
              </div>
        
              <h2>UI Testing</h2>
              <div className="tools-grid">
                <div className="tool-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" />
                  <span>Selenium</span>
                </div>
                <div className="tool-card">
                  <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="Jest" />
                  <span>Jest</span>
                </div>
              </div>
            </div>
          );
      
      default:
        return (
          <>
            <h1>{currentView.charAt(0).toUpperCase() + currentView.slice(1)}</h1>
            <p className="description">This section is under construction.</p>
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