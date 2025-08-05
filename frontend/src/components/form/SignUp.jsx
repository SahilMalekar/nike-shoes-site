import React, { useState } from "react";
import { loginImg } from "../../assets/images";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/auth";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { confirmPassword, ...userData } = data; //remove confirmPassword
      const res = await signupUser(userData);
      toast.success("Signup successful! Redirecting to login...");
      console.log("Signup success", res.data);
      reset();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Signup failed");
      console.log("Signup error", err.response?.data?.msg || "Error");
    }
  };
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
        <form
          className="flex flex-col  gap-4 mt-4 font-montserrat"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
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
                {...register("firstName")}
                placeholder="Enter your first name"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
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
                {...register("lastName")}
                placeholder="Enter your last name"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
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
                {...register("phoneNumber")}
                placeholder="Enter your phoneNumber"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                placeholder="Enter your email"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
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
                {...register("password")}
                placeholder="Enter your password"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
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
                {...register("confirmPassword")}
                placeholder="Enter your confirmPassword"
                className="formInput"
                // onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="termsAndConditions"
                {...register("termsAndConditions")}
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
            {errors.termsAndConditions && (
              <p className="text-sm text-red-500 mt-1">
                {errors.termsAndConditions.message}
              </p>
            )}
            <div className="mt-8 lg:w-[30%]">
              <Button
                type
                label={isSubmitting ? "Submitting..." : "SignUp"}
                fullWidth
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-1 mt-2 ">
              <p>Already have an account?</p>
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
