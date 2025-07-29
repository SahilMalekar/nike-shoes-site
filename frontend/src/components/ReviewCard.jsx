import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      <p className="m-auto info-text max-w-sm text-center mt-6">{feedback}</p>

      <div className=" mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className=" object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
