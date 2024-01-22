import React from 'react'
import AdminSidebar from '../../../components/Layouts/admin_sidebar'

export default function penelitian_detail() {
  const details = [
    { title: 'Penelitian 1', description: 'Description 1' },
    { title: 'Penelitian 2', description: 'Description 2' },
    { title: 'Penelitian 3', description: 'Description 3' },
    { title: 'Penelitian 4', description: 'Description 4' },
    // Add more details here
  ];

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {details.map((detail, index) => (
            <div key={index} className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mb-4">
              <h2 className="text-xl font-bold mb-2">{detail.title}</h2>
              <p className="text-gray-700">{detail.description}</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}