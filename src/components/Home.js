import React from 'react';

 function Home () {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          WELCOME TO PUBLIC GRIEVANCE REDRESSAL SYSTEM
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Carousel and About System */}
          <div className="md:w-2/3">
            {/* Carousel Section */}
            <div className="relative w-full h-64 bg-blue-100 overflow-hidden">
              <img
                src="https://yvbvzwjxvhqnxvqvjnhg.supabase.co/storage/v1/object/public/images/customer-service.jpg"
                alt="Customer Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button className="bg-black bg-opacity-50 text-white p-2">&lt;</button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="bg-black bg-opacity-50 text-white p-2">&gt;</button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* About System Section */}
            <div className="bg-yellow-100 p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">About the System</h2>
              <p className="text-gray-700">
                The <strong>Online Public Grievances System</strong> is designed to provide a platform for individuals to report and resolve their grievances. This system is an essential tool for District Administrations to measure their efficiency and improve public service.
                <br /><br />
                The grievance redressal mechanism acts as a gauge to assess the effectiveness of government services. Handling public grievances is a crucial activity carried out by the District Administration, contributing to a transparent and responsive government.
              </p>
            </div>
          </div>

        
        </div>
      </main>
    </div>
  );
}

export default Home;