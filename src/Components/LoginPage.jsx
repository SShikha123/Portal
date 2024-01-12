import axios from "axios";
import React, { useState } from "react";
import "./AuthenticationPage.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const initalcredentials = { email: "", password: "" };
  const [logincred, setlogincred] = useState(initalcredentials);
  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setlogincred({ ...logincred, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", {logincred});
      //handle auth token
      const authToken = response.data.token;
      console.log("auth success", authToken);
    } catch (error) {
      console.error("login failed", error);
    }
    console.log(logincred);
    setlogincred(initalcredentials);
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={logincred.email}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={logincred.password}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <button type="submit" className="Submitbtn">Login</button>
        <p>Please click here to <Link to='/signup'>register</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
