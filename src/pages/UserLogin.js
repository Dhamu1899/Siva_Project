import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin({ onLogin }) {  // Component name starts with an uppercase letter
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(''); // Error message for login
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the user data from localStorage
    const storedUser = localStorage.getItem('userProfile');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    // Validate the login credentials
    if (parsedUser && parsedUser.email === formData.email && parsedUser.password === formData.password) {
      alert('Login Successful!');
      
      // Pass the parsedUser (correct user data) to the parent component via onLogin
      onLogin(parsedUser);  // Pass the user data to the parent component

      // Redirect based on user role
      if (parsedUser.role === 'user') {
        navigate('/user-dashboard');  // Navigate to the user dashboard
      } else if (parsedUser.role === 'admin') {
        navigate('/admin');  // Navigate to the admin dashboard
      } else if (parsedUser.role === 'department') {
        navigate('/department-dashboard');  // Navigate to the department dashboard
      }
    } else {
      setError('Invalid credentials! Please check your email and password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">WELCOME USER</h2>

        <div className="bg-white p-8 rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">User Login</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter your email"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="Enter your password"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>

            <div className="text-center mt-6 space-y-2 text-sm text-gray-600">
              <p>
                Don't have an account?{' '}
                <span
                  onClick={() => navigate('/register')}
                  className="text-indigo-600 hover:underline cursor-pointer font-semibold"
                >
                  Please register
                </span>
              </p>
            </div>
          </form>
          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default UserLogin;  // Export with the correct component name
