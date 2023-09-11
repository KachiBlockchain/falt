import React, { useState } from "react";
import Dashboardview from "./Dashboardview";
import Resume from "./Resume";
import Sidebar from "./Sidebar";
import Letter from "./Letter";
import Questions from "./Questions";
import Credits from "./Credits";

import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Account from "./Account";
import MobileSidebar from "./mobile/MobileSidebar";
import DefaultDashboard from "../components/DefaultDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="relative -m-4 w-full bg-white  hidden lg:flex  min-h-screen flex-row">
        {" "}
        {/* entire dashboard color */}
        <div className="h-screen  bg-[#8BC6EC] object-cover flex items-center sticky top-0 ">
          {/* Sidebar color */}
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Routes>
            <Route path="home" element={<Dashboardview />} />
            <Route path="default" element={<DefaultDashboard />} />
            <Route path="resume" element={<Resume />} />
            <Route path="letter" element={<Letter />} />
            <Route path="question" element={<Questions />} />
            <Route path="credit" element={<Credits />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="logout" element={<div>Logout</div>} />
          </Routes>
        </div>
      </div>

      {/* <div className="bg-white hidden lg:flex lg:flex-col">  
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-3 h-screen">
            <Sidebar />
          </div>

          <div className="col-span-9 h-screen pl-2">
            <section>
              <Routes>
              
                <Route path="home" element={<Dashboardview />} />
                <Route path="resume" element={<Resume />} />
                <Route path="letter" element={<Letter />} />
                <Route path="question" element={<Questions />} />
                <Route path="credit" element={<Credits />} />
                <Route path="profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
                <Route path="logout" element={<div>Logout</div>} />
              </Routes>
            </section>
          </div>
        </div>
      </section>
    </div> */}

      {/* Tablet and Mobile View */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </>
  );
};

export default Dashboard;
