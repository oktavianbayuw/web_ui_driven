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
  const router = useRouter();
  const { keywords } = router.query;

  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = keywords
          ? `/api/search_data_by_keyword?keywords=${keywords}`
          : `/api/info_berita_kampus?page=${currentPage}&pageSize=${pageSize}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        console.log("Search Result:", result);

        if (result && result.results && Array.isArray(result.results)) {
          setData(result.results);
        } else {
          setData(result.data);
        }
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };

    console.log(data);

    fetchData();
  }, [keywords, currentPage]);

  useEffect(() => {
    const fetchDataPengumuman = async () => {
      const response = await fetch("/api/info_pengumuman_kampus");
      const result = await response.json();
      setDataPengumuman(result.data);
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
