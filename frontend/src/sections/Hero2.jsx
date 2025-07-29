import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, shoe5 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero2 = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="max-container flex max-xl:flex-col gap-20 w-full min-h-screen  ">
      <div className="flex flex-col w-full xl:w-[40%] gap-10 max-xl:padding-x pt-28">
        <p className="text-lg text-coral-red  font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:whitespace-nowrap xl:bg-white pr-10 relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>

        <p className="text-slate-gray mt-1 mb-8 text-lg sm:max-w-sm leading-8 font-montserrat ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div>
          <Button label="Shop now" iconURL={arrowRight} />
        </div>

        <div className="font-montserrat flex gap-16 mt-16 w-full">
          {statistics.map((stats) => (
            <div key={stats.label} className="flex flex-col gap-1">
              <p className="text-4xl max-sm:text-3xl font-bold">
                {stats.value}
              </p>
              <p className="text-lg font-montserrat text-slate-gray max-sm:text-base">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex xl:min-h-screen bg-hero bg-cover bg-center max-xl:py-40 bg-primary relative ">
        <div className="flex justify-center items-center w-full min-h-screen ">
          <img
            src={bigShoeImg}
            alt="big shoe"
            className="w-full max-w-[610px] h-auto object-contain relative"
          />

          <div className="flex items-center gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(selectedShoe) =>
                    setBigShoeImg(selectedShoe)
                  }
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
