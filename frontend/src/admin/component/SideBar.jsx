import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChartPie,
  faFileAlt,
  faShoppingCart,
  faEnvelope,
  faLock,
  faBook,
  faCubes,
  faQuestionCircle,
  faCog,
  faSlidersH,
  faFlag,
  faChevronDown,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";

const SideBar = ({ openSideBar, setOpenSideBar }) => {
  const [openMenu, setOpenMenu] = useState({
    pages: false,
    sales: false,
    messages: false,
    auth: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 
    transition-transform duration-300 ease-in-out
    bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700
    ${openSideBar ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0`}
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          {/* Search (mobile) */}
          <form className="hidden sm:block mb-2">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400"
              />
              <input
                type="text"
                name="search"
                id="sidebar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search"
              />
            </div>
          </form>

          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ml-3">Overview</span>
              </a>
            </li>

            {/* Pages (dropdown-like) */}
            <li>
              <button
                onClick={() => toggleMenu("pages")}
                type="button"
                aria-expanded="false"
                className="flex items-center justify-between p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  />
                  <span className="ml-3">Pages</span>
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600"
                />
              </button>

              {/* placeholder sublist (hidden by default) */}
              <ul
                id="dropdown-pages"
                className={`${openMenu.pages ? "block" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Kanban
                  </a>
                </li>
              </ul>
            </li>

            {/* Sales (dropdown-like) */}
            <li>
              <button
                onClick={() => toggleMenu("sales")}
                type="button"
                className="flex items-center justify-between p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  />
                  <span className="ml-3">Sales</span>
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600"
                />
              </button>

              <ul
                id="dropdown-sales"
                className={`${openMenu.sales ? "block" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
              </ul>
            </li>

            {/* Messages (dropdown-like with badge) */}
            <li>
              <button
                type="button"
                aria-expanded="false"
                className="flex items-center justify-between p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  />
                  <span className="ml-3 whitespace-nowrap">Messages</span>
                </span>

                <div className="flex items-center gap-2">
                  <span className="inline-flex justify-center items-center w-5 h-5 bg-blue-200 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    4
                  </span>
                </div>
              </button>
            </li>

            {/* Authentication (dropdown-like) */}
            <li>
              <button
                onClick={() => toggleMenu("auth")}
                type="button"
                aria-expanded="false"
                className="flex items-center justify-between p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  />
                  <span className="ml-3">Authentication</span>
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600"
                />
              </button>

              <ul
                id="dropdown-authentication"
                className={`${openMenu.auth ? "block" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>

            {/* Other static links */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faBook}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
                />
                <span className="ml-3">Docs</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faCubes}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
                />
                <span className="ml-3">Components</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
                />
                <span className="ml-3">Help</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faCog}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
                />
                <span className="ml-3">Settings</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon
                  icon={faSlidersH}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
                />
                <span className="ml-3">Controls</span>
              </a>
            </li>
          </ul>

          {/* Footer - Language */}
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
            <button className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
              <FontAwesomeIcon icon={faFlag} className="w-5 h-5 mr-2" />
              English
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop (only visible on small screens when sidebar is open) */}
      {openSideBar && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setOpenSideBar(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
