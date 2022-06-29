import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Replacement of History hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-2">
      <h4 className="my-2">Login to Continue to use ThinkBook</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
