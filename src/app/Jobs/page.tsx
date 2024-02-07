import React from "react";
import JobComp from "../Jobs/jobComp";
import { FaSearch } from "react-icons/fa";

function JobPage() {
  function handleApply(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-gradient-to-br from-[#1E2025] via-[#3C5665] to-[#5A7480] min-h-screen text-black font-[Courier] relative flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold text-center py-4">Job Listings</h1>
      <div className="absolute top-0 right-0 p-8">
        <FaSearch />
      </div>
      <div className="grid grid-cols-3 gap-6 py-10">
        <JobComp
          title="Software Engineer"
          company="ABC Inc."
          location="New York, NY"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam turpis eget nisl molestie, nec ultrices velit euismod."
          onApply={handleApply}
        />
        <JobComp
          title="Data Scientist"
          company="XYZ Corp."
          location="San Francisco, CA"
          description="Nullam rhoncus, neque a volutpat suscipit, erat leo fringilla velit, vel euismod odio tellus et eros."
          onApply={handleApply}
        />
        <JobComp
          title="Project manager"
          company="AJD Ltd."
          location="San Francisco, CA"
          description="Nullam rhoncus, neque a volutpat suscipit, erat leo fringilla velit, vel euismod odio tellus et eros."
          onApply={handleApply}
        />
      </div>
    </div>
  );
}

export default JobPage;
