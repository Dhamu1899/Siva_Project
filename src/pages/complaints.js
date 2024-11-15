import React from 'react';

export default function ComplaintsForum() {
  return (
    <div className="min-h-screen bg-gray-100">

      <main className="container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">WELCOME RESHMA!!..... REGISTER YOUR COMPLAINT HERE</h2>

        <h3 className="text-2xl font-bold mb-6">Complaints Forum</h3>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <ul className="space-y-2">
              {[
                "Chief Minister's Special Cell",
                "District Administration",
                "District Corporation",
                "Water Supply and Sewerage Board",
                "Civil supplies and Customer Protection Department",
                "Police Department",
                "Kerala Co-operative Milk"
              ].map((dept, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <a href="#" className="text-blue-600 hover:underline">{dept}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 bg-orange-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">The Goal of our system:</h4>
            <p className="mb-4">
              The Department of Public Grievances is to facilitate the pursuit of excellence in governance
              through promotion of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improvements in Government structures and processes</li>
              <li>Citizen-friendly initiatives including redressal of public grievances</li>
              <li>Documentation, incubation and dissemination of best practices</li>
              <li>Codification and simplification of procedures and</li>
              <li>Networking with various agencies</li>
            </ul>
            <p className="mt-4">
              The Department acts as a facilitator, in consultation with Central Ministries/ Departments,
              States/UT Administrations, Organizations and individuals, to improve Government functioning
              through reforms in public grievances redressal mechanism, process re-engineering and
              grievance audit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
