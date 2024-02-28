import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
        className="block w-full h-auto"
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs font-bold text-center white-space-normal md:text-sm">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute text-gray-300 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
