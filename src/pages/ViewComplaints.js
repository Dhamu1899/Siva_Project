import React, { useEffect, useState } from 'react';

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(""); // "image" or "video"

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    setComplaints(storedComplaints);
  }, []);

  const handleViewMedia = (mediaUrl, type) => {
    setSelectedMedia(mediaUrl);
    setMediaType(type);
  };

  const handleCloseMedia = () => {
    setSelectedMedia(null);
    setMediaType("");
  };

  const handleDeleteComplaint = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
      setComplaints(updatedComplaints);
      localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
    }
  };

  return (
    <div>
      <h2>View Complaints</h2>

      {/* Complaints Table */}
      <table className="min-w-full table-auto border-collapse mt-6">
        <thead>
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">State</th>
            <th className="border p-2 text-left">District</th>
            <th className="border p-2 text-left">city</th>
            <th className="border p-2 text-left">Pincode</th>
            <th className="border p-2 text-left">Area</th>
            <th className="border p-2 text-left">Landmark</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <tr key={complaint.id} className="odd:bg-gray-100 even:bg-white">
                <td className="border p-2">{complaint.id}</td>
                <td className="border p-2">{complaint.state}</td>
                <td className="border p-2">{complaint.district}</td>
                <td className="border p-2">{complaint.city}</td>
                <td className="border p-2">{complaint.pincode}</td>
                <td className="border p-2">{complaint.area}</td>
                <td className="border p-2">{complaint.landmark}</td>
                <td className="border p-2">{complaint.description}</td>
                <td className="border p-2">
                  {complaint.image && (
                    <button
                      onClick={() => handleViewMedia(complaint.image, "image")}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      View Image
                    </button>
                  )}
                  {complaint.video && (
                    <button
                      onClick={() => handleViewMedia(complaint.video, "video")}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Play Video
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteComplaint(complaint.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="border p-2 text-center">
                No complaints found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md relative">
            <button
              onClick={handleCloseMedia}
              className="text-red-500 absolute top-2 right-2"
            >
              Close
            </button>
            {mediaType === "image" ? (
              <img src={selectedMedia} alt="Complaint Media" className="max-w-full max-h-full" />
            ) : (
              <video controls className="max-w-full max-h-full">
                <source src={selectedMedia} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewComplaints;
