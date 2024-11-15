import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    age: '',
    gender: '',
    maritalStatus: '',
    qualification: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword
  });

  const [error, setError] = useState(''); // For handling password mismatch error

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear error if passwords match
    setError('');

    // Store user data in local storage
    localStorage.setItem('userProfile', JSON.stringify(formData));
    alert('Registration successful!');

    // Redirect to home page after successful registration
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Register Here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label htmlFor="fatherName" className="block font-medium mb-1">
              Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block font-medium mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Marital Status */}
          <div>
            <label htmlFor="maritalStatus" className="block font-medium mb-1">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select marital status
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          {/* Qualification */}
          <div>
            <label htmlFor="qualification" className="block font-medium mb-1">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-indigo-600 hover:underline cursor-pointer font-semibold"
            >
              Please login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
