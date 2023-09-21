import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Please enter your email address.";
    }
    if (!formData.password) {
      validationErrors.password = "Please enter your password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (
      formData.email === "user@example.com" &&
      formData.password === "1password"
    ) {
      navigate("/gallery");
    } else {
      setErrors({
        auth: "Authentication failed. Please check your login details.",
      });
    }
  };

  return (
    <div className="auth">
      <div className="logo">pixelGrids</div>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="what's your email address?"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="choose a secure pass"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          {errors.auth && <span className="error">{errors.auth}</span>}
          <div className="form-button">
            <button type="submit">Login</button>
          </div>
          <p class="account-login">
            Don't have an account&#63;
            <span className="signup-link"> Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Auth;
