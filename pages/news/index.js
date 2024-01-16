import React from 'react';
import Head from 'next/head';
import PublicNavbar from '../../components/Layouts/public_navbar';
import Card from '../../components/Layouts/card';

// Contoh data berita statis (gantilah dengan data sesuai kebutuhan)
const sampleNews = {
  title: 'Judul Berita',
  description: 'Deskripsi berita singkat.',
  image: 'url_gambar_berita.jpg',
};

export default function Index() {
  return (
    <>
      <PublicNavbar />
      <Card news={sampleNews} />
    </>
  );
}
