import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../../components/Layouts/admin_sidebar";
import { useRouter } from "next/router";

export default function PenelitianDetailPage() {
  const [detail, setDetail] = useState({});
  const router = useRouter();
  const { url_path } = router.query;
  console.log(url_path);

  useEffect(() => {
    const fetchData = async () => {
      if (url_path) {
        const response = await fetch(`/api/penelitian/${url_path}`);
        const result = await response.json();
        setDetail(result.data);
      }
    };

    fetchData();
  }, [url_path]);

  console.log(detail);

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h2 className="text-xl font-bold mb-2">{detail.judul_penelitian}</h2>
          <p className="text-gray-700">{detail.nama_dosen}</p>
          <p className="text-gray-700 mb-3">{detail.tahun_penelitian}</p>
          {/* Tambahkan bagian detail lainnya sesuai kebutuhan */}
        </div>
      </div>
    </>
  );
}
