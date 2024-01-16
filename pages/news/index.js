import React from 'react';
import Head from 'next/head';
import PublicNavbar from '../../components/Layouts/public_navbar';
import Card from '../../components/Layouts/card';

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

export default function Index() {
  return (
    <>
      <PublicNavbar></PublicNavbar>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse p-8">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <a href="/news" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Berita dan Pengumuman</a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-2 gap-4">
        <div>
        {sampleNews.map((news, index) => (
          <Card key={index} news={news} />
        ))}
        </div>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Pengumuman</h5>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
              </a>
        </div>
        <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                          <div class="flex-shrink-0">
                              <img class="w-8 h-8 rounded-full" src="/img/seminar.jpg" alt="Neil image"/>
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  Seminar Nasional 2023
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan yang dilaksanakan dalam rangkaian Dies Natalis ITI ke 39.  Seminar nasional ini akan dilaksanakan secara full online dalam satu hari yang terdiri dari sesi utama dan paralel. Sesi utama adalah penyampaian materi dari narasumber-narasumber dengan topik berdasarkan keahliannya.
                              </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              Detail
                          </div>
                      </div>
                  </li>
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                          <div class="flex-shrink-0">
                              <img class="w-8 h-8 rounded-full" src="/img/kuliah.jpg" alt="Neil image"/>
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Perkuliahan Online
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              Seminar Nasional Technopex 2023 adalah Agenda rutin tahunan yang dilaksanakan dalam rangkaian Dies Natalis ITI ke 39.  Seminar nasional ini akan dilaksanakan secara full online dalam satu hari yang terdiri dari sesi utama dan paralel. Sesi utama adalah penyampaian materi dari narasumber-narasumber dengan topik berdasarkan keahliannya.
                              </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              Detail
                          </div>
                      </div>
                  </li>
              </ul>
        </div>
      </div>
        </div>
      
    </>
  );
}