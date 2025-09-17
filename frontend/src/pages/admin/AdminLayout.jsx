import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
        {/* SideBar */}
        <SideBar />

            {/* Main content */}
        <div className='flex-1 flex flex-col'>
            
            <NavBar />

            <main className='p-4'>
                <Outlet />  {/* 👈 child routes will render here */}
            </main>
        </div>
    </div>
  )
}

export default AdminLayout