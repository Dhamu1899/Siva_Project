import React, { useState } from 'react';

function SendFeedback() {
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now(), // Unique ID based on timestamp
      user: 'Reshma', // You can replace this with dynamic user data
      date: date || new Date().toLocaleDateString(),
      department,
      subject,
      feedback: comment,
    };

    // Get existing feedback from localStorage and add new entry
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    storedFeedback.push(newFeedback);
    localStorage.setItem('feedback', JSON.stringify(storedFeedback));

    // Clear form fields
    setDate('');
    setDepartment('');
    setSubject('');
    setComment('');
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          WELCOME RESHMA!!...... GIVE YOUR FEEDBACK
        </h2>
        <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Submit your feedback..!!</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block font-medium">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="department" className="block font-medium">Department</label>
                <select 
                  id="department" 
                  value={department} 
                  onChange={(e) => setDepartment(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                >
                  <option value="" disabled>--Select Department--</option>
                  <option value="dept1">Department 1</option>
                  <option value="dept2">Department 2</option>
                  <option value="dept3">Department 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block font-medium">Comment</label>
                <textarea 
                  id="comment" 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="border rounded w-full px-3 py-2"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SendFeedback;
