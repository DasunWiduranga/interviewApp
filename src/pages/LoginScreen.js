import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with matching credentials
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/welcome", { state: { username } });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-screen">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btns">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
