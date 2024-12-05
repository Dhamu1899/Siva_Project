import React, { useState, useEffect } from 'react';

function ViewFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    setFeedback(storedFeedback);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">View Feedback</h2>
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">User</th>
                <th className="py-2 px-4 border-b text-left">Mobile Number</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Department</th>
                <th className="py-2 px-4 border-b text-left">State</th>
                <th className="py-2 px-4 border-b text-left">District</th>
                <th className="py-2 px-4 border-b text-left">City</th>
                <th className="py-2 px-4 border-b text-left">Subject</th>
                <th className="py-2 px-4 border-b text-left">Feedback</th>
                
              </tr>
            </thead>
            <tbody>
              {feedback.length > 0 ? (
                feedback.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{item.id}</td>
                    <td className="py-2 px-4 border-b">{item.user}</td>
                    <td className="py-2 px-4 border-b">{item.mobileNumber}</td>
                    <td className="py-2 px-4 border-b">{item.date}</td>
                    <td className="py-2 px-4 border-b">{item.department}</td>
                    <td className="py-2 px-4 border-b">{item.state}</td>
                    <td className="py-2 px-4 border-b">{item.district}</td>
                    <td className="py-2 px-4 border-b">{item.city}</td>
                    <td className="py-2 px-4 border-b">{item.subject}</td>
                    <td className="py-2 px-4 border-b">{item.feedback}</td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No feedback available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ViewFeedback;
