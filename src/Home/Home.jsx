import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css"; // Ensure this path is correct

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreClick = () => {
    navigate("/Ser"); // Navigate to the Explore page
  };

  return (
    <div>
      {/* Enhanced Fullscreen Section */}
      <div className="fullscreen-container">
        <div className="content">
          <h1 className="title">Discover Our Community Pulse</h1>
          <p className="description">
            Unlock the full potential of our platform and elevate your experience.
            Whether you’re exploring, connecting, or creating, we have tailored
            solutions to meet your needs. Let’s grow together.
          </p>
          <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
        </div>
        <div className="image-container">
          <img
            src="https://img.freepik.com/free-photo/indian-republic-day-celebration-digital-art-with-people_23-2151070652.jpg"
            alt="Community Development"
            className="image"
          />
        </div>
      </div>

      {/* Original Card Grid Section */}
      <div className="card-grid">
        <div className="card">
          <img
            src="https://media.licdn.com/dms/image/D5612AQFRglwxBMjoJg/article-cover_image-shrink_600_2000/0/1695875036903?e=2147483647&v=beta&t=syT2AjDvU5VXdnARCZNZOAYJj0UnKaPeTEUlGxgL76Q"
            alt="Card 1"
            className="card-image"
          />
          <p className="card-text">
            💡 Got an idea to brighten your community? The Stronger Communities
            Programme (SCP) offers grants that bring social benefits to local communities.
          </p>
        </div>
        <div className="card">
          <img
            src="https://img.freepik.com/premium-photo/group-people-are-gathered-around-table-with-blue-background-with-man-suit_1302776-3965.jpg?semt=ais_hybrid"
            alt="Card 2"
            className="card-image"
          />
          <p className="card-text">
          💡 Community development is a multifaceted process aimed at improving the well-being and quality of life for residents. It involves initiatives to enhance local infrastructure, education, healthcare, and employment opportunities. 
          </p>
        </div>
        <div className="card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQGHTwCq9Jj6dQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695020187979?e=2147483647&v=beta&t=ca9eZxJUZrcNujXE_nvvwCJbgLP9TnwIjTGUGAFKTC0"
            alt="Card 3"
            className="card-image"
          />
          <p className="card-text">
          💡 By fostering a sense of community, promoting sustainable practices, and encouraging civic participation, community development helps create a more resilient and cohesive society.
          </p>
        </div>
        <div className="card">
          <img
            src="https://cdn.create.vista.com/api/media/small/7606927/stock-photo-quiet-suburban-street"
            alt="Card 4"
            className="card-image"
          />
          <p className="card-text">
          💡A new plan outlines the Indian Government's approach to drought for
            the next 5 years. Read the plan to learn how farmers are supported...
          </p>
        </div>
      </div>

      {/* Original New Image Section */}
      <div className="new-image-section">
        <img
          src="https://www.csrmandate.org/wp-content/uploads/2022/11/Main-photo-aa.png"
          alt="Aerial View"
          className="new-image"
        />
        <div className="new-image-text">
          <p>
          Community development is a multifaceted process aimed at improving the well-being and quality of life for residents. It involves initiatives to enhance local infrastructure, education, healthcare, and employment opportunities. By fostering a sense of community, promoting sustainable practices, and encouraging civic participation, community development helps create a more resilient and cohesive society. Through collaborative efforts, communities can address challenges, leverage local resources, and achieve long-term growth and prosperity.
          </p>
          <p>
          Community development fosters sustainable growth and enhances residents' quality of life. It promotes social cohesion and resilience through collective efforts and resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
