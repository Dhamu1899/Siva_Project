import React, { useState, useEffect } from 'react';

const CheckStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!loggedInUser) {
      alert('Please log in to view your complaints.');
      return;
    }

    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const userComplaints = storedComplaints.filter(
      (complaint) => complaint.email === loggedInUser.email
    );

    setComplaints(userComplaints);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Complaint Status Table
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Complaint ID</th>
                <th className="py-2 px-4 border-b text-left">State</th>
                <th className="py-2 px-4 border-b text-left">District</th>
                <th className="py-2 px-4 border-b text-left">City</th>
                <th className="py-2 px-4 border-b text-left">Area</th>
                <th className="py-2 px-4 border-b text-left">Landmark</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="py-2 px-4 border-b">{complaint.id}</td>
                    <td className="py-2 px-4 border-b">{complaint.state}</td>
                    <td className="py-2 px-4 border-b">{complaint.district}</td>
                    <td className="py-2 px-4 border-b">{complaint.city}</td>
                    <td className="py-2 px-4 border-b">{complaint.area}</td>
                    <td className="py-2 px-4 border-b">{complaint.landmark}</td>
                    <td className="py-2 px-4 border-b">{complaint.description}</td>
                    <td className="py-2 px-4 border-b">{complaint.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-2 px-4 text-center">
                    No complaints registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CheckStatus;
