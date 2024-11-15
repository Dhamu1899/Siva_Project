import React, { useState, useEffect } from 'react';

function ViewFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    setFeedback(storedFeedback);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">View Feedback</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">User</th>
              <th className="py-2 px-4 border-b text-left">Feedback</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.user}</td>
                <td className="py-2 px-4 border-b">{item.feedback}</td>
                <td className="py-2 px-4 border-b">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewFeedback;
