import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import InfoCard from "../../../components/Layouts/infoCard";
import Link from "next/link";
import ImageSlider from "../../../components/Fragments/sliderImage";

const images = [
  '/img/research.jpg',
  '/img/pameran.jpg',
  '/img/research.jpg',
];
const schedules = [
  {
    title: "Jadwal Ujian Fakultas Teknik Informatika",
    description:
      "Jadwal Ujian Semester Ganjil 2023 Fakultas Teknik Informatika",
    detailLink: "/seminar-details",
  },
  {
    title: "Jadwal Ujian Fakultas Ekonomi dan Bisnis",
    description:
      "Jadwal Ujian Semester Ganjil 2023 Fakultas Ekonomi dan Bisnis",
    detailLink: "/lecture-details",
  },
];

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
];

export default function index() {
  return (
    <>
      <AdminSidebar />
      <div className="dark:border-gray-700 mt-14 p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <ImageSlider images={images} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:ml-64">
         <div className="p-3">
            <h2 className="text-lg font-bold mb-2 mt-3">Most Frequently Used</h2>
            <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((card, index) => (
              <Link href={card.link} key={index}>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 hover:shadow-lg transition duration-200 ease-in-out">
                  <h2 className="text-sm mb-2 text-center mt-3">
                    {card.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          </div>
        <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="p-3">
            <InfoCard schedules={schedules} />
          </div>
        </div>
      </div>
    </>
  );
}
