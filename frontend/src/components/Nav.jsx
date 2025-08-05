import { useState } from "react";
import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import logoutImg from "../assets/images/logout.png";

import { navLinks } from "../constants";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  console.log(user);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            height={29}
            width={129}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        {/* Desktop Navigation */}
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" text-lg text-slate-gray leading-normal font-montserrat"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* {logged user name} */}
        {user?.token && (
          <div className="max-lg:hidden flex items-center">
            {/* <div className="bg-white-400 hover:bg-gray-200 cursor-pointer h-10 w-10 rounded-full flex items-center justify-center"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-coral-red"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
            {/* </div> */}
            <p className="text-xl font-bold font-montserrat leading-normal text-slate-gray pl-1 pr-3">
              {user?.user?.firstName}
            </p>

            {/* <Button label="logout" /> */}
            <div
              className="bg-white-400 cursor-pointer h-8 w-8 rounded-full flex items-center justify-center hover:scale-90 transition-transform duration-300"
              onClick={() => logout()}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-8 text-coral-red"
              >
                <path
                  fillRule="evenodd"
                  d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z"
                  clipRule="evenodd"
                />
                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
              </svg> */}
              <img src={logoutImg} />
            </div>
          </div>
        )}

        <div
          className=" max-lg:block hidden cursor-pointer "
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
        {/* {Mobile Navigation} */}
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col gap-6 mt-4 shadow-md bg-white p-6 rounded-md absolute z-50 right-4 top-[80px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="text-base text-slate-gray font-montserrat"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
