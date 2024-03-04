import React from "react";
import { twMerge } from "tailwind-merge";
type CardProps = {
  title?: string;
  linkUrl?: string;
  content?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, content, linkUrl, className }) => {
  return (
    <div
      className={twMerge(
        "relative max-w-sm bg-black/65 rounded overflow-hidden text-center m-4 w-64 h-40 px-2 pt-7 group cursor-pointer",
        className
      )}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      {content && (
        <p className="text-white pb-5 relative ">
          {content}
        </p>
      )}
      <div className="px-2 relative">
        {linkUrl ? (
          <a
            href={linkUrl}
            className="font-extrabold text-white text-xl mb-2 hover:text-[#3C5665]"
          >
            {title}
          </a>
        ) : (
          <div className="font-extrabold text-white text-xl mb-2 ">{title}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
