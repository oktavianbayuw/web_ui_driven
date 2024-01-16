import Card from "../../components/Layouts/card";
import PublicNavbar from "../../components/Layouts/public_navbar";

export default function index() {
  const sampleNews = {
    title: "Judul Berita",
    description: "Deskripsi berita singkat.",
    image: "url_gambar_berita.jpg",
  };
  return (
    <>
      <PublicNavbar />
      <Card news={sampleNews} />
    </>
  );
}
