import React from "react";

type CardProps = {
  title?: string;
  linkUrl?: string;
  content?: string;
};

const Card: React.FC<CardProps> = ({ title, content, linkUrl }) => {
  return (
    <div
      className=" max-w-sm bg-black/65 rounded overflow-hidden text-center 
     m-4 w-64 h-40 px-2 pt-7 "
    >
      {content && <p className="text-white pb-5  ">{content}</p>}
      <div className="px-2 ">
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
