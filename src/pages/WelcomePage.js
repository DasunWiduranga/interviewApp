import React from "react";
import { useLocation } from "react-router-dom";
import "./css/WelcomePage.css";

const WelcomePage = () => {
  const location = useLocation();
  const username = location.state && location.state.username;

  return (
    <div className="container">
      <div className="welcome-header">
        <h2>Welcome, {username}!</h2>
        {/* Other header elements if needed */}
      </div>
    </div>
  );
};

export default WelcomePage;
