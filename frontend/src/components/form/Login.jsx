import React from "react";
import { Login_Img } from "../../assets/images";
import Button from "../Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-container flex items-center justify-center gap-10 border border-gray-100 shadow-xl shadow-black/10 rounded-2xl p-6 py-10 bg-white">
      <div className="max-lg:hidden border-sm flex-1 border-slate-100 rounded-xl overflow-hidden max-w-[384px] h-[472px]">
        <img
          src={Login_Img}
          className=" w-full h-full object-cover object-left"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 max-lg:border-md border-gray-100 rounded-xl bg bg-white">
        <h1 className="text-4xl font-palanquin font-bold text-coral-red mb-3">
          Sign In
        </h1>
        <h3 className="text-xl text-slate-gray font-palanquin font-semibold">
          Welcome back!
        </h3>
        <p className="text-base text-slate-gray font-montserrat max-w-lg lg:max-w-sm">
          Sign in to access your account, view your orders, and explore
          exclusive member benefits.
        </p>

        <form className="flex flex-col gap-3 font-montserrat mt-4">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full max-w-lg"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Enter your password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-red w-full max-w-lg"
            />
          </div>

          <div className="flex items-center gap-2 justify-between mt-2 max-w-lg">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-coral-red focus:ring-coral-red border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-700 font-palanquin"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-900 font-semibold">
              Forgot password?
            </a>
          </div>
          <div className="mt-3 max-w-lg">
            <Button label="SignIn" fullWidth />
          </div>
        </form>
        <div className="flex gap-1 mt-2 ">
          <p>Don't have an account?</p>
          <Link
            to="/signup"
            className="text-blue text-blue-800 font-bold hover:text-blue-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
