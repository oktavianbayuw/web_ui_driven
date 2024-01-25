import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/Layouts/admin_sidebar";

export default function Index() {
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <p className="text-center font-bold">Data Tidak Ditemukan</p>
        </div>
      </div>
    </>
  );
}
