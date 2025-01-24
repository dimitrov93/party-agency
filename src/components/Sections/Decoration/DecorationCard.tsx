import React, { memo } from "react";
import { Link } from "react-router-dom";

interface DecorationCardProps {
  image: string;
  title: string;
  link: string;
}

const DecorationCard = memo(({ image, title, link }: DecorationCardProps) => {
  return (
    <div className="bg-transparent rounded-2xl flex flex-col justify-center text-center items-center">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square max-lg:max-w-[70%] max-sm:max-w-[100%]"
      />
      <h4 className="p-4 uppercase font-medium text-center text-3xl lg:text-3xl  text-nowrap">
        {title}
      </h4>
      {link ? (
        <Link to={link}>
          <button className="green__btn md:py-2 md:px-12">Разгледай</button>
        </Link>
      ) : (
        <button className="green__btn md:py-2 md:px-12">Разгледай</button>
      )}
    </div>
  );
});

export default DecorationCard;
