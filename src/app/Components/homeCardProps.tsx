import Link from "next/link";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
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
        "relative max-w-sm bg-[#5A7480] rounded overflow-hidden text-center m-4 w-64 h-40 px-2 pt-7 group cursor-pointer ",
        className
      )}
    >
      <div className="absolute -inset-1 bg-gradient-to-l from-[#5A7480] to-[#1E2025] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      {content && <p className="text-white  pb-5 relative ">{content}</p>}
      <div className="px-2 font-sans text-white transition-colors hover:text-gray-900  cursor-pointer relative before:absolute before:opacity-0 before:rounded before:hover:opacity-100 before:bg-white before:bottom-0 before:left-0 before:h-full before:w-full before:origin-left before:scale-x-[0] hover:before:scale-x-100 before:transition-transform before:ease-in-out before:duration-500">
        {linkUrl ? (
          <Link
            href={linkUrl}
            className=" relative  mb-2 flex justify-between w-fit mx-auto items-center gap-5 "
          >
            {title}{" "}
            <BiRightArrow className="text-sm  duration-500" />
          </Link>
        ) : (
          <div className="font-extrabold text-white text-xl mb-2 ">{title}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
