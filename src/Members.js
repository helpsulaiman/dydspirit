import React, { useState } from 'react';
import './members.css';

const Members = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sulaiman Shabir",
      role: "Group Lead",
      image: "https://i.imgur.com/wZpeRTo.png",
      description: "moew meow",
      socials: {
        linkedin: "https://linkedin.com/in/helpsulaiman",
        instagram: "https://instagram.com/helpsulaiman",
        github: "https://github.com/helpsulaiman"
      }
    },
    {
      id: 2,
      name: "Tehniyah Rayaz",
      role: "Writer, Planner and Everything else",
      image: "/images/jane.jpg",
      description: "Creative, extremely creative"
    },
    {
      id: 3,
      name: "Furqan Fayaz",
      role: "Professional Muncher",
      image: "/images/mike.jpg",
      description: "Food consumption specialist"
    },
    {
      id: 4,
      name: "Anha Nabi",
      role: "-",
      image: "/images/sarah.jpg",
      description: "-"
    },
    {
      id: 5,
      name: "Farees Ahmed",
      role: "Friends with Sulaiman",
      image: "/images/alex.jpg",
      description: "Idk tbh"
    }
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="members-container">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="member-card fade-in"
            onClick={() => handleCardClick(member)}
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="modal-header">
              <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
              <h2>{selectedMember.name}</h2>
              <h3>{selectedMember.role}</h3>
            </div>
            <div className="social-links">
              {selectedMember.socials?.linkedin && (
                <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              )}
              {selectedMember.socials?.instagram&& (
                <a href={selectedMember.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                  Instagram
                </a>
              )}
              {selectedMember.socials?.github && (
                <a href={selectedMember.socials.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
