import React, { useState } from "react";
import axios from "axios";
import "./AuthenticationPage.css";
const RegisterPage = () => {
  const initialvalue = {
    projectid: "",
    bufield: "",
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [FormData, setFormData] = useState(initialvalue);
  const [passwordError, setPasswordError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [Emailerror, setEmailerror] = useState("");

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  const emailRegex = /^[a-zA-Z0-9._-]+@ltimindtree\.com$/;
  const validateEmail = () => {
    setIsValidEmail(emailRegex.test(FormData.email));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    //password & confirm password should be same to submit the form
    if (FormData.password !== FormData.confirmpassword) {
      setPasswordError("password doesn't match");
      return;
    } else {
      setPasswordError("");
    }
    //email validation with only one domain
    if (!emailRegex.test(FormData.email)) {
      setEmailerror("use ltimindtree domain");
      return;
    } else {
      setEmailerror("");
    }
    console.log(FormData);
    //password validation
    const MinLengthofpassword = 10;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*]/;
    const MathDigit = /\d/;
    if (
      FormData.password.length < MinLengthofpassword ||
      !uppercaseRegex.test(FormData.password) ||
      !lowercaseRegex.test(FormData.password) ||
      !specialCharRegex.test(FormData.password) ||
      !MathDigit.test(FormData.password)
    ) {
      setPasswordError(
        "Password is not strong enough. Use lower char, upper char, digit and special char"
      );
      return;
    } else {
      setPasswordError("");
    }
    try {
      const response = await axios.post("", setFormData);
      console.log(response.data);
    } catch (error) {
      console.error("Error occured while posting data", error);
    }
    setFormData(initialvalue);
    setPasswordError("");
    setEmailerror("");
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <label>
          Project ID
          <input
            type="text"
            name="projectid"
            value={FormData.projectid}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <label>
          B/U
          <input
            type="text"
            name="bufield"
            value={FormData.bufield}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={FormData.name}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        {Emailerror && <p className="emailerror">{Emailerror}</p>}
        <label>
          Password
          <input
            type="password"
            name="password"
            value={FormData.password}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmpassword"
            value={FormData.confirmpassword}
            onChange={handleFormFieldChange}
            required
          />
        </label>
        {passwordError && <p className="passworderror">{passwordError}</p>}

        <button type="submit" className="Submitbtn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
