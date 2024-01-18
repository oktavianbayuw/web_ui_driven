import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Table from "../../../components/Fragments/table";
import AdminBreadCrumb from "../../../components/Fragments/breadcrumb_admin";
import Pagination from "../../../components/Fragments/pagination";

export default function index() {
  const tableheader = ["No", "Nama", "Email", "Role", "Status", "Aksi"];

  const data = [
    {
      no: 1,
      nama: "Admin",
      email: "admin@gmail.com",
      role: 1,
      status: 1,
    },
    {
      no: 2,
      nama: "Aravika",
      email: "user2@gmail.com",
      role: 2,
      status: 0,
    },
    {
      no: 3,
      nama: "Oktavian",
      email: "user3@gmail.com",
      role: 2,
      status: 1,
    },
  ];

  let no = 1;
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <AdminBreadCrumb
          toHome={"admin/dashboard"}
          current_page={"Setting User"}
        />
        <div className="flex items-center justify-end">
          <a
            href="/admin/user/create_or_edit"
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700"
          >
            Tambah Data
          </a>
        </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-3">
          <Table header={tableheader}>
            {data.map((item, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <td className="px-6 py-4">{no++}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nama}
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">
                  {item.role == 1 ? "Admin" : "User"}
                </td>
                <td className="px-6 py-4">
                  {item.status == 1 ? "Aktif" : "Tidak Aktif"}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="/admin/user/create_or_edit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </Table>
        </div>
        <Pagination style={"flex items-center justify-end mt-3"} />
      </div>
    </>
  );
}
