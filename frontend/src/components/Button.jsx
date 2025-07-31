import React from "react";

const Button = ({
  label,
  iconURL,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  type
}) => {
  return (
    <button
      type={`${type} && 'submit'`}
      onClick={onClick}
      className={`flex justify-center items-center px-7 py-4 rounded-full text-lg font-montserrat leading-none 
      
      ${bgColor ? `${bgColor} ${textColor} ${borderColor}` : `bg-coral-red border border-coral-red text-white`} ${fullWidth && "w-full"} hover:brightness-95 hover:shadow-md hover:shadow-slate-300 hover:scale-95 transition-transform duration-300
        `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
