import React, { useState } from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className=" h-screen">
      {/* SideBar */}
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      {/* Main content */}
      <div className=" md:ml-[12rem]">
        <NavBar setOpenSideBar={setOpenSideBar} />

        <main className="p-4 mt-12 overflow-x-hidden">
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
            <Outlet />
            {/* 👈 child routes will render here */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
