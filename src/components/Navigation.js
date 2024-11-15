import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ user }) {
  // Define navigation links based on the user's role
  const getNavLinks = () => {
    if (!user) {
      // Guest navigation
      return [
        { to: '/', text: 'Home' },
        { to: '/department-login', text: 'Department' },
        { to: '/admin-login', text: 'Admin' },
        { to: '/login', text: 'Login' },
        { to: '/register', text: 'Register' },
      ];
    }

    if (user.role === 'admin') {
      // Admin navigation
      return [
        { to: '/admin', text: 'Dashboard' },
        { to: '/add-hod', text: 'Add HOD' },
        { to: '/view-complaints', text: 'View Complaints' },
        { to: '/view-report', text: 'View Report' },
        { to: '/view-feedback', text: 'View Feedback' },
        
      ];
    }

    if (user.role === 'user') {
      // User navigation
      return [
        { to: '/user', text: 'Dashboard' },
        { to: '/register-complaint', text: 'Register Complaint' },
        { to: '/check-status', text: 'Check Status' },
        { to: '/send-feedback', text: 'Send Feedback' },
        { to: '/profile', text: 'Profile' },
        
      ];
    }

    if (user.role === 'department') {
      // Department navigation
      return [
        { to: '/department', text: 'Dashboard' },
        { to: '/view-complaints', text: 'View Complaints' },
        { to: '/view-feedback', text: 'View Feedback' },
        { to: '/profile', text: 'Profile' },
      
      ];
    }

    return [];
  };

  // Get the navigation links based on the user's role
  const navLinks = getNavLinks();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6">
        <ul className="flex justify-end space-x-6 py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="text-gray-700 hover:text-indigo-600 font-semibold uppercase transition duration-300 ease-in-out transform hover:scale-105"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
