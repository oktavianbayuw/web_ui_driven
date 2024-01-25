import React, { useEffect, useState } from "react";
import Card from "../../../components/Layouts/card";
import Pengumuman from "../../../components/Layouts/pengumuman";
import InfoCard from "../../../components/Layouts/infoCard";
import Link from "next/link";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import { useRouter } from "next/router";

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

export default function index() {
  const [data, setData] = useState([]);
  const [data_pengumuman, setDataPengumuman] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const { keywords } = router.query;

  const pageSize = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = keywords
          ? `/api/search_data_by_keyword?keywords=${keywords}`
          : `/api/info_berita_kampus?page=${currentPage}&pageSize=${pageSize}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        console.log("Search Result:", result);

        if (result && result.data && Array.isArray(result.data)) {
          setData(result.data);
          setTotalPages(result.totalPages);
        }
      } catch (error) {
        console.error(error);
        setData([]);
        setTotalPages(1);
      }
    };

    fetchData();
  }, [keywords, currentPage]);

  useEffect(() => {
    const fetchDataPengumuman = async () => {
      const response = await fetch("/api/info_pengumuman_kampus");
      const result = await response.json();
      setDataPengumuman(result.data.slice(0, 5));
    };

    fetchDataPengumuman();
  }, []);
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-2 gap-4">
            <div className="ml-6">
              {data.map((news, index) => (
                <div className="p-3">
                  <Link href={`/admin/info-kampus/${news._id}`}>
                    <Card key={index} news={news} />
                  </Link>
                </div>
              ))}
              {/* Tampilkan nomor halaman */}
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
            <div className="ml-6">
              <div className="p-3">
                <Pengumuman announcements={data_pengumuman} />
              </div>
              <div className="p-3">
                <InfoCard schedules={schedules} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
