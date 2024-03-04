import Link from "next/link";
import React from "react";

interface JobCompProps {
  title: string;
  company: string;
  location: string;
  description: string;
  onApply?: () => void;
  jobLink:string
}

const JobComp: React.FC<JobCompProps> = ({
  title,
  company,
  location,
  description,
  onApply,
  jobLink
}) => {
  return (
    <div
      className=" max-w-sm bg-gray-200/45 backdrop:blur backdrop-blur-3xl rounded overflow-hidden shadow-lg
        shadow-slate-600 m-4 w-72  px-2 flex flex-col p-2  "
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-900 pb-2 text-sm">
        {company} - {location}
      </p>
      <p className="text-gray-950">{description}</p>
      <Link href={jobLink??"/"} target="_blank" className="bg-[#1E2025] hover:bg-[#3C5665] text-white font-bold 
      py-2 px-4 mt-auto max-w-32 rounded">
        Apply Now
      </Link>
    </div>
  );
};

export default JobComp;
