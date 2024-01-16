import Navbar from "../Fragments/navbar";

const AdminNavbar = () => {
  const navigation = [
    ["Akademik", "/akademik"],
    ["Riset dan Inovasi", "/riset-inovasi"],
    ["Kampus", "/kampus"],
    ["Berita dan Pengumuman", "/news"],
  ];
  const authLink = "/logout";
  return (
    <>
      <Navbar navigation={navigation} authLink={authLink}></Navbar>
    </>
  );
};

export default AdminNavbar;
