import React from "react";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="project-info">
        <h1 className="title">About Weather Predictor</h1>
        <p className="description">
          Weather Predictor is an innovative platform designed to provide accurate and real-time weather predictions for users around the globe. Utilizing cutting-edge machine learning algorithms and historical weather data, this application ensures that you stay informed and prepared for any weather conditions.
        </p>
      </div>
      <div className="author-info">
        <h2 className="section-title">About the Author</h2>
        <div className="author-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Author"
            className="author-image"
          />
          <div className="author-details">
            <h3 className="author-name">Karthik Kyama</h3>
            <p className="author-role">Lead Developer & Weather Enthusiast</p>
            <p className="author-bio">
              Alex is a passionate software developer with expertise in
              predictive analytics and UI/UX design. With years of experience
              in building user-friendly applications, Alex strives to bridge
              the gap between complex algorithms and everyday users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
