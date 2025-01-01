import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section id="home" style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome to DYD's Spirit</h2>
      <p>
        We are a group of innovators dedicated to thinking beyond the normal.
        Explore our projects, view our work, and connect with us to learn more
        about what we do.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2>Our Projects</h2>
      <p>
        Here, you can find an overview of the various projects we have worked
        on. Stay tuned for updates!
      </p>
    </section>
  );
}

function Gallery() {
  const images = [
    'https://github.com/helpsulaiman/dydsspirit/blob/main/assets/gallery/image1.jpeg',
];

return (
    <section id="gallery" style={{ padding: '20px' }}>
        <h2>Gallery</h2>
        <p>
        Take a look at some of the images showcasing our projects and fieldwork.
      </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
            ))}
        </div>
    </section>
);
  return (
    <section id="gallery" style={{ padding: "20px" }}>
      <h2>Gallery</h2>
      <p>
        Take a look at some of the images showcasing our projects and fieldwork.
      </p>
      <img
          src={`${process.env.PUBLIC_URL}/assets/gallery/image1.jpeg`}
          alt="Example"
        />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or collaboration ideas!
      </p>
      <p>Email: dydspirit@gmail.com</p>
      <p>Phone: +91-9797006187</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#f0f8ff",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          <h1>DYD's Spirit</h1>
          <p><i>"Thinking Beyond The Normal"</i></p>
        </header>
        <nav
          style={{
            backgroundColor: "#444",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          <Link
            to="/"
            style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            to="/projects"
            style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer
          style={{
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <p>&copy; 2024 DYD's Spirit. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;