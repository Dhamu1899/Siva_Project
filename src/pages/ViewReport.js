import React, { useState } from 'react';

function ViewReport() {
  const [reportCriteria, setReportCriteria] = useState({
    startDate: '',
    endDate: '',
    status: ''
  });

  const handleGetReport = (e) => {
    e.preventDefault();
    console.log('Generating report with criteria:', reportCriteria);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">View Report</h2>
      <form onSubmit={handleGetReport} className="space-y-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={reportCriteria.startDate}
            onChange={(e) => setReportCriteria(prev => ({ ...prev, startDate: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={reportCriteria.endDate}
            onChange={(e) => setReportCriteria(prev => ({ ...prev, endDate: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
          <select
            id="status"
            value={reportCriteria.status}
            onChange={(e) => setReportCriteria(prev => ({ ...prev, status: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="" disabled>Select status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Generate Report
        </button>
      </form>
    </div>
  );
}

export default ViewReport;
