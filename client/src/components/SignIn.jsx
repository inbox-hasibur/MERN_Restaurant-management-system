// src/components/SignIn.jsx
import { useState } from "react";
import { signin } from "../services/authService";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signin(formData);
      console.log("Signin Successful:", res.data);
      alert("Signin successful!");
    } catch (error) {
      console.error(error);
      alert("Signin failed");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;