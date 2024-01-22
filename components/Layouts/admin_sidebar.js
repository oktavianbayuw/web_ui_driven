import Sidebar from "../Fragments/sidebar";

const AdminSidebar = () => {
  const navigation = [
    ['Dashboard', '/admin/dashboard'],
    ['Profile', '/admin/profile'],
    ['Kegiatan Kampus', '/admin/kegiatan'],
    ['Info Kampus', '/admin/info-kampus'],
  ];
  return (
    <>
      <Sidebar navigation={navigation} />
    </>
  );
};

export default AdminSidebar;
