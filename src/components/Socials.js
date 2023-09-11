import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user1 from "../assets/img/user1.png";

import { useUserAuth } from "../context/UserAuthContext";

const Socials = () => {
  const { logOut, user, userName, firstName } = useUserAuth();
  const [open, setOpen] = useState(false);

  const showDropDown = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const userEmail = user.email

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row space-y-6 lg:space-y-0 space-x-6">
      {user ? (
        <>
          {/* <p>{user}</p> */}
          <div
            className="flex items-center justify-center gap-[15px] relative"
            onClick={showDropDown}
          >
            <p className="text-[24px] text-black uppercase font-bold px-4">
              {firstName ? firstName : userName}
            </p>
            <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
              <img
                src={user.photoURL ? user.photoURL : user1}
                className="rounded-full"
                alt=""
              />
            </div>
            {open && (
              <div className="relative inline-block group">
                <div className="absolute top-[60px] -left-[300px] flex flex-col  bg-white border border-gray-300 shadow-md p-8 rounded-md items-center justify-center ">
                  <img
                    src={user.photoURL ? user.photoURL : user1}
                    alt=""
                    className="rounded-full my-10 cursor-pointer"
                    id="imageId"
                  />
                  <ul className="list-none items-center justify-center flex flex-col text-black text-[18px]">
                    <li className="hover:bg-gray-100 px-3 py-2 uppercase cursor-pointer">
                      {user.displayName ? user.displayName : userName}
                    </li>
                    <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                      {user.email}
                    </li>
                    <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                      <Link to="/dashboard/home">Dashboard </Link>
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
      ) : (
        <div className=" flex items-center justify-center flex-col md:flex-row gap-8">
          <Link to="/login">
            <button className="btn bg-white text-[#3171ED] w-[300px] md:w-[126px] md:h-[45px] hover:text-white border-2 border-[#3171ED] rounded-md flex justify-center items-center">
              Log in
            </button>
          </Link>
          <Link to="/login">
            <button className="btn createmyresumebtn  flex justify-center w-[300px] md:w-[210px] md:h-[45px] bg-[#3171ED] rounded-md items-center text-white">
              Create my resume
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Socials;
