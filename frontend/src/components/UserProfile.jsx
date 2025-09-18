import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart, // Sales
  faUsers, // Users
  faInbox, // Inbox
  faUser, // Profile
  faCog, // Settings
  faBoxOpen, // Products
  faTags, // Pricing
  faFileInvoice, // Billing
  faSignOutAlt,
  faBell,
  faUserTie, // Logout
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      {/* <!-- Notifications --> */}
      <button
        type="button"
        data-dropdown-toggle="notification-dropdown"
        className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">View notifications</span>
        {/* <!-- Bell icon --> */}
        <FontAwesomeIcon icon={faBell} />
      </button>

      {/* <!-- Apps --> */}
      <button
        onClick={() =>
          setIsMenuOpen((prev) => {
            setIsProfileOpen(false);
            return !prev;
          })
        }
        type="button"
        className="block p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        {/* <span className="sr-only">View notifications</span> */}
        {/* <!-- Icon --> */}
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={`absolute top-14 right-0 overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 transform transition-all duration-200 origin-top-right
    ${isMenuOpen ? "scale-100 opacity-95" : "scale-80 opacity-0 pointer-events-none"}
  `}
      >
        <div className="block text-red-400 py-2 px-4 text-base font-bold text-center  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          Apps
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Sales
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Users
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faInbox}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Inbox
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Profile
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faCog}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Settings
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Products
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faTags}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Pricing
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faFileInvoice}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Billing
            </div>
          </a>

          <a
            href="#"
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Logout
            </div>
          </a>
        </div>
      </div>
      <button
        onClick={() =>
          setIsProfileOpen((prev) => {
            setIsMenuOpen(false);
            return !prev;
          })
        }
        type="button"
        className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
        />
      </button>
      {/* <!-- Dropdown menu --> */}

      <div
        className={`absolute top-12 right-20 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 font-montserrat transform transition-all duration-200 origin-top-right
    ${isProfileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
  `}
      >
        <div className="py-3 px-4">
          <span className="block text-sm font-semibold text-gray-900 dark:text-white">
            {user?.user?.name}
          </span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            {user?.user?.email}
          </span>
        </div>
        <ul
          className="py-1 text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              My profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              Account settings
            </a>
          </li>
        </ul>
        <ul
          className="py-1 text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              My likes
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {" "}
                <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
              </svg>
              Collections
            </a>
          </li>
          <li onClick={() => navigate("/admin", { replace: true })}>
            <a
              href="#"
              className="flex gap-2 items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faUserTie} className="text-gray-500" />
              Admin dashboard
            </a>
          </li>
        </ul>
        <ul
          className="py-1 font-bold dark:text-gray-400 text-coral-red"
          aria-labelledby="dropdown"
          onClick={() => logout()}
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
