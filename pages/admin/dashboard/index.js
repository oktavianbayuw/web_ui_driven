import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import InfoCard from "../../../components/Layouts/infoCard";
import Link from "next/link";
import ImageSlider from "../../../components/Fragments/sliderImage";

const images = [
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
      <div className=" dark:border-gray-700 mt-14">
        hahah
<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/img/research.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/img/seminar.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
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
