import React, { useState } from "react";
import add from "../assets/img/addicon.png";
import template from "../assets/img/standingladyTabs.png";
import template2 from "../assets/img/personFileSharing.png";
import { useUserAuth } from "../context/UserAuthContext";
import credit from "../assets/img/credit2.png";
import { Link, Navigate } from "react-router-dom";
import user1 from "../assets/img/user1.png";
import Footer from "./Footer";
import Header from "./Header";

const resume = [{ name: "Falt", img: template }];
const resume1 = [{ name: "Kachi", img: template2 }];
const DefaultDashboard = () => {
  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };
  const { logOut, user, userName, firstName } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className=" bg-white mt-[70px] px-[50px]">
        <div className="flex justify-between items-center ">
          <div className="py-[20px] ">
            <h1 className="text-black uppercase text-[28px] my-4 font-bold">
              Welcome, {firstName ? firstName : userName}.
            </h1>
            <p className="w-[200px] md:w-[400px] lg:w-full">
              Craft your Dream Career, One Resume at a Time - Welcome to Your
              Future!
            </p>
          </div>
          <div className="lg:flex hidden lg:flex-row items-center justify-evenly gap-2 pt-2">
            <img className="w-4 h-4 " src={credit} alt="" />
            <p>25 </p>
            <p> Credits</p>
            <img src="" alt="" />

            {
              <>
                <div
                  className="flex flex-col lg:flex-row items-center  relative"
                  onClick={showDropDown}
                >
                  <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
                    <img
                      src={user?.photoURL ? user.photoURL : user1}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <p className="text-[14px] uppercase py-2 text-black font-semibold px-4">
                    {firstName ? firstName : userName}
                  </p>
                  {open && (
                    <div className="relative inline-block group">
                      <div className="absolute top-[60px] -left-[300px] flex flex-col  bg-white border border-gray-300 shadow-md p-8 rounded-md items-center justify-center ">
                        <img
                          src={user.photoURL ? user.photoURL : user1}
                          alt="Sample Image"
                          className="rounded-full my-10 cursor-pointer"
                          id="imageId"
                        />
                        <ul className="list-none items-center justify-center flex flex-col text-black text-[18px]">
                          <li className="hover:bg-gray-100 px-3 uppercase py-2 cursor-pointer">
                            {user.displayName ? user.displayName : userName}
                          </li>
                          <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                            {user.email}
                          </li>
                          <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                            <Link to="/">Home </Link>
                          </li>
                          <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                            <Link to="/dashboard">Dashboard </Link>
                          </li>
                          <li
                            onClick={handleLogout}
                            className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </>
            }
          </div>
        </div>
        <Link to="/dashboard/home">
          <img src={add} alt="" />
        </Link>
        <div>
          <h1 to="dashboard/home" className="text-black text-[20px] my-4 font-bold">
            Resumes Templates.
          </h1>
          <ul className="grid grid-cols-2 lg:grid-cols-4 ">
            {resume.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-black text-[20px] my-4 font-bold">
            Cover Letter Templates.
          </h1>
          <ul className="grid grid-cols-2 lg:grid-cols-4 ">
            {resume1.map((item, index) => (
              <li key={index}>
                <img className="" src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DefaultDashboard;
