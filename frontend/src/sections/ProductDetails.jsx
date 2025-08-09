import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { star } from "../assets/icons";
import { Footer } from ".";
import Nav from "../components/Nav";
import Button from "../components/Button";
import axios from "axios";
import { getProductById } from "../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductById(id);
        if (res) {
          setProduct(res.data);
        } else {
          setError("Product Not Found!");
        }
      } catch (e) {
        console.log("Error fetching product:", e);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading)
    return (
      <div className="w-full min-h-screen  flex justify-center items-center">
        <p className="text-2xl text-gray-600">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="w-full min-h-screen  flex justify-center items-center">
        <p className="text-2xl text-gray-600">{error}</p>
      </div>
    );

  if (!product) return null;

  return (
    <div className="relative pt-5">
      <div className="py-6 relative left-[10%]">
        <Button
          label="BACK TO HOME"
          bgColor="bg-white"
          textColor="text-slate-gray"
          borderColor="border border-slate-gray"
          onClick={() => navigate("/")}
        />
      </div>
      <section className="padding max-container flex max-lg:flex-col items-start  lg:justify-center gap-10 w-full min-h-screen">
        <div className="flex-1 flex justify-center w-full">
          <img
            src={product.imgURL}
            alt={product.name}
            width={474}
            height={474}
            className="w-full object-contain min-w-[390px] lg:max-w-[578px] "
          />
        </div>
        <div className="flex flex-col justify-center items-start h-[100%]">
          <h1 className="text-4xl leading-normal font-palanquin font-bold text-coral-red ">
            {product.name}
          </h1>
          <h3 className="text-3xl font-montserrat font-bold mb-4 ">
            {product.price}
          </h3>
          <p className="text-lg text-slate-gray lg:max-w-xl max-lg:max-w-lg mb-6">
            {product.description}
          </p>
          <u className="text-md list-outside no-underline font-montserrat text-slate-gray mb-5">
            {product.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </u>
          <div className="flex justify-start items-center gap-3 font-montserrat text-lg font-bold">
            <img src={star} />
            <p>({product.rating})</p>
          </div>
        </div>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </div>
  );
};

export default ProductDetails;
