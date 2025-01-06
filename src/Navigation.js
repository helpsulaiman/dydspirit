import React from 'react';

export const Navigation = ({ onTabChange, activeTab }) => {
  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: '3px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          cursor: activeTab !== 'home' ? 'pointer' : 'default'
        }}
        onClick={() => activeTab !== 'home' && onTabChange('home')}
      >
        <img 
          src="https://i.imgur.com/wZpeRTo.png" // Add your Imgur link here
          alt="Kashmir University Logo"
          style={{
            height: '80px',
            width: '80px',
            objectFit: 'contain'
          }}
        />
        <div style={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#2c3e50',
        }}>
          DYD's Spirit
        </div>
      </div>
      <nav style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => onTabChange('projects')}
          style={{
            padding: '12px 24px',
            height: '50px',
            backgroundColor: activeTab === 'projects' ? '#2c3e50' : '#fff',
            color: activeTab === 'projects' ? '#fff' : '#2c3e50',
            border: '2px solid #2c3e50',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Projects
        </button>
        <button 
          onClick={() => onTabChange('gallery')}
          style={{
            padding: '12px 24px',
            height: '50px',
            backgroundColor: activeTab === 'gallery' ? '#2c3e50' : '#fff',
            color: activeTab === 'gallery' ? '#fff' : '#2c3e50',
            border: '2px solid #2c3e50',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Gallery
        </button>
        <button 
          onClick={() => onTabChange('contact')}
          style={{
            padding: '12px 24px',
            height: '50px',
            backgroundColor: activeTab === 'contact' ? '#2c3e50' : '#fff',
            color: activeTab === 'contact' ? '#fff' : '#2c3e50',
            border: '2px solid #2c3e50',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Contact Us
        </button>
      </nav>
    </>
  );
};
