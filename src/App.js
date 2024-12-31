import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <h2>Welcome to DYD's Spirit's Official Website</h2>
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
    <section id="projects">
      <h2>Our Projects</h2>
      <p>
        Here, you can find an overview of the various projects we have worked
        on. Stay tuned for updates!
      </p>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <p>
        Take a look at some of the images showcasing our projects and fieldwork.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or collaboration ideas!
      </p>
      <p>Email: dydspirit@gmail.com</p>
      <p>Phone: +91 9797006187</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>DYD's Spirit</h1>
          <p>
            <i>"Thinking Beyond The Normal"</i>
          </p>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/gallery"> Gallery </Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 DYD's Spirit. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;