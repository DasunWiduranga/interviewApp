import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleRegistration = () => {
    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email or username already exists
    const isEmailExists = existingUsers.some((user) => user.email === email);
    const isUsernameExists = existingUsers.some(
      (user) => user.username === username
    );

    if (isEmailExists) {
      alert("Email already exists");
      return;
    }

    if (isUsernameExists) {
      alert("Username already exists");
      return;
    }

    if (password !== cpassword) {
      alert("Password didn't match!");
      return;
    }

    // Add the new user to the array
    const newUser = { email, username, password };
    const updatedUsers = [...existingUsers, newUser];

    // Save the updated user array in local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleRegistration}>
        <h2>Sign Up</h2>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label>Password Again:</label>
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
          />
        </div>
        <div className="tc">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
              required
            />
            I agree with the <span className="purple">term of services</span>
          </label>
        </div>
        <button type="submit">Register</button>
        <div className="login-link">
          <p>
            Already a member? <Link to="/">Login here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
