import React from "react";
import { FaSearch } from "react-icons/fa";
import InternshipComp from "./internshipProps";

function InternshipPage() {
  function handleApply(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" bg-[#92A4B1] min-h-screen text-black font-[Poppins] relative flex flex-col justify-center items-center ">
      <h1 className=" text-2xl font-bold text-center py-4 ">
        Internship Listings
      </h1>
      <div className="absolute top-0 right-0 p-8">
        <FaSearch />
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-6 py-10">
        <InternshipComp
          title="Software Engineering Scholarship"
          organization="ABC Inc. Foundation"
          location="New York, NY"
          description="Supporting the next generation of technology innovators. "
          onApply={handleApply}
        />
        <InternshipComp
          title="Data Science Research Grant"
          organization="XYZ Corp. Charitable Trust"
          location="San Francisco, CA"
          description="Designed for aspiring data scientists, this grant provides."
          onApply={handleApply}
        />
        <InternshipComp
          title="Project Management Excellence Award"
          organization="AJD Ltd. Scholarship Fund"
          location="San Francisco, CA"
          description="Celebrating excellence in project management."
          onApply={handleApply}
        />
      </div>
    </div>
  );
}

export default InternshipPage;
