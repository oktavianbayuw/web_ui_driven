import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function penelitian_detail() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const { keywords } = router.query;

  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = keywords
          ? `/api/search_data_by_keyword?keywords=${keywords}`
          : `/api/penelitian?page=${currentPage}&pageSize=${pageSize}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        console.log("Search Result:", result);

        if (result && result.data && Array.isArray(result.data)) {
          setData(result.data);
          setTotalPages(result.totalPages);
        }
      } catch (error) {
        console.error(error);
        setData([]);
        setTotalPages(1);
      }
    };

    fetchData();
  }, [keywords, currentPage]);

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
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-2 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800"
              } font-bold py-2 px-4 rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2 bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
