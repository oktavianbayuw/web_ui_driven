import React from 'react'
import AdminSidebar from '../../../components/Layouts/admin_sidebar'
import { Link } from 'react-router-dom'
import { FaRegLightbulb, FaRegMoon, FaRegSun, FaRegStar } from 'react-icons/fa' // import the icons

export default function penelitian() {
  const cards = [
    { title: 'Ospek', content: 'Content 1', link: '/detail/ospek', icon: <FaRegLightbulb /> },
    { title: 'Mapala', content: 'Content 2', link: '/detail/mapala', icon: <FaRegMoon /> },
    { title: 'Pameran', content: 'Content 3', link: '/detail/pameran', icon: <FaRegSun /> },
    { title: 'Penelitian', content: 'Content 4', link: '/detail/penelitian', icon: <FaRegStar /> },
    // Add more cards here
  ];

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((card, index) => (
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 hover:shadow-lg transition duration-200 ease-in-out">
                  {card.icon} {/* render the icon */}
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}