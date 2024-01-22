import Sidebar from "../Fragments/sidebar";

const AdminSidebar = () => {
  const navigation = [
    ['Dashboard', '/dashboard'],
    ['Profile', '/profile'],
    ['Kegiatan Kampus', '/kegiatan'],
    ['Info Kampus', '/info-kampus'],
  ];
  return (
    <>
      <Sidebar navigation={navigation} />
    </>
  );
};

export default AdminSidebar;
