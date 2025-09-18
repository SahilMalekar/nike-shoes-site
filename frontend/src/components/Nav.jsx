import { useState } from "react";
import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import logoutImg from "../assets/images/logout.png";

import { navLinks } from "../constants";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";

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
        {user?.token && <UserProfile />}
      </nav>
    </header>
  );
};

export default Nav;
