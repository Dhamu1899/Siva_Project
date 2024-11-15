import React, { useState, useEffect } from 'react';

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    setComplaints(storedComplaints);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">View Complaints</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Department</th>
              <th className="py-2 px-4 border-b text-left">Subject</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-4 py-2">{complaint.id}</td>
                  <td className="px-4 py-2">{complaint.department}</td>
                  <td className="px-4 py-2">{complaint.subject}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        complaint.status === 'Resolved'
                          ? 'bg-green-200 text-green-800'
                          : complaint.status === 'In Progress'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No complaints available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewComplaints;
