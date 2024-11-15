import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Department Dashboard</h2>
      <div className="flex justify-center space-x-4">
        <Link to="/view-complaints">
          <button>View Complaints</button>
        </Link>
        <Link to="/view-report">
          <button>View Reports</button>
        </Link>
      </div>
    </div>
  );
}

export default DepartmentDashboard;