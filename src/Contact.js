import React from "react";

const contactInfo = [
  {
    type: "Email",
    value: "dydsspirit@gmail.com",
    icon: "📧",
    href: "mailto:dydsspirit@gmail.com"
  },
  {
    type: "Phone",
    value: "+91 97970 06187",
    icon: "📞",
    href: "tel:+919797006187"
  }
];

export function ContactUs() {
    return (
      <section id="contact" style={{ 
        padding: "40px",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h2 style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          color: "#2c3e50"
        }}>Contact Us</h2>
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#34495e",
          marginBottom: "2rem"
        }}>
          Here are ways to contact us:
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '30px' 
        }}>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '30px',
                borderRadius: '15px',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                minWidth: '300px',
                textDecoration: 'none',
                display: 'block',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px'
              }}>
                {info.icon}
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#2c3e50',
                marginBottom: '10px'
              }}>
                {info.type}
              </h3>
              <p style={{ 
                fontSize: '1.4rem', 
                color: '#34495e',
                fontWeight: '500'
              }}>
                {info.value}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
}
