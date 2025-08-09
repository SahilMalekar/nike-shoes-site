import { useState } from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { useEffect } from "react";
import axios from "axios";
import { getProducts } from "../api/api";

const PopularProducts = () => {
  const [productsData, setProductsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getProducts();
        console.log(res.data);

        setProductsData(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (!productsData)
    return (
      <div className="w-full min-h-[60%] flex justify-center items-center">
        <h1 className="text-3xl text-slate-gray font-palanquin font-bold">
          Loading...!
        </h1>
      </div>
    );
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 justify-center">
        {productsData.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
