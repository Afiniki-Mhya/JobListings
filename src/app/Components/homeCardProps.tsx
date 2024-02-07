import React from "react";

type CardProps = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className=" max-w-sm bg-black/65 rounded overflow-hidden shadow-lg
     shadow-slate-600 m-4 w-64 h-40 px-2 pt-3 ">
      {imageUrl && <img className="w-24" src={imageUrl} alt="Card" />}
      <div className="px-2">
        {title && (
          <div className="font-extrabold text-white  text-xl mb-2">{title}</div>
        )}
        {content && <p className=" text-white  ">{content}</p>}
      </div>
    </div>
  );
};

export default Card;
