import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import promoVideo from "../assets/promo.mp4";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Visitor Name Personalization State
  const [visitorName, setVisitorName] = useState("");
  const [inputName, setInputName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check local storage for existing visitor name
    const savedName = localStorage.getItem("techfest_visitor");
    if (savedName) {
      setVisitorName(savedName);
    } else {
      setShowModal(true);
    }

    // Fetch API Announcements (Experiment Requirement 6)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load live announcements");
        setLoading(false);
      });
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      localStorage.setItem("techfest_visitor", inputName);
      setVisitorName(inputName);
      setShowModal(false);
    }
  };

  return (
    <div className="home-container">
      {/* Personalized Welcome Banner */}
      {visitorName && (
        <div className="welcome-banner">
          Welcome back, <span>{visitorName}</span>! Ready for TechFest 2026?
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1 className="glitch-text">Accelerating Innovation</h1>
        <p className="hero-subtitle">
          The Ultimate Battlefield of Minds & Machines | October 14–16, 2026
        </p>
        <Link to="/register" className="btn btn-primary">
          Secure Your Pass
        </Link>
      </section>

      {/* Welcome & Media Section */}
      <section id="welcome" className="section-block">
        <div className="grid grid-2">
          <div>
            <h2>Welcome to TechFest 2026</h2>
            <p>
              Welcome to our campus's premier annual engineering design and computing exposition. 
              TechFest 2026 unifies developers, builders, and visionaries across nationwide 
              universities for three intense days of optimization hackathons, panel discussions, 
              and technical showdowns.
            </p>
            <p>
              Listen to our structural overview or check out the promo video to see what awaits you this year!
            </p>
          </div>
          <div className="media-container">
            <video controls >
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <audio controls>
              <source src="assets/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="section-block">
        <h2>Highlights</h2>
        <div className="grid grid-3">
          <article className="card">
            <h3>36-Hour Hackathon</h3>
            <p>
              Build clean, practical solutions for systemic green-energy and urban challenges. 
              Monitored by enterprise engineering mentors.
            </p>
          </article>
          <article className="card">
            <h3>Robo-Wars</h3>
            <p>
              Custom high-torque machines face off in custom mechanical arenas designed for structural 
              endurance testing.
            </p>
          </article>
          <article className="card">
            <h3>Expert Keynotes</h3>
            <p>
              Engage directly with leading technical research figures exploring real-world implementations 
              of systems scale.
            </p>
          </article>
        </div>
      </section>

      {/* Urgent Announcements & API Feed Section */}
      <section id="announcements" className="section-block">
        <h2>Urgent & Live Announcements</h2>
        <ul className="announcement-list">
          <li>
            <strong>Early Bird:</strong> First 100 registrants secure access to the advanced tooling workshop at zero cost.
          </li>
          <li>
            <strong>Hardware Submissions:</strong> Schematic blueprints for mechanical events must clear peer review by October 1st.
          </li>
          <li>
            Accommodation requests can be processed right inside the online portal.
          </li>
        </ul>

        <div className="api-feed">
          <h3>Live Bulletin Stream</h3>
          {loading && <p className="loading-text">Loading stream...</p>}
          {error && <p className="error-msg">{error}</p>}
          {!loading && !error && (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="api-item">
                  <span className="bullet-tag">UPDATE</span> {post.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Name Entry Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Welcome to TechFest 2026!</h3>
            <p>Please enter your name to personalize your experience:</p>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;