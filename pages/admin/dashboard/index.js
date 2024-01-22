import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Card from "../../../components/Layouts/card";


export default function index() {
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="flex items-center justify-center h-48 mb-4 rounded shadow-lg dark:bg-gray-800">
          <h2> Dashboard </h2>
        </div>
        </div>
      </div>
    </>
  );
}
