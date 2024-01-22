import React, { useState } from "react";
import AdminSidebar from "../../../components/Layouts/admin_sidebar";
import Form from "../../../components/Layouts/form";
import AdminBreadCrumb from "../../../components/Fragments/breadcrumb_admin";

export default function form() {
  const field_form = [
    {
      label: "Judul",
      type: "text",
      name: "title",
      placeholder: "Judul Berita",
      required: true,
    },
    {
      label: "Deskripsi",
      type: "text",
      name: "description",
      placeholder: "Deskripsi Berita",
      required: true,
    },
    {
      label: "Detail Berita",
      type: "textarea",
      name: "detail",
      placeholder: "Masukkan Detail Berita",
      required: true,
    },
  ];
  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        <AdminBreadCrumb
          previous_page={"Setting Berita"}
          toHome={"/admin/news"}
          current_page={"Edit Data Berita"}
        />
        <div className="w-1/2 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-8">
          <Form data={field_form} />
        </div>
      </div>
    </>
  );
}
