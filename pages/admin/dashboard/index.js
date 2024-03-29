import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import InfoCard from "../../../components/Layouts/infoCard";
import Link from "next/link";
import ImageSlider from "../../../components/Fragments/sliderImage";

const images = ["/img/research.jpg", "/img/pameran.jpg", "/img/research.jpg"];
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

const SearchResult = ({ data }) => {
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mb-4">
      <h2 className="text-xl font-bold mb-2">{data.judul_penelitian}</h2>
      <p className="text-gray-700">{data.nama_dosen}</p>
      <p className="text-gray-700 mb-3">{data.tahun_penelitian}</p>
      <Link
        href={`/admin/kegiatan/detail/${data.url_path}`}
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
      >
        Detail
      </Link>
    </div>
  );
};

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [route, setRoute] = useState("");

  useEffect(() => {
    // Fetch data and route from API based on your requirements
    // You can use the 'route' state to conditionally render components
  }, [currentPage]);

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        {route === "" ? ( // Check if there is no search, render default content
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="rounded-lg dark:border-gray-700 mt-14 mb-14 w-full">
                <ImageSlider images={images} />
              </div>
              <h2 className="text-lg font-bold mb-2 mt-3">
                Most Frequently Used
              </h2>
              <div className="grid grid-cols-4 gap-4 p-4">
                {cards.map((card, index) => (
                  <Link href={card.link} key={index}>
                    <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 hover:shadow-lg transition duration-200 ease-in-out">
                      <h2 className="text-sm mb-2 text-center mt-3">
                        {card.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-3 md:col-span-2 lg:col-span-1">
              <div className="rounded-lg dark:border-gray-700 mt-14">
                <div className="p-3">
                  <InfoCard schedules={schedules} />
                </div>
              </div>
              <div class="p-3">
                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Visi Misi Universitas Tugu Muda
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Kampus kami adalah tempat berkumpulnya orang-orang yang
                    kreatif, dinamis, dan menginspirasi untuk tumbuh bersama.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Render search results if 'route' is not empty
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            {data.map((item, index) => (
              <SearchResult key={index} data={item} />
            ))}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-2 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400 text-gray-800"
                  } font-bold py-2 px-4 rounded`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2 bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
