import React, { useState } from "react";
import  "../Login.css";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will send formData to your Node backend API
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <div className="stats">
          <div className="stat-card">
            <h4>Profit</h4>
            <p>Last Month</p>
            <h2>624k</h2>
            <span className="growth">+8.24%</span>
          </div>

          <div className="stat-card">
            <h4>Order</h4>
            <p>Last week</p>
            <h2>124k</h2>
            <span className="growth">+12.6%</span>
          </div>
        </div>
        <img
          className="character"
          src="https://i.ibb.co/9bLmJpY/3d-boy.png"
          alt="Character"
        />
      </div>

      <div className="right-side">
        <h1>Welcome to Vuexy! 👋</h1>
        <p>Please sign-in to your account and start the adventure</p>

        <form onSubmit={handleSubmit}>
          <label>Email or Username</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email or username"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            onChange={handleChange}
          />

          <div className="remember">
            <input type="checkbox" /> Remember me
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          New on our platform? <a href="/">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
