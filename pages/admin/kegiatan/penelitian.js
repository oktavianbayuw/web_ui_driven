import React from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function penelitian_detail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/penelitian");
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mb-4"
            >
              <h2 className="text-xl font-bold mb-2">
                {item.judul_penelitian}
              </h2>
              <p className="text-gray-700">{item.nama_dosen}</p>
              <p className="text-gray-700 mb-3">{item.tahun_penelitian}</p>
              <Link
                href={`/admin/kegiatan/detail/${item.url_path}`}
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
              >
                Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
