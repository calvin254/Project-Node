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
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <p>Please log in to access your POS system.</p>
    </div>
  );
};

export default Login;
