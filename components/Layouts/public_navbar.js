import Navbar from "../Fragments/navbar";

const PublicNavbar = () => {
  const navigation = [
    ["Akademik", "/akademik"],
    ["Riset dan Inovasi", "/riset-inovasi"],
    ["Berita dan Pengumuman", "/news"],
  ];
  const authLink = "/login";
  return (
    <>
      <Navbar navigation={navigation} authLink={authLink}></Navbar>
    </>
  );
};

export default PublicNavbar;
