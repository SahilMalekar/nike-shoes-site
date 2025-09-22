import React, { useState } from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="flex h-screen">
      {/* SideBar */}
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <NavBar setOpenSideBar={setOpenSideBar} />

        <main className="p-4">
          <Outlet /> {/* 👈 child routes will render here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
