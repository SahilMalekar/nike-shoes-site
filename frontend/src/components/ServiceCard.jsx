import React from "react";

const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px]  w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl font-palanquin mt-5 leading-normal font-bold">
        {label}
      </h3>
      <p className="text-lg text-slate-gray leading-normal break-words font-montserrat mt-3">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
