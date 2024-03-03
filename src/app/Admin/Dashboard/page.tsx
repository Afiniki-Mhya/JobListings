"use client";
import React, { useState } from "react";
import Link from "next/link";
import FormPage from "../Form/page";

function DashboadPage() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleUploadClick = () => {
    setIsUploadOpen(true);
  };

  const handleCloseUpload = () => {
    setIsUploadOpen(false);
  };

  return (
    <div className="bg-[#92A4B1] min-h-screen text-black font-[Poppins] p-16">
      <h1 className="font-extrabold text-2xl pb-7">Hello Ismail</h1>
      <button
        onClick={handleUploadClick}
        className="bg-white p-4 rounded-lg cursor-pointer"
      >
        Upload
      </button>
      {isUploadOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className=" p-8 rounded-lg">
            <FormPage /> {/* Render your pop-up component */}
            <button onClick={handleCloseUpload} className="mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboadPage;
