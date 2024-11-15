import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userProfile'));
    setProfileData(data);
    setUpdatedData(data);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(updatedData));
    setProfileData(updatedData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  if (!profileData) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Your Profile</h2>

        {!isEditing ? (
          <div>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Father's Name:</strong> {profileData.fatherName}</p>
            <p><strong>Age:</strong> {profileData.age}</p>
            {/* Display other fields similarly */}
            
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* Editable inputs for other fields */}
            
            <button
              onClick={handleSave}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="ml-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
