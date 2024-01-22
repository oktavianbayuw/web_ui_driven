import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import PublicNavbar from "../components/Layouts/public_navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>UNTUMU</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicNavbar />
      <Hero />
      <SectionTitle
        pretitle="Universitas Terbaik"
        title="Tentang Kami"
      >
        salah satu universitas riset atau institusi akademik terkemuka di dunia yang terus mengejar pencapaian tertinggi dalam hal penemuan, pengembangan dan difusi pengetahuan secara regional dan global. Dengan prestasi yang terus diraihnya UI berada di peringkat kampus terbaik di Indonesia berdasarkan penilaian Lembaga pemeringkatan dunia.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Pendapat Alumni"
        title="Pendapat para alumni universitas setelah kelulusan"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Pertanyaan seputar kampus, jurusan, dan lainnya.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
