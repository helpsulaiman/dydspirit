import React from "react";

export function Projects() {
    return (
      <section id="projects" style={{ 
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
        }}>Our Projects</h2>
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#34495e",
          marginBottom: "2rem"
        }}>
          Here, you can find an overview of the various projects we have worked
          on. Stay tuned for updates!
        </p>
      </section>
    );
}
