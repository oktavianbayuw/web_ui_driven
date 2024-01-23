import React from "react";
import { useEffect, useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Card from "../../../components/Layouts/card";
import Pengumuman from "../../../components/Layouts/pengumuman";
import InfoCard from "../../../components/Layouts/infoCard";
import Link from "next/link";

const sampleNews = [
  {
    title: "Perkuliahan Online",
    description:
      "kuliah online telah menjadi alternatif populer untuk kuliah kelas fisik, terutama selama pandemi COVID-19 ketika banyak universitas maupun institusi pendidikan menutup kampus mereka lalu beralih ke pembelajaran jarak jauh.",
    image: "/img/kuliah.jpg",
  },
  {
    title: "Seminar Nasional Technopex",
    description:
      "Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan yang dilaksanakan dalam rangkaian Dies Natalis ITI ke 39.  Seminar nasional ini akan dilaksanakan secara full online dalam satu hari yang terdiri dari sesi utama dan paralel. Sesi utama adalah penyampaian materi dari narasumber-narasumber dengan topik berdasarkan keahliannya.",
    image: "/img/seminar.jpg",
  },
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
const announcements = [
  {
    title: "Seminar Nasional 2023",
    description:
      "Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan...",
    image: "/img/seminar.jpg",
    detailLink: "/seminar-details",
  },
  {
    title: "Perkuliahan Online",
    description: "Perkuliahan online adalah salah satu metode pembelajaran...",
    image: "/img/kuliah.jpg",
    detailLink: "/lecture-details",
  },
  // Add more announcements as needed
];
export default function index() {
  const [data, setData] = useState([]);
  const [data_pengumuman, setDataPengumuman] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/info_berita_kampus");
      const result = await response.json();
      setData(result.data);
    };

    fetchData();

    const fetchDataPengumuman = async () => {
      const response = await fetch("/api/info_pengumuman_kampus");
      const result = await response.json();
      setDataPengumuman(result.data);
    };

    fetchDataPengumuman();
  }, []);
  return (
    <>
      <AdminSidebar></AdminSidebar>
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
