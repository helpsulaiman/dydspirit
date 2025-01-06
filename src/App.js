import React, { useState } from 'react';
//import { Projects } from './Projects';
import { Gallery } from './Gallery';
import { Navigation } from './Navigation';
import { Contact } from './Contact';
import Projects from './Projects';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const Footer = () => (
    <div style={{
      padding: '10px',
      textAlign: 'center',
      color: '#666',
      fontSize: '0.9rem',
      marginTop: 'auto'
    }}>
       made by <a href="https://linktr.ee/helpsulaiman" target="_blank" rel="noopener noreferrer">@helpsulaiman</a>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return <Projects />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <main style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px'
          }}>
            <h1 style={{
              fontSize: '4rem',
              color: '#2c3e50',
              marginBottom: '0.7rem',
              fontWeight: 'bold'
            }}>
              DYD's Spirit
            </h1>
            <h1 style={{
              fontSize: '1.7rem',
              color: '#2c3e50',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              <i>"Thinking Beyond The Normal"</i>
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#34495e',
              maxWidth: '800px',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Design Your Degree is a flagship degree based on NEP 2020.
            It is a unique degree that offers a blend of traditional and modern education.
            The degree is designed to prepare students for the future of work.
            The degree is offered by the University of Kashmir.
            </p>
          </main>
        );
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',  // Add this
      flexDirection: 'column'  // Add this
    }}>
       {/* Banner */}
       <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 100,
        padding: '3rem 0'
      }}>
      {/* Navigation */}
      <Navigation onTabChange={setActiveTab} activeTab={activeTab} />
      </div>
      {/* Content Area with top padding to prevent overlap */}
      <div style={{
        paddingTop: '70px' // Adjust this value based on your navigation height
      }}></div>

      {/* Content Area */}
      {renderContent()}
      <Footer />  {/* Add the Footer component here */}
    </div>
  );
}

export default App;