import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  
  const [currentState, setCurrentState] = useState("Login")
  const [formData, setFormData] = useState({ name: "", email: "", password: "", });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => { e.preventDefault()
    if (currentState === "Sign Up") {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )

        const data = await response.json();
        if (response.ok) {
          alert("Registration successful!");
          setCurrentState("Login");
        } else {
          alert(data.message || "Registration failed");
        }
      } catch (error) {
        alert("Error registering user");
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {
            currentState === "Login" 
            ? null 
            : ( <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              )
          }
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        {
          currentState === "Login" 
          ? ( <p>Don't have an account?{" "}<span onClick={() => setCurrentState("Sign Up")}>Sign Up</span></p>) 
          : ( <p>Already have an account?{" "} <span onClick={() => setCurrentState("Login")}>Login</span></p>)
        }
      </form>
    </div>
  )
}

export default LoginPopup;
