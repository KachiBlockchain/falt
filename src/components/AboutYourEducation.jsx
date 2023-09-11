import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import progress4 from "../assets/img/progress4.png";
import AIWriter from "../assets/img/AI Writer.png";
import addIcon from "../assets/img/plusIcon.png";
import MultitaskingRafiki from "../assets/img/Multitasking-rafiki.png";
import message from "../assets/img/message.png";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const AboutYourEducation = () => {
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const { user, logIn, googleSignIn, logOut, userName, firstName } =
    useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {};

  const handleGoogleSignIn = async (e) => {};

  return (
    <>
      <Header />
      <div className="flex bg-signbg bg-no-repeat pt-[100px] bg-cover flex-col lg:flex-row items-center justify-center py-[100px]">
        <div className="max-w-[500px] text-center lg:flex basis-[50%] ">
          <h1 className="text-black uppercase text-[20px] my-4 font-bold">
            Tell us about your Education
          </h1>
          <img
            src={progress4}
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full basis-[50%] flex flex-col justify-center items-center  p-8  max-w-[555px] max-h-[669px]"
        >
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Institution Name"
              className="w-[310px] mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Degree"
              className="w-[310px] mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" flex gap-8 items-center justify-start my-4 lg:w-[680px] w-[300px]">
            <div className="col-span-2">
              <div className=" flex gap-4 items-center justify-center">
                <input
                  type="date"
                  className="mt-1 p-2  w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  placeholder="Select Month"
                />
                <input
                  type="date"
                  className="mt-1 p-2 w-[129px] lg:w-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-8 items-center justify-start my-4 lg:w-[680px] w-[300px]">
            <div className="flex flex-col items-center justify-center px-8">
              <div className="gap-x-4 flex my-4 items-center justify-center">
                <input
                  type="checkbox"
                  id="currentlyWorkingCheckbox"
                  className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:ring focus:ring-blue-300"
                />
                <label
                  htmlFor="currentlyWorkingCheckbox"
                  className="text-sm text-gray-700"
                >
                  I currently study here
                </label>
              </div>
            </div>
          </div>
          <Link to="/AboutYourSkills">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl w-[200px]"
              type="Submit"
            >
              Continue
            </button>
          </Link>
          <Link to="/dashboard/home" className="text-gray-600 mt-4 underline">
            Close and go to Dashboard
          </Link>
        </form>
        <div className="px-[20px] flex items-end justify-between w-full">
          <img src={MultitaskingRafiki} alt="Login" className="" />
          <img src={message} alt="Login" className="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutYourEducation;
