import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import add from "../assets/img/addicon.png";
import user1 from "../assets/img/user1.png";
import credit from "../assets/img/credit2.png";
import "./account.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

const Account = () => {
  const { logOut, user, userName, firstName, auth } = useUserAuth();
  const userEmail = user.email;

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let dbUsers = [];
      querySnapshot.forEach((doc) => {
        dbUsers.push({ ...doc.data(), id: doc.id });
      });
      setUsers(dbUsers);
      const Id = dbUsers.map((LoginUserEmail) => LoginUserEmail.id);

      if (Id.includes(userEmail)) {
        const userInformation = [];
        Id.forEach((userId) => {
          const userById = dbUsers.find((user) => user.id === userId);
          if (userId === userEmail) {
            userInformation.push(userById);
            setUserInformation(userInformation);

            setInputFirstName(userInformation[0].firstName);
            setInputLastName(userInformation[0].lastName);
            setInputEmail(userInformation[0].emailAddress);
            setInputPhone(userInformation[0].phoneNumber);
          }
        });
      } else {
        console.log("User email not found in Id array.");
      }
    });
    return () => unsubscribe();
  }, [user]);

  const [userInformation, setUserInformation] = useState({});
  const [inputFirstName, setInputFirstName] = useState();
  const [inputLastName, setInputLastName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPhone, setInputPhone] = useState();
  const [inputNewPassword, setInputNewPassword] = useState();
  const [inputConfirmPassword, setInputConfirmPassword] = useState();
  const [users, setUsers] = useState();

  const handleAdd = async (e) => {
    e.preventDefault(e);

    // await addDoc(collection(db, "todos"), {
    await setDoc(doc(db, "users", userEmail), {
      firstName: inputFirstName,
      lastName: inputLastName,
      emailAddress: inputEmail,
      phoneNumber: inputPhone,
      password: inputNewPassword,
      confirmPassword: inputConfirmPassword,
    });
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${inputFirstName} ${inputLastName}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navigate = useNavigate();

  const handleDeleteUser = () => {
    if (user) {
      user
        .delete()
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: `${userName}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("User deleted successfully");
        })
        .catch((error) => {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: `Error deleting user. Please logout and sigin again for authetication purposes`,
                showConfirmButton: true,
              });
            },
          });
        });
    } else {
      console.error("No user is currently signed in.");
    }
  };

  const [selectedOption, setSelectedOption] = useState("account");
  const handleSelectChange = (e) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);

    navigate(`/dashboard/${newOption}`);
  };
  const got = (e) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);

    navigate(`/dashboard/${newOption}`);
  };

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
  const goToProfile = () => {
    // e.preventDefault();
    navigate("/dashboard/profile", { replace: true });
  };
  return (
    <div className=" bg-white">
      <div className=" hidden lg:flex  justify-between items-center">
        <div className="py-[20px]">
          <h1 className="text-black text-[28px] my-4 mx-16 font-bold">
            Account Information
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
        <div className="lg:flex hidden gap-4 border-b-2 border-gray-200">
          <div onClick={goToProfile} className=" cursor-pointer">
            Profile
          </div>
          <div className="border-b-4 border-blue-300">Account</div>
        </div>
        <div>
          <div className="mt-8 lg:hidden border-b-2 border-gray-200">
            <h1 className="  py-2 text-[20px] font-semibold ">
              Account Settings
            </h1>
            <select
              className=" border-blue-500 border-2 lg:hidden rounded-lg px-[40px] mb-8 py-2"
              id="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="profile">Profile</option>
              <option value="account">Account</option>
            </select>
            {/* <p>Selected Option: {selectedOption}</p> */}
          </div>
          <h1 className="py-2 text-[20px] font-semibold">
            Account Information
          </h1>{" "}
          <p className="text-black pt-4">Personal Details</p>
          <img className="m-4" src={user1} alt="" />
          <form onSubmit={handleAdd}>
            <div className="flex border-b-2 border-gray-200 flex-col">
              <div className=" lg:flex-row flex-col flex gap-8 lg:gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                    required
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
                    required
                    value={inputLastName}
                    onChange={(e) => setInputLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                    required
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
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
                    required
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                  />
                </div>
              </div>
              <p className="text-black pt-4">Change Password</p>

              <div className=" flex flex-col lg:flex-row gap-8 lg:gap-16 my-4 lg:w-[680px] w-[300px]">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                    required
                    value={inputNewPassword}
                    onChange={(e) => setInputNewPassword(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 p-2 w-[300px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                    placeholder=""
                    required
                    value={inputConfirmPassword}
                    onChange={(e) => setInputConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex mt-2 mb-8 gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-blue-400 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  Save
                </button>
              </div>

              <p className="text-black text-[20px] pt-4 mb-4">Delete Account</p>
              <p>
                By clicking this button, you'll initiate the process to delete
                your account and your personal data will be removed
              </p>
              <div className="flex mt-2 mb-8 gap-4">
                <button
                  onClick={() => handleDeleteUser()}
                  type="button"
                  className="px-4 py-4 text-blue-400 bg-white hover:bg-blue-600 border-red-500 border-2 rounded-md hover:text-white focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
