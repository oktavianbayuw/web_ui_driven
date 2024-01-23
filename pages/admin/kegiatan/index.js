import React from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Link from "next/link";
import { FaRegLightbulb, FaRegMoon, FaRegSun, FaRegStar } from "react-icons/fa"; // import the icons

export default function penelitian() {
  const cards = [
    {
      title: "Ospek",
      link: "#",
      bg_img: "/img/orientation-2.jpg",
    },
    {
      title: "Mapala",
      link: "#",
      bg_img: "/img/mapala.jpg",
    },
    {
      title: "Pameran",
      link: "#",
      bg_img: "/img/pameran.jpg",
    },
    {
      title: "Penelitian",
      link: "/admin/kegiatan/penelitian",
      bg_img: "/img/research.jpg",
    },
    // Add more cards here
  ];

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((card, index) => (
              <Link href={card.link} key={index}>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 hover:shadow-lg transition duration-200 ease-in-out">
                  <img src={card.bg_img} style={{ height: "100%" }} />
                  <h2 className="text-xl font-bold mb-2 text-center mt-3">
                    {card.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
