import { useState } from "react";
import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";

import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
