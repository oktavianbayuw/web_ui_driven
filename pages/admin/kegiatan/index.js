import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Card from "../../../components/Layouts/card";


const cards = [
  { title: 'Ospek', image: '/img/card1.jpg' },
  { title: 'Mapala', image: '/img/card2.jpg' },
  { title: 'Pameran', image: '/img/card3.jpg' },
  { title: 'Penelitian', image: '/img/card3.jpg' },
  // Add more cards here
];
export default function index() {
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="flex items-center justify-center h-48 mb-4 rounded shadow-lg dark:bg-gray-800">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-24 w-24 m-2 rounded shadow-lg dark:bg-gray-800">
              <img src={card.image} alt={card.title} className="w-full h-1/2 object-cover" />
              <a href="#" className="text-lg font-bold text-center text-gray-800 dark:text-white">{card.title}</a>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
