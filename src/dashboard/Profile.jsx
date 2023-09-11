import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import add from "../assets/img/addicon.png";
import user1 from "../assets/img/user1.png";
import credit from "../assets/img/credit2.png";

import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const Profile = () => {

  const { logOut, user, userName, firstName } = useUserAuth();

  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // const id = selectedUser.id;

  const userEmail = user.email;

  const [inputFirstName, setInputFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [date, setDate] = useState();

  

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
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("profile");
  const handleSelectChange = (e) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);

    navigate(`/dashboard/${newOption}`);
  };
  const profileAccount = (e) => {
    navigate(`/dashboard/profile`);
  };
  return (
    <div className=" bg-white w-full ">
      <div className="lg:flex hidden  justify-between items-center">
        <div className="py-[20px] mx-16">
          <h1 className="text-black text-[28px] my-4 font-bold">
            Account Settings
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-2 pt-2">
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

      <div className="p-[50px]">
        <div className="lg:flex  hidden gap-4 border-b-2 border-gray-200">
          <div className="cursor-pointer border-b-4 border-blue-300">
            Profile
          </div>
          <NavLink to="/dashboard/account" className="cursor-pointer">
            Account
          </NavLink>
        </div>
        <div className="border-b-2 border-gray-200 lg:hidden  flex-col  gap-4 ">
          <h1 className="mt-8 py-2 text-[20px] font-semibold ">
            Account Settings
          </h1>
          <div>
            <select
              className=" border-blue-500 border-2 lg:hidden rounded-lg px-[40px] mb-8 py-2"
              id="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="profile">Profile</option>
              <option value="account">Account</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="py-2 text-[20px] font-semibold">Resume Information</h1>
          <p className="py-2">Personal Details</p>
          <img className="m-4" src={user1} alt="" />
          <div className="">
            <div className="flex lg:flex-col flex-col border-b-2 border-gray-200 ">
              <div className=" flex lg:flex-row flex-col gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                    value={inputFirstName}
                    onChange={(e) => setInputFirstName(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>
              <div className=" flex lg:flex-row flex-col gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-span-2 my-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-[300px] lg:w-[500px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  placeholder=""
                />
              </div>
              <div className="col-span-2 my-4">
                <label className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="url"
                  className="mt-1 p-2 w-[300px] lg:w-[500px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  placeholder=""
                />
              </div>

              <div className="flex lg:flex-row flex-col my-8">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Profile
                  </label>
                  <textarea
                    className="mt-1 p-2 w-[300px] lg:w-[500px] h-32 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
                <div className="py-[50px] gap-4 pl-4 flex flex-col items-start lg:items-center">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    AI Writer
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="flex border-b-2 border-gray-200 flex-col">
              <h1 className="text-black text-[20px] pt-8 font-semibold">
                Work Experience
              </h1>
              <div className=" flex lg:flex-row flex-col gap-8 lg:gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>

              <div className=" flex gap-8 items-center justify-start my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Time Period
                  </label>
                  <div className=" flex gap-4 items-center justify-center">
                    <input
                      type="date"
                      className="mt-1 p-2  w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder="Select Month"
                    />{" "}
                    -
                    <input
                      type="date"
                      className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="currentlyWorkingCheckbox"
                  className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:ring focus:ring-blue-300"
                />
                <label
                  htmlFor="currentlyWorkingCheckbox"
                  className="text-sm text-gray-700"
                >
                  I currently work here
                </label>
              </div>

              <div className="flex my-8 gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Experience
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="flex border-b-2 border-gray-200 flex-col">
              <h1 className="text-black text-[20px] pt-8 font-semibold">
                Education
              </h1>
              <div className="lg:flex-row flex-col flex gap-8 lg:gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Institution
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>

              <div className=" flex gap-8 items-center justify-start my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Time Period
                  </label>
                  <div className=" flex gap-4 items-center justify-center">
                    <input
                      type="date"
                      className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder="Select Month"
                    />{" "}
                    -
                    <input
                      type="date"
                      className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="currentlyWorkingCheckbox"
                  className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:ring focus:ring-blue-300"
                />
                <label
                  htmlFor="currentlyWorkingCheckbox"
                  className="text-sm text-gray-700"
                >
                  I currently School here
                </label>
              </div>

              <div className="flex my-8 gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Education
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="flex border-b-2 border-gray-200 flex-col">
              <h1 className="text-black text-[20px] pt-8 font-semibold">
                Skills
              </h1>

              <div className=" flex gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter the skills you possess
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex mt-2 mb-8 gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Skills
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="flex  flex-col">
              <h1 className="text-black text-[20px] pt-8 font-semibold">
                Optional
              </h1>

              <div className=" flex gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your certifications
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex mt-2 mb-8 gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Certifications
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Save
                </button>
              </div>

              <div className="flex  flex-col">
                <h1 className="text-black text-[20px] pt-2 font-semibold">
                  Projects
                </h1>
                <div className=" flex flex-col gap-16 my-2 lg:w-[680px] w-[300px]">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      className="mt-1 p-2 w-[300px] lg:w-[500px] h-32 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className=" flex gap-8 items-center justify-start my-2 lg:w-[680px] w-[300px]">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Time Period
                    </label>
                    <div className=" flex gap-4 items-center justify-center">
                      <input
                        type="date"
                        className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                        placeholder="Select Month"
                      />{" "}
                      -
                      <input
                        type="date"
                        className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex my-8 gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Add Projects
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Save
                  </button>
                </div>
                <h1 className="text-black text-[20px] pt-2 font-semibold">
                  Volunteering
                </h1>
                <div className=" flex gap-16 my-4 lg:w-[680px] w-[300px]">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Tell us about your volunteering efforts
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="flex mt-2 mb-8 gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Add Volunteering
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Save
                  </button>
                </div>
                <h1 className="text-black text-[20px] pt-2 font-semibold">
                  Social Media
                </h1>
                <div className=" flex flex-col gap-4 my-4 lg:w-[680px] w-[300px]">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Instagram
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Twitter
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                      placeholder=""
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="currentlyWorkingCheckbox"
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:ring focus:ring-blue-300"
                    />
                    <label
                      htmlFor="currentlyWorkingCheckbox"
                      className="text-sm text-gray-700"
                    >
                      Use Icons
                    </label>
                  </div>
                </div>

                <div className="flex mt-2 mb-8 gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-blue-400 bg-white border-blue-400 border-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Add Social Media
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
