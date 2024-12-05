import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get stored user data from localStorage
    const storedUser = localStorage.getItem('userProfile');
    if (!storedUser) {
      setError('No user found. Please register first.');
      return;
    }

    const user = JSON.parse(storedUser);

    // Check if email and password match stored data
    if (email === user.email && password === user.password) {
      onLogin({ ...user, role: 'user' }); // Add role for navigation
      alert('Login successful!');
      navigate('/user'); // Redirect to user dashboard
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-center mb-8">User Login</h2>

        <div className="bg-white p-8 rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border rounded w-full px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="border rounded w-full px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-blue-500 hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

export default UserLogin;
