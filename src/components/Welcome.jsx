import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import progress1 from "../assets/img/progress1.png";
import MultitaskingRafiki from "../assets/img/Multitasking-rafiki.png";
import message from "../assets/img/message.png";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const Welcome = () => {
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
      <div className="flex bg-signbg bg-no-repeat pt-[100px] bg-cover flex-col lg:flex-row items-center justify-center py-[100px] ">
        <div className="max-w-[500px] text-center lg:flex basis-[50%]">
          <h1 className="text-black uppercase text-[28px] my-4 font-bold">
            Welcome, {firstName ? firstName : userName}.
          </h1>
          <img
            src={progress1}
            alt="Login"
            className="object-cover w-full h-full"
          />
          <p className="w-[300px] text-[18px] font-bold md:w-[400px] lg:w-full">
            Tell us more about the job you want
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full basis-[50%] flex flex-col justify-center items-center  p-8  max-w-[555px] max-h-[669px]"
        >
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="Address"
              placeholder="Address"
              className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Portfolio (Optional)"
              className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-xl"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
          <Link to="/aboutYourself">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl w-[200px]"
            type="Submit"
          >
            Continue
          </button>
          </Link>
          <Link to="/dashboard/home" className="text-gray-600 mt-4 underline">Close and go to Dashboard</Link>
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

export default Welcome;
