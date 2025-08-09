import React from "react";
import { star } from "../assets/icons";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PopularProductCard = ({ imgURL, name, price, id }) => {
  const fixedImgUrl = imgURL.startsWith("../")
    ? imgURL.replace("../", "/")
    : imgURL;

  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/products/${id}`);
  };

  console.log(`${API_BASE_URL}${fixedImgUrl}`, "from productCard");

  return (
    <div
      onClick={() => handleOnClick(id)}
      className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center"
    >
      <img
        src={`${API_BASE_URL}${fixedImgUrl}`}
        alt={name}
        className="w-[280px] h-[280px] hover:brightness-90 cursor-pointer transition-transform duration-300 hover:scale-105  overflow-hidden"
      />

      <div className="flex flex-1 justify-start gap-2.5 mt-8 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray leading-normal font-montserrat">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
