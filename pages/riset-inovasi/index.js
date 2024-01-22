import React from 'react';
import Head from 'next/head';
import PublicNavbar from '../../components/Layouts/public_navbar';
import Card from '../../components/Layouts/card';
import Slider from '../../components/slider';
import Breadcrumb from '../../components/Fragments/breadcrumb';
import Pengumuman from '../../components/Layouts/pengumuman';
import Footer from '../../components/footer';
import Table from '../../components/Fragments/table';

// Contoh data berita statis (gantilah dengan data sesuai kebutuhan)
const sampleNews = [
  {
    title: 'Perkuliahan Online',
    description: 'kuliah online telah menjadi alternatif populer untuk kuliah kelas fisik, terutama selama pandemi COVID-19 ketika banyak universitas maupun institusi pendidikan menutup kampus mereka lalu beralih ke pembelajaran jarak jauh.',
    image: '/img/kuliah.jpg',
  },
  {
    title: 'Seminar Nasional Technopex',
    description: 'Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan yang dilaksanakan dalam rangkaian Dies Natalis ITI ke 39.  Seminar nasional ini akan dilaksanakan secara full online dalam satu hari yang terdiri dari sesi utama dan paralel. Sesi utama adalah penyampaian materi dari narasumber-narasumber dengan topik berdasarkan keahliannya.',
    image: '/img/seminar.jpg',
  },
  // Tambahkan data berita lainnya sesuai kebutuhan
];
const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Riset dan Inovasi', url: '/riset-inovasi', }, // Gantilah dengan path ikon yang sesuai
];
const tableheader = ["No", "Judul", "Deskripsi", "Tanggal", "Status"];
const data = [
    {
      id: 1,
      title: "PIMNAS 32 UNY",
      description: "Perlombaan IT Antar Kampus di Ajang PIMNAS 32 UNY",
      date_update: "2024-01-01",
      status: 1,
    },
    {
      id: 2,
      title: "Hackathon Juara 1",
      description: "Mahasiswa UI Juara 1 Hackathon Di Palembang",
      date_update: "2024-01-02",
      status: 0,
    },
    {
      id: 3,
      title: "Kejuaraan Olahraga Antar Mahasiswa se-Indonesia",
      description:
        "3 Tim Mahasiswa UI Juara 1, 2, dan 3 Kejuaraan Olahraga se-Indonesia",
      date_update: "2024-01-03",
      status: 1,
    },
  ];
  let no = 1;
export default function Index() {
  return (
    <>
      <PublicNavbar></PublicNavbar>
      <Slider></Slider>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className='ml-6'>
        <div className='p-4'>
        <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Data" required/>
    </div>
        <Table header={tableheader}>
            {data.map((item, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <td className="px-6 py-4">{no++}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.date_update}</td>
                <td className="px-6 py-4">
                  {item.status == 1 ? "Aktif" : "Tidak Aktif"}
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}