import React from 'react';
import Head from 'next/head';
import PublicNavbar from '../../components/Layouts/public_navbar';
import Card from '../../components/Layouts/card';
import Slider from '../../components/slider';
import Breadcrumb from '../../components/Fragments/breadcrumb';
import Pengumuman from '../../components/Layouts/pengumuman';
import Footer from '../../components/footer';

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
  { label: 'Berita dan Pengumuman', url: '/news', }, // Gantilah dengan path ikon yang sesuai
];

const announcements = [
  {
    title: 'Seminar Nasional 2023',
    description: 'Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan...',
    image: '/img/seminar.jpg',
    detailLink: '/seminar-details',
  },
  {
    title: 'Perkuliahan Online',
    description: 'Perkuliahan online adalah salah satu metode pembelajaran...',
    image: '/img/kuliah.jpg',
    detailLink: '/lecture-details',
  },
  // Add more announcements as needed
];
export default function Index() {
  return (
    <>
      <PublicNavbar></PublicNavbar>
      <Slider></Slider>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-2 gap-4">
        <div className='ml-6'>
        {sampleNews.map((news, index) => (
          <div className='p-3'>
            <Card key={index} news={news} />
          </div>
        ))}
        </div>
        <div className='ml-6'>
          <div className='p-3'>
          <Pengumuman announcements={announcements} />
          </div>
        </div>
        </div>
      <Footer></Footer>
    </>
  );
}