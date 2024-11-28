import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main className="min-h-screen mx-4">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made By Sahil Singh
      </div>
    </div>
  );
};

export default Layout;
