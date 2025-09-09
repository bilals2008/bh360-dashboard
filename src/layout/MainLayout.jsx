// File: src/layout/MainLayout.jsx
import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import '@fontsource/karla/500.css';
function MainLayout() {
  return (
    <>
      <div className="min-h-screen bg-black/15">
        <Header />

        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout