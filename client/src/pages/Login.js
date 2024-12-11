import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/users/login', formData);
    localStorage.setItem('token', response.data.token);
    alert('Login successful');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
      <input name="password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
