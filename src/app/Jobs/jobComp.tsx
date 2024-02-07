import React from 'react';

interface JobCompProps {
    title: string;
    company: string;
    location: string;
    description: string;
    onApply: () => void;
}

const JobComp: React.FC<JobCompProps> = ({ title, company, location, description, onApply }) => {
    return (
        <div className=' max-w-sm bg-[#92a4b182] rounded overflow-hidden shadow-lg
        shadow-slate-600 m-4 w-72 h-64 px-2   '>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-900 pb-2 text-sm">{company} - {location}</p>
            <p className="text-gray-950">{description}</p>
            <button className="bg-[#1E2025] hover:bg-[#3C5665] text-white font-bold py-2  px-4 mt-2 rounded" >
                Apply Now
            </button>
        </div>
    );
}

export default JobComp;
