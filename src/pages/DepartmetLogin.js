import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function DepartmentLogin() {
  const [formData, setFormData] = useState({
    department: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted:", formData);

    // Default admin credentials (optional, adjust as needed)
    const defaultAdminCredentials = {
      username: "admin",
      password: "admin",
    };

    // Handle department login (example for a "department" role)
    if (formData.username === defaultAdminCredentials.username && formData.password === defaultAdminCredentials.password) {
      alert('Department Admin Login Successful!');
      navigate('/department-dashboard'); // Redirect to department dashboard
    } else if (formData.username && formData.password) {
      // Handle successful login logic for department
      alert('Login successful!');
      navigate('/department-dashboard'); // Redirect to department dashboard
    } else {
      alert('Please fill out the form correctly');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          WELCOME TO PUBLIC GRIEVANCE SYSTEM
        </h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-6 text-center">Department Login</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="department" className="block font-medium mb-2">
                Select Department Name:
              </label>
              <select
                id="department"
                value={formData.department}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, department: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>Select Department</option>
                <option value="cm">CM</option>
                <option value="police">Police Department</option>
                <option value="water">Water Department</option>
                <option value="civil">Civil Department</option>
              </select>
            </div>

            <div>
              <label htmlFor="username" className="block font-medium mb-2">
                Enter UserName:
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-2">
                Enter Password:
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DepartmentLogin;
