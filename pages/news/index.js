import React from 'react'
import Head from "next/head";
import Navbar from '../../components/navbar'
import NewsCard from '../../components/NewsCard'

export default function index() {
  return (
    <><Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
    <NewsCard></NewsCard></>
  )
}