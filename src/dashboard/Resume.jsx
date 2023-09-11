import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import add from "../assets/img/addicon.png";
import hrmanager from "../assets/img/hrmanager.png";
import credit from "../assets/img/credit2.png";
import { Link, Navigate } from "react-router-dom";
import user1 from "../assets/img/user1.png";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { logOut, user, userName, firstName } = useUserAuth();
  return (
    <div className=" bg-white ">
      <div className="flex justify-between items-center">
        <div className="py-[20px]">
          <h1 className="text-black pl-8 text-[28px] my-4 font-bold">My Resumes</h1>
        </div>
        <div className="hidden lg:flex lg:flex-row items-center justify-evenly gap-2 pt-2">
          <img className="w-4 h-4 " src={credit} alt="" />
          <p>25 </p>
          <p> Credits</p>
          <img src="" alt="" />

          {
            <>
              {/* <p>{user}</p> */}
              <div
                className="flex flex-col lg:flex-row items-center  relative"
                onClick={showDropDown}
              >
                <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
                  <img
                    src={user.photoURL ? user.photoURL : user1}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <p className="text-[14px] uppercase py-2 text-black font-semibold px-4">
                {firstName ? firstName : userName }
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
                           {user.displayName ? user.displayName :userName }
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
      <div className="grid grid-cols-2 lg:flex">
        <img src={add} alt="" />
        <img className="" src={hrmanager} alt="" />
      </div>

      
    </div>
  );
};

export default Resume;
