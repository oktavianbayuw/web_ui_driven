import React from "react";
import Navbar from "../../components/Fragments/navbar";
import Head from "next/head";
import Login from "../../components/login";

export default function index() {
  return (
    <>
      {/* <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar> */}
      <Login></Login>
    </>
  );
}
