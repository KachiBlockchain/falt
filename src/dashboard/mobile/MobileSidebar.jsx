import React, { useState } from "react";
import { navigation } from "../../data";

import Dashboardview from "../Dashboardview";
import Resume from "../Resume";
import Letter from "../Letter";
import Questions from "../Questions";
import Credits from "../Credits";

import { Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import Account from "../Account";
import add from "../../assets/img/addicon.png";
import user1 from "../../assets/img/user1.png";
import credit from "../../assets/img/credit2.png";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscCreditCard } from "react-icons/vsc";
import { BiHome } from "react-icons/bi";
import { LuFileQuestion } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { useUserAuth } from "../../context/UserAuthContext";

import { CgFileDocument } from "react-icons/cg";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(true);
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
  const menus = [
    { name: "Home", link: "home", icon: BiHome },
    { name: "My Resumes", link: "resume", icon: CgFileDocument },
    { name: "My Cover Letters", link: "letter", icon: IoDocumentTextOutline },
    {
      name: "Interview Questions",
      link: "question",
      icon: LuFileQuestion,
      margin: true,
    },
    { name: "Credits", link: "credit", icon: VscCreditCard },
    { name: "My Profile", link: "profile", icon: FaUserAlt },
    { name: "Account", link: "account", icon: MdManageAccounts },
  ];
  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <div className="bg-white h-[1000px]">
      <nav className="relative w-full flex p-4 justify-between items-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer text-white "
        >
          <GiHamburgerMenu className="w-8 h-8 text-[#3171ED]" />
        </div>
        <div className=" relative w-[300px] z-30   justify-between">
          <div className="flex  items-center justify-end gap-2 pt-2">
            <img className="w-4 h-4 " src={credit} alt="" />
            <p className="text-blue-500">25 </p>

            {
              <>
                <div
                  className="flex  items-center  relative"
                  onClick={showDropDown}
                >
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
                          alt="Sample Image"
                          className="rounded-full my-10 cursor-pointer"
                          id="imageId"
                        />
                        <ul className="list-none items-center justify-center flex flex-col text-black text-[18px]">
                          <li className="hover:bg-gray-100 uppercase px-3 py-2 cursor-pointer">
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

        {/* circl */}
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-4 h-4 rounded-full z-40 bg-mobileHanbg bg-no-repeat bg-cover fixed top-0 right-0"
        ></motion.div>

        {/* menu  */}

        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate={isOpen ? "visible" : " "}
          className={`${
            isOpen ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 z-40 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden pt-[10px] `}
        >
          {/* close icon */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute  top-6 left-8"
          >
            <XIcon className="w-8 mb-2 h-8" />
            <img src={logo} />
          </div>
          <div className="">
            <div className={` duration-500 text-[#4B68A0] px-4`}>
              <div className="mt-4 flex flex-col relative">
                {menus?.map((menu, index) => (
                  <>
                    <Link
                      key={index}
                      to={menu?.link}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center text-md gap-2 font-medium py-2 px-4 hover:bg-white rounded-md`}
                    >
                      <div>
                        {React.createElement(menu?.icon, { size: "20" })}
                      </div>
                      <h2
                        style={{ transitionDelay: `${index + 3}00ms` }}
                        className={`whitespace-pre duration-500 ${
                          !openNav &&
                          " opacity-0 translate-x-28 overflow-hidden "
                        } text-[#4B68A0]`}
                      >
                        {menu?.name}
                      </h2>
                      <h2
                        className={`${
                          openNav && "hidden"
                        } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                      >
                        {menu?.name}
                      </h2>
                    </Link>
                  </>
                ))}
                <div className="group flex items-center cursor-pointer text-xl gap-3.5 font-medium p-2 my-2 gap-x-6 hover:bg-white rounded-md">
                  <div onClick={() => handleLogout()} className="">
                    {React.createElement(SlLogout, { size: "20" })}
                  </div>
                  <button
                    onClick={() => handleLogout()}
                    style={{ transitionDelay: "900ms" }}
                    className={`whitespace-pre duration-500 ${
                      !openNav && " opacity-0 translate-x-28 overflow-hidden "
                    } text-[#4B68A0]`}
                  >
                    Logout
                  </button>
                  <h2
                    className={`${
                      openNav && "hidden"
                    } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                  >
                    Logout
                  </h2>
                </div>
                <div className="flex mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Create new resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.ul>
      </nav>

      <section>
        <Routes>
          {/* <Route path="/" element={} /> */}
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
  );
};

export default MobileSidebar;
