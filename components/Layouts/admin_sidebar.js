import Sidebar from "../Fragments/sidebar";

const AdminSidebar = () => {
  const navigation = [
    ['Dashboard', '/dashboard'],
    ['Profile', '/profile'],
    ['Kegiatan Kampus', '/pages'],
    ['Info Kampus', '/info-kampus'],
    // Add more items here
  ];
  return (
    <>
      <Sidebar navigation={navigation} />
    </>
  );
};

export default AdminSidebar;
