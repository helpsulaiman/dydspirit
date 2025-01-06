import React, { useState } from 'react';
import { Projects } from './Projects';
import { Gallery } from './Gallery';
import { Navigation } from './Navigation';
import { ContactUs } from './Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return <Projects />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <main style={{
            height: '100vh',
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
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              DYD's Spirit
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#34495e',
              maxWidth: '800px',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Design Your Degree is a flagship degree based on NEP 2020.
              We are the Spirit of this degree.
            </p>
          </main>
        );
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Navigation */}
      <Navigation onTabChange={setActiveTab} activeTab={activeTab} />
      
      {/* Content Area */}
      {renderContent()}
    </div>
  );
}

export default App;