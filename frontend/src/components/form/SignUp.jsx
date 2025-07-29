import React, { useState } from "react";
import { loginImg } from "../../assets/images";
import Button from "../Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="max-container w-full flex items-center justify-center gap-16 border border-gray-100 shadow-xl shadow-black/10 rounded-2xl p-6 py-10 bg-white">
      <div className="max-lg:hidden">
        <img
          src={loginImg}
          alt="login-img"
          height={300}
          width={400}
          className="object-cover max-lg:w-[300px] rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col gap-8 max-lg:gap-0">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-palanquin font-bold  text-coral-red lg:text-4xl leading-tight">
            SignUp
          </h1>
          <h3 className="text-xl font-palanquin leading-normal mt-6 text-slate-gray font-semibold ">
            Step in. Step out.
          </h3>
          <p className="text-base text-slate-gray font-montserrat max-w-xl mt-2 max-xl:mb-3">
            "Join Nike for exclusive drops, early access, and personalized
            picks. Be first to know and own.
          </p>
        </div>
        <form className="flex flex-col  gap-4 mt-4 font-montserrat  ">
          <div className="flex gap-3 w-full lg:max-w-[90%]">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full lg:max-w-[90%]">
            <div className="w-full">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full lg:max-w-[90%]">
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your first name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter your first name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="termsAndConditions"
                name="termsAndConditions"
                className="h-4 w-4 text-coral-red focus:ring-coral-red border-gray-300 rounded"
              />
              <label
                htmlFor="termsAndConditions"
                className="text-sm text-gray-700 font-palanquin"
              >
                I agree to all the{" "}
                <a
                  href="/"
                  className="text-blue text-blue-800 font-bold hover:text-blue-600"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="/"
                  className="text-blue text-blue-800 font-bold hover:text-blue-600"
                >
                  Conditions
                </a>{" "}
              </label>
            </div>
            <div className="mt-8 lg:w-[30%]">
              <Button label="SignUp" fullWidth />
            </div>

            <div className="flex gap-1 mt-2 ">
              <p>Alredy have an account?</p>
              <Link
                to="/login"
                className="text-blue text-blue-800 font-bold hover:text-blue-600"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
