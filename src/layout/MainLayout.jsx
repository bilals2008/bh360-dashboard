// File: src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "./Header";
import Loading from "@/other/Loading";

function MainLayout() {
  return (
    <>
      <div className="min-h-screen bg-black/15">
        <Header />

        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
